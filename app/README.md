# Código da Estrada: app Android (Expo / React Native)

Versão em app do site de treino para o exame teórico de condução. As perguntas vêm do ficheiro `../questions.js` (o mesmo do site).

## Obter o APK (sem instalar nada no computador)
O APK é compilado automaticamente no GitHub (Actions) e fica em **Releases**:
https://github.com/joao1295rodrigues/codigo-estrada/releases/tag/apk-latest

Abre esse link no telemóvel, descarrega `codigo-estrada.apk` e instala. O Android pode pedir para permitir "instalar de fontes desconhecidas".

Para compilar de novo manualmente: no GitHub, separador **Actions → Gerar APK → Run workflow**.

## Desenvolvimento
```
npm install
npm run sync     # copia as perguntas de ../questions.js para src/questions.js
npm test         # testes da lógica
npm run bundle   # confirma que o código compila para Android
npx expo start   # arrancar com o Expo Go (opcional)
```

## Estrutura
- `App.js`: estado da app e navegação entre ecrãs
- `src/logic.js`: lógica pura (baralhar, responder, resultados), testada em `test/`
- `src/screens.js`: ecrãs Home, Quiz e Resultado
- `src/questions.js`: **gerado**; editar `../questions.js` e correr `npm run sync`

## Anúncios (Google AdMob)
A app mostra anúncios do AdMob: um banner no ecrã inicial e nos resultados, e um anúncio de ecrã inteiro a cada 3 sessões concluídas. **Nunca aparecem durante as perguntas** (para não haver cliques acidentais, que o AdMob proíbe). Inclui o pedido de consentimento (RGPD).

**Neste momento usa os anúncios de TESTE da Google** (aparecem com a legenda "Test Ad" e não geram dinheiro). Para passar a anúncios reais:
1. Cria uma conta AdMob e regista a app (Android, pacote `com.joao1295rodrigues.codigoestrada`).
2. Cria um bloco **Banner** e um bloco **Intersticial**.
3. Edita `ads.config.json`: põe `"useTestAds": false` e preenche `androidAppId`, `bannerUnitId` e `interstitialUnitId`.
4. Faz push: o APK é compilado de novo.

**Importante:** o AdMob só serve anúncios reais plenamente se a app estiver publicada numa loja suportada (Google Play, Amazon Appstore, Samsung Galaxy Store, OPPO, VIVO, Xiaomi) e ligada à conta AdMob. Um APK instalado fora de lojas pode receber anúncios muito limitados. Os anúncios de teste funcionam sempre.
