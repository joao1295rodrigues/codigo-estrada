import { useState } from 'react';
import { View } from 'react-native';
import mobileAds, {
  AdEventType,
  AdsConsent,
  BannerAd,
  BannerAdSize,
  InterstitialAd,
  TestIds,
} from 'react-native-google-mobile-ads';
import adsConfig from '../ads.config.json';

// Com useTestAds=true (ou sem IDs) usam-se os anúncios de teste da Google.
const pick = (real, test) => (adsConfig.useTestAds || !real ? test : real);
export const bannerUnitId = pick(adsConfig.bannerUnitId, TestIds.ADAPTIVE_BANNER);
export const interstitialUnitId = pick(adsConfig.interstitialUnitId, TestIds.INTERSTITIAL);

let initPromise = null;

// Pede o consentimento (RGPD) e inicia o SDK. Devolve true se já se pode pedir anúncios.
export function initAds() {
  if (!initPromise) {
    initPromise = (async () => {
      try {
        await AdsConsent.gatherConsent();
      } catch {
        // sem formulário configurado ou sem rede: continua e confirma abaixo
      }
      let canRequest = true;
      try {
        canRequest = (await AdsConsent.getConsentInfo()).canRequestAds;
      } catch {
        canRequest = true;
      }
      if (!canRequest) return false;
      await mobileAds().initialize();
      return true;
    })().catch(() => false);
  }
  return initPromise;
}

export function showAdPrivacyOptions() {
  return AdsConsent.showPrivacyOptionsForm().catch(() => {});
}

// Anúncio de ecrã inteiro: fica pré-carregado e só é mostrado quando a app decide.
let interstitial = null;
let interstitialReady = false;

function loadInterstitial() {
  interstitialReady = false;
  interstitial = InterstitialAd.createForAdRequest(interstitialUnitId);
  interstitial.addAdEventListener(AdEventType.LOADED, () => {
    interstitialReady = true;
  });
  interstitial.addAdEventListener(AdEventType.CLOSED, () => loadInterstitial());
  interstitial.addAdEventListener(AdEventType.ERROR, () => {
    interstitialReady = false;
  });
  interstitial.load();
}

export function prepareInterstitial() {
  if (!interstitial) loadInterstitial();
}

// Mostra o anúncio de ecrã inteiro se já estiver carregado. Devolve true se o mostrou.
export function showInterstitialIfReady() {
  if (interstitial && interstitialReady) {
    interstitialReady = false;
    interstitial.show().catch(() => {});
    return true;
  }
  return false;
}

export function AdBanner({ ready }) {
  const [failed, setFailed] = useState(false);
  if (!ready || failed) return null;
  return (
    <View style={{ alignItems: 'center' }}>
      <BannerAd unitId={bannerUnitId} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} onAdFailedToLoad={() => setFailed(true)} />
    </View>
  );
}
