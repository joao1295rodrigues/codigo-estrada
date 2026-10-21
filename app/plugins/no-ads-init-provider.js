// Impede que o SDK de anúncios da Google arranque sozinho com a app.
// Remove o "MobileAdsInitProvider" do manifesto; o arranque passa a ser feito pelo código (initAds), depois de o ecrã aparecer.
const { withAndroidManifest } = require('expo/config-plugins');

module.exports = (config) =>
  withAndroidManifest(config, (c) => {
    const app = c.modResults.manifest.application[0];
    app.provider = app.provider || [];
    app.provider.push({
      $: {
        'android:name': 'com.google.android.gms.ads.MobileAdsInitProvider',
        'android:authorities': '${applicationId}.mobileadsinitprovider',
        'tools:node': 'remove',
      },
    });
    return c;
  });
