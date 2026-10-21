# Como trabalhar neste projeto

Repositório: https://github.com/joao1295rodrigues/codigo-estrada (público, ramo `main`).

## Estrutura
| Caminho | O que é |
|---|---|
| `questions.js` | **Banco de perguntas** (fonte única, usada pelo site e pela app) |
| `guias.js` | Os 10 guias (artigos) do site |
| `config.js` | Config do site: email de contacto, `adsTxt`, IDs AdSense (vazios por agora) |
| `build.js` | Gera o site em HTML estático para a pasta `docs/` |
| `index.html`, `app.js`, `style.css`, `sw.js`, ... | A app web de treino (o site) |
| `docs/` | **Site gerado** (publicado pelo GitHub Pages, ramo `main`, pasta `/docs`) |
| `app/` | **App Android** (Expo SDK 58, React Native 0.88) |
| `.github/workflows/` | Compilação automática do APK, diagnóstico em emulador, limpeza de releases |
| `scripts/emulator-test.sh` | Corre o APK num emulador e guarda registos |
| `notas/` | Estas notas |

## Site
```
OUT_DIR=docs node build.js https://joao1295rodrigues.github.io/codigo-estrada
git add -A && git commit -m "..." && git push      # o GitHub Pages atualiza em 1–2 min
```
Se houver domínio próprio, usar o domínio no lugar do endereço (afeta sitemap e canonical).
Editar perguntas: `questions.js` (depois correr o build). Guias: `guias.js`.

## App (pasta `app/`)
```
cd app
npm ci
npm run sync      # copia ../questions.js para src/questions.js (ficheiro gerado: não editar à mão)
npm test          # testes da lógica
npm run bundle    # confirma que o código compila para Android
npx expo start    # opcional: Expo Go
```
Ficheiros principais: `App.js` (estado), `src/screens.js` (ecrãs), `src/logic.js` (lógica pura, testada), `src/ads.js` (AdMob), `ads.config.json` (IDs de anúncios), `app.config.js` + `plugins/` (config do Android).

## Compilar o APK
- **Automático (GitHub Actions):** `.github/workflows/build-apk.yml` corre quando mudam `app/**`, `questions.js` ou o próprio workflow. Compila `com-anuncios`, `sem-anuncios` e `anuncios-de-teste` em paralelo (~10 min) e publica em Releases (`apk-latest`). **Atenção:** um novo push a esses caminhos **cancela** a compilação em curso.
- Um push que só mexa em `docs/`, `notas/`, `guias.js`, `config.js` ou `build.js` **não** compila o APK.
- Local (opcional): precisa de Node 22, JDK 17 e Android SDK. `cd app && npx expo prebuild --platform android && cd android && ./gradlew assembleRelease`. O APK sai assinado com a chave de depuração do modelo (instala-se normalmente).

## Diagnóstico em emulador Android 16 (muito útil)
`.github/workflows/emulador-diagnostico.yml` (arranque manual) compila, abre a app num emulador e guarda os registos no ramo `diag-logs`, pasta `diagnostico/` (logcat, ecrã, `exit-info`). Foi assim que se descobriu o erro do R8. Ler com `git fetch origin diag-logs` e `git archive origin/diag-logs diagnostico`.

## Limitações do ambiente na nuvem (Claude Code web), para quem lá trabalhar
- Só o **GitHub** e o registo do **npm** estão acessíveis. Sites como Diário da República, IMT, Wikipédia e `support.google.com` estão **bloqueados** (só a pesquisa na web funciona).
- `gh` só funciona por **REST** (`gh api ...`); o GraphQL está bloqueado (por isso `gh workflow run` e `gh release view` falham). Arrancar workflows: `gh api -X POST repos/OWNER/REPO/actions/workflows/FICHEIRO.yml/dispatches -f ref=main`.
- Não é possível **apagar assets de Releases** nem **descarregar registos de Actions** a partir da sessão. Soluções usadas: workflow `limpar-apks.yml` (apaga assets) e o ramo `diag-logs` (guardar registos).
- `npx expo install` falha offline: ler a versão certa em `node_modules/expo/bundledNativeModules.json`.
- Não há telemóvel nem emulador na sessão: nada de UI foi visto a correr, exceto via workflow do emulador.

## Trabalhar localmente (quando acabarem os créditos na nuvem)
1. `git clone https://github.com/joao1295rodrigues/codigo-estrada && cd codigo-estrada`
2. Abrir com o Claude Code local na pasta; o ficheiro `CLAUDE.md` na raiz dá o contexto.
3. Fazer alterações em ramos locais (`git checkout -b nome`), testar, e fazer `git push` para o `main` quando estiver pronto (o site e o APK atualizam-se sozinhos).
4. No computador local não há bloqueio de rede: dá para ler o Diário da República, o IMT e a documentação do Google/Expo diretamente, e usar `adb`/emulador reais.
