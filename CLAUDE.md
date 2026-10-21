# CLAUDE.md: Código da Estrada

Projeto gratuito de treino para o exame de código da estrada (Portugal): site (GitHub Pages) + app Android (Expo/React Native, AdMob).
**Ler primeiro `notas/00-LEIA-PRIMEIRO.md` e `notas/01-ponto-de-situacao.md`.**

## Regras para trabalhar aqui
- Responder em **português de Portugal**, passos simples, um de cada vez, com os nomes como aparecem no ecrã do dono (AdMob: "Faixa", "Intercalar").
- **Atualizar `notas/01-ponto-de-situacao.md`** a cada alteração (data, o que mudou, o que falta), e os outros ficheiros de `notas/` se mudar decisões ou arquitetura.
- Ser honesto: dizer o que foi testado e o que não foi. Verificar antes de afirmar.
- O repositório é **público**: nunca escrever palavras-passe, PIN, IBAN, NIF, moradas ou dados fiscais/pessoais.
- Custo zero sempre que possível. Não aconselhar clicar em anúncios próprios.
- `questions.js` é a fonte única das perguntas (site e app). A app copia-o com `npm run sync` (em `app/`).

## Comandos
- Site: `OUT_DIR=docs node build.js https://joao1295rodrigues.github.io/codigo-estrada` e depois commit + push.
- App: `cd app && npm ci && npm test && npm run bundle`.
- O APK compila no GitHub Actions ao mudar `app/**` ou `questions.js` (ver `notas/02-como-trabalhar.md`).
