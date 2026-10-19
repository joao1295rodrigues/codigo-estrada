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

## Anúncios
Esta versão **não tem anúncios**. O AdSense não funciona em apps; nas apps usa-se o AdMob, que só mostra anúncios reais se a app estiver publicada numa loja suportada (Google Play, Amazon Appstore, Samsung Galaxy Store, etc.).
