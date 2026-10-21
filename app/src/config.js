// Configuração da app.
export const CONFIG = {
  examSize: 20, // nº de perguntas do simulacro
  passRatio: 0.9, // critério deste simulador (não é o critério oficial do IMT)
  interstitialMinGapMs: 5 * 60 * 1000, // e nunca em menos de 5 minutos desde o último
  interstitialEvery: 3, // mostra um anúncio de ecrã inteiro a cada N sessões concluídas
  storeKey: "codigo:v1",
};
