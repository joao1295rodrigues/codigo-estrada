// Desliga o R8 (encolher/ofuscar código) nas compilações de release.
// Com o R8 ligado, o SDK de anúncios da Google falha ao arrancar: o R8 corta a classe WorkDatabase_Impl do WorkManager
// ("Failed to create an instance of androidx.work.impl.WorkDatabase"). Confirmado num emulador Android 16.
const { withGradleProperties } = require('expo/config-plugins');

module.exports = (config) =>
  withGradleProperties(config, (c) => {
    const set = (key, value) => {
      const existing = c.modResults.find((i) => i.type === 'property' && i.key === key);
      if (existing) existing.value = value;
      else c.modResults.push({ type: 'property', key, value });
    };
    set('android.enableMinifyInReleaseBuilds', 'false');
    set('android.enableShrinkResourcesInReleaseBuilds', 'false');
    return c;
  });
