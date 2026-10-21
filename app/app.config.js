// Acrescenta o AdMob à configuração do app.json. Os IDs vêm de ads.config.json.
// Com "useTestAds": true (ou sem IDs), usa os anúncios de teste da Google.
const ads = require('./ads.config.json');

const TEST_ANDROID_APP_ID = 'ca-app-pub-3940256099942544~3347511713';
const TEST_IOS_APP_ID = 'ca-app-pub-3940256099942544~1458002511';
const useTest = ads.useTestAds || !ads.androidAppId;

module.exports = ({ config }) =>
  process.env.NO_ADS
    ? config // versão sem anúncios: não acrescenta o plugin do AdMob
    : {
  ...config,
  plugins: [
    ...(config.plugins || []),
    [
      'react-native-google-mobile-ads',
      {
        androidAppId: useTest ? TEST_ANDROID_APP_ID : ads.androidAppId,
        iosAppId: TEST_IOS_APP_ID,
      },
    ],
  ],
};
