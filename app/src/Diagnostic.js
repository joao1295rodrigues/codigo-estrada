// Ecrã de diagnóstico dos anúncios (só existe na versão "diagnostico").
// Executa os passos um a um e guarda o último passo iniciado, para se perceber onde a app falha.
import { useEffect, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import mobileAds, { AdEventType, AdsConsent, BannerAd, BannerAdSize, InterstitialAd, TestIds } from 'react-native-google-mobile-ads';
import adsConfig from '../ads.config.json';

const KEY = 'diag:last';
const fmt = (e) => [e?.code, e?.message ?? String(e)].filter(Boolean).join(' ');

const loadAndShowInterstitial = (unitId) =>
  new Promise((resolve, reject) => {
    const ad = InterstitialAd.createForAdRequest(unitId);
    const timer = setTimeout(() => reject(new Error('sem resposta em 20 s')), 20000);
    ad.addAdEventListener(AdEventType.LOADED, () => {
      clearTimeout(timer);
      ad.show().then(() => resolve('mostrado')).catch(reject);
    });
    ad.addAdEventListener(AdEventType.ERROR, (e) => {
      clearTimeout(timer);
      reject(e);
    });
    ad.load();
  });

export default function Diagnostic() {
  const [log, setLog] = useState([]);
  const [previous, setPrevious] = useState('(a ler…)');
  const [banner, setBanner] = useState(null);

  const add = (t) => setLog((l) => [`${new Date().toLocaleTimeString()}  ${t}`, ...l].slice(0, 60));

  useEffect(() => {
    AsyncStorage.getItem(KEY).then((v) => setPrevious(v || '(nada registado)')).catch(() => setPrevious('(sem acesso ao registo)'));
  }, []);

  const run = async (name, fn) => {
    await AsyncStorage.setItem(KEY, `INICIADO: ${name}`).catch(() => {});
    add(`▶ ${name}`);
    try {
      const r = await fn();
      add(`✔ ${name}${r ? ' → ' + r : ''}`);
      await AsyncStorage.setItem(KEY, `CONCLUÍDO: ${name}`).catch(() => {});
    } catch (e) {
      add(`✖ ${name} → ${fmt(e)}`);
      await AsyncStorage.setItem(KEY, `ERRO em ${name}: ${fmt(e)}`).catch(() => {});
    }
  };

  const steps = [
    ['1. Pedir consentimento (RGPD)', async () => {
      await AdsConsent.gatherConsent();
      const i = await AdsConsent.getConsentInfo();
      return `estado=${i.status} podePedirAnúncios=${i.canRequestAds}`;
    }],
    ['2. Iniciar o SDK de anúncios', async () => {
      const st = await mobileAds().initialize();
      return `${st.length} adaptador(es)`;
    }],
    ['3. Faixa de TESTE', async () => { setBanner('teste'); return 'a carregar…'; }],
    ['4. Faixa REAL', async () => { setBanner('real'); return 'a carregar…'; }],
    ['5. Intercalar de TESTE', () => loadAndShowInterstitial(TestIds.INTERSTITIAL)],
    ['6. Intercalar REAL', () => loadAndShowInterstitial(adsConfig.interstitialUnitId)],
  ];

  const bannerUnit = banner === 'real' ? adsConfig.bannerUnitId : TestIds.ADAPTIVE_BANNER;

  return (
    <ScrollView style={s.root} contentContainerStyle={s.content}>
      <Text style={s.h1}>Diagnóstico de anúncios</Text>
      <Text style={s.p}>Toca nos passos por ordem. Se a app fechar, abre-a de novo: o ecrã diz em que passo parou. Diz-me esse passo.</Text>

      <View style={s.box}>
        <Text style={s.label}>Da última vez:</Text>
        <Text style={s.mono}>{previous}</Text>
      </View>

      {steps.map(([name, fn]) => (
        <Pressable key={name} style={s.btn} onPress={() => run(name, fn)}>
          <Text style={s.btnText}>{name}</Text>
        </Pressable>
      ))}

      {banner ? (
        <View style={{ alignItems: 'center', marginVertical: 12 }}>
          <BannerAd
            key={banner}
            unitId={bannerUnit}
            size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
            onAdLoaded={() => add(`✔ faixa ${banner} carregada`)}
            onAdFailedToLoad={(e) => add(`✖ faixa ${banner} → ${fmt(e)}`)}
          />
        </View>
      ) : null}

      <Text style={s.label}>Registo (mais recente primeiro):</Text>
      <View style={s.box}>
        {log.length ? log.map((l, i) => <Text key={i} style={s.mono}>{l}</Text>) : <Text style={s.mono}>(vazio)</Text>}
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#0f172a' },
  content: { padding: 16, paddingTop: 56, paddingBottom: 48 },
  h1: { color: '#f1f5f9', fontSize: 22, fontWeight: '700', marginBottom: 8 },
  p: { color: '#a3b1c6', fontSize: 15, marginBottom: 12 },
  label: { color: '#a3b1c6', fontSize: 13, marginTop: 12, marginBottom: 4 },
  box: { backgroundColor: '#1e293b', borderRadius: 10, padding: 12, marginVertical: 6 },
  mono: { color: '#f1f5f9', fontSize: 13, fontFamily: 'monospace', marginVertical: 2 },
  btn: { backgroundColor: '#2563eb', borderRadius: 10, padding: 14, marginVertical: 5 },
  btnText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
