import { registerRootComponent } from 'expo';

import App from './App';
import adsMode from './src/adsmode.json';
import Diagnostic from './src/Diagnostic';

// Na versão "diagnostico" abre o ecrã de diagnóstico dos anúncios em vez da app.
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(adsMode.mode === 'diagnostico' ? Diagnostic : App);
