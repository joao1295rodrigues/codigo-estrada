// Configuração do site. Depois de editar, correr:  node build.js https://O-TEU-DOMINIO.pt
// Enquanto adClient estiver vazio, o site funciona SEM anúncios.
const CONFIG = {
  contactEmail: "joao.rodrigues12.8h@gmail.com",      // o teu email de contacto (aparece nas páginas Sobre e Privacidade)
  adsTxt: "google.com, pub-9348535205156836, DIRECT, f08c47fec0942fa0", // linha do ads.txt / app-ads.txt (dada pelo Google)
  adClient: "",          // ID de editor do AdSense, ex.: "ca-pub-1234567890123456"
  adSlotHome: "",        // ID do bloco de anúncio da página inicial
  adSlotResult: "",      // ID do bloco de anúncio do ecrã de resultados
  adSlotPage: "",        // ID do bloco de anúncio das páginas de perguntas
  examSize: 20,          // nº de perguntas do simulacro
  passRatio: 0.9,        // critério deste simulador (não é o critério oficial do IMT)
};
