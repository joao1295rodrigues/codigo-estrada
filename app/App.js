import { useCallback, useEffect, useMemo, useState } from 'react';
import { BackHandler, useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import QUESTIONS from './src/questions';
import { CONFIG } from './src/config';
import { palettes } from './src/theme';
import { answer, buildSession, categoriesOf, initialStore, results, shouldShowInterstitial } from './src/logic';
import { initAds, prepareInterstitial, showAdPrivacyOptions, showInterstitialIfReady } from './src/ads';
import { Home, Quiz, Result } from './src/screens';

const CATEGORIES = categoriesOf(QUESTIONS);

// Traduz o pedido do utilizador numa sessão de treino.
const specFor = (kind, store) => {
  switch (kind.type) {
    case 'exam':
      return { mode: 'exam', label: 'Simulacro', pool: QUESTIONS, size: CONFIG.examSize };
    case 'wrong':
      return { mode: 'train', label: 'Revisão de erros', pool: QUESTIONS.filter((q) => store.wrong.includes(q.id)), size: QUESTIONS.length };
    case 'cat':
      return { mode: 'train', label: kind.cat, pool: QUESTIONS.filter((q) => q.c === kind.cat), size: QUESTIONS.length };
    default:
      return { mode: 'train', label: 'Treino geral', pool: QUESTIONS, size: QUESTIONS.length };
  }
};

export default function App() {
  const scheme = useColorScheme();
  const colors = palettes[scheme === 'dark' ? 'dark' : 'light'];

  const [store, setStore] = useState(initialStore);
  const [loaded, setLoaded] = useState(false);
  const [session, setSession] = useState(null);
  const [kind, setKind] = useState(null);
  const [finished, setFinished] = useState(false);
  const [adsReady, setAdsReady] = useState(false);

  // Carrega o progresso guardado no telemóvel.
  useEffect(() => {
    AsyncStorage.getItem(CONFIG.storeKey)
      .then((raw) => {
        if (raw) setStore({ ...initialStore, ...JSON.parse(raw) });
      })
      .catch(() => {})
      .finally(() => setLoaded(true));
  }, []);

  // Consentimento (RGPD) e arranque dos anúncios.
  useEffect(() => {
    initAds().then((ok) => {
      setAdsReady(ok);
      if (ok) prepareInterstitial();
    });
  }, []);

  const persist = useCallback((next) => {
    setStore(next);
    AsyncStorage.setItem(CONFIG.storeKey, JSON.stringify(next)).catch(() => {});
  }, []);

  const start = useCallback(
    (k) => {
      const spec = specFor(k, store);
      if (!spec.pool.length) return;
      setKind(k);
      setFinished(false);
      setSession(buildSession(spec));
    },
    [store]
  );

  const goHome = useCallback(() => {
    setSession(null);
    setFinished(false);
  }, []);

  const onAnswer = useCallback(
    (idx) => {
      const next = answer(session, store, idx);
      setSession(next.session);
      persist(next.store);
    },
    [session, store, persist]
  );

  const onNext = useCallback(() => {
    if (session.i + 1 < session.items.length) {
      setSession({ ...session, i: session.i + 1 });
    } else {
      const done = store.sessions + 1;
      persist({ ...store, sessions: done });
      setFinished(true);
      if (shouldShowInterstitial(done, CONFIG.interstitialEvery)) showInterstitialIfReady();
    }
  }, [session, store, persist]);

  // Botão "voltar" do Android: sai do treino em vez de fechar a app.
  useEffect(() => {
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      if (session) {
        goHome();
        return true;
      }
      return false;
    });
    return () => sub.remove();
  }, [session, goHome]);

  const result = useMemo(() => (session && finished ? results(session, CONFIG.passRatio) : null), [session, finished]);

  if (!loaded) return null;

  let screen;
  if (session && finished && result) {
    screen = <Result colors={colors} session={session} result={result} passRatio={CONFIG.passRatio} onAgain={() => start(kind)} onHome={goHome} adsReady={adsReady} onAdPrivacy={showAdPrivacyOptions} />;
  } else if (session) {
    screen = <Quiz colors={colors} session={session} onAnswer={onAnswer} onNext={onNext} onExit={goHome} />;
  } else {
    screen = (
      <Home
        colors={colors}
        store={store}
        total={QUESTIONS.length}
        categories={CATEGORIES}
        wrongCount={QUESTIONS.filter((q) => store.wrong.includes(q.id)).length}
        examSize={CONFIG.examSize}
        onStart={start}
        adsReady={adsReady}
        onAdPrivacy={showAdPrivacyOptions}
      />
    );
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      {screen}
    </SafeAreaProvider>
  );
}
