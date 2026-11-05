# Código da Estrada: leia isto primeiro

Projeto gratuito de treino para o exame teórico de condução em Portugal, em duas formas:
- **Site** (GitHub Pages): https://joao1295rodrigues.github.io/codigo-estrada/
- **App Android** (Expo / React Native), com anúncios Google AdMob. APK em: https://github.com/joao1295rodrigues/codigo-estrada/releases/tag/apk-latest

Objetivo do dono do projeto: oferecer a app e o site **de graça** às pessoas, com anúncios discretos como pequena renda extra. **Custo zero** sempre que possível.

## RETOMAR AQUI (resumo completo, atualizado a 2026-11-05)
Quem abre o projeto (por exemplo, localmente) deve ler **só esta secção** para saber tudo o que importa, e depois consultar os outros ficheiros se precisar de detalhe.

**1. O que existe**
1. Site no ar: https://joao1295rodrigues.github.io/codigo-estrada/ (gerado por `build.js` para `docs/`, GitHub Pages).
2. Site da raiz (só `app-ads.txt` e uma página): https://joao1295rodrigues.github.io. Os ficheiros-fonte estão em `site-raiz/`; vivem noutro repositório do dono, `joao1295rodrigues.github.io`. Na nuvem não se consegue escrever lá; localmente, com o login do dono, sim.
3. App Android (Expo SDK 58 / React Native, pasta `app/`), pacote `codigo.da.estrada.R`, 303 perguntas de texto + 51 perguntas com imagem de sinais. APK compilado pelo GitHub Actions (`Gerar APK`) e publicado na release `apk-latest`.
4. Anúncios AdMob com IDs reais em `app/ads.config.json`. Há também APK de anúncios de teste e sem anúncios.

**2. Onde estamos (2026-11-02)**
1. A conta AdMob foi aprovada, mas a app fica "requer revisão" e sem anúncios reais, porque o AdMob só a verifica quando está numa loja suportada. Sem loja, os anúncios ficam limitados.
2. Lojas que o AdMob aceita (além da Google Play): Amazon (fechada no Android), Xiaomi (só empresas), Samsung (só empresas), VIVO (FAQ diz que não aceita particulares) e **OPPO** (aceita particulares). Só a OPPO serve.
3. **OPPO:** o dono submeteu o formulário de programador (particular, identificação + cartão bancário). Portal europeu: https://developers-eu.oppomobile.com/. Email ao apoio (`devservice@oppo.com`, rodapé do portal) enviado em 2026-10-30; resposta automática da OPPO ("pedido a ser tratado") em 2026-11-03. **Em 2026-11-04 o pedido foi REJEITADO**: motivo (em chinês, tradução nossa) "falta a informação do cartão bancário em 'Informação de qualificação'". A foto do cartão mostrava só o chip e o logótipo, sem número, validade nem nome (o nome está só atrás); a foto do documento de identificação estava em ângulo e com reflexos. **A fazer pelo dono:** refazer as duas fotos (cartão direito, inteiro, sem reflexos, em superfície lisa; número com os dígitos do meio tapados, validade e nome visíveis, frente e verso numa só imagem se o nome estiver atrás; tapar só o CVV; JPG/PNG abaixo de 5 MB), mostrar-nos primeiro uma captura, e voltar a submeter (botão "Cancel" na página de resultados para refazer). Em paralelo perguntar ao apoio qual é a informação em falta. Nome no formulário é a versão curta; se pedirem, enviar o nome completo.
   **Atualização 2026-11-05:** o dono voltou a submeter com fotos novas e enviou novo email ao apoio. **Estado atual: à espera da OPPO.** Se rejeitarem outra vez por falta de informação: mostrar os primeiros 6 dígitos do cartão e o número do documento.
4. Resumo do email enviado: pedido educado de estado, particular de Portugal, app grátis de treino de código da estrada, primeiro projeto, sem promessas de dinheiro (decisão: não prometer percentagem de lucros, pode parecer suborno e cria compromissos).
5. **Plano B:** Google Play (25 USD uma vez; contas novas de particulares precisam de um teste fechado com 12 testadores durante 14 dias; vem de resumos de pesquisa). Só se a OPPO falhar e os anúncios compensarem.

**3. O que fazer quando a OPPO aprovar (por esta ordem)**
1. Criar a **chave de assinatura própria** e configurar a compilação para a usar (hoje o APK usa uma chave de teste). A chave **nunca** vai para o repositório; o dono guarda uma cópia privada e põe-na como segredo do GitHub Actions. A mesma chave tem de ser usada em todas as atualizações e lojas.
2. Opcional: mudar o nome para "Código da Estrada – Treino (não oficial)" e pôr na app o aviso de independência (como já está no site). Recompilar e testar no emulador (`scripts/emulator-test.sh`).
3. Carregar o APK na OPPO com os textos prontos de `10-publicacao-em-lojas.md`. Site do programador: `https://joao1295rodrigues.github.io`.
4. **Só quando a app estiver visível na loja da OPPO**, registar a app no AdMob como publicada na OPPO (pacote exato `codigo.da.estrada.R`) e esperar 24 a 48 horas pela verificação.
5. Testar em outros telemóveis se aparecem anúncios reais. **Nunca clicar nos próprios anúncios.**

**4. Outros pendentes**
1. Decidir se se usam os sinais CC BY-SA (curvas, animais, rotunda, ultrapassagem). Exigem crédito visível e partilha nas mesmas condições. Por agora só se usam desenhos próprios e sinais oficiais de domínio público/CC0.
2. Verificar licenças na página de origem de cada imagem de terceiros (ver `09` e `imagens/terceiros/LICENCAS.md`).
3. Mensagem de consentimento (RGPD) no AdMob; ver `03`.
4. Mais tarde: domínio .pt e AdSense para o site (ver `05`); informar-se nas Finanças antes de levantar dinheiro (limite de pagamento no AdMob: 70 euros).

**5. Regras que não se quebram**
1. **Autoria:** commits e PR sempre como `joao1295rodrigues` (`git config user.name "joao1295rodrigues"` e `git config user.email "156375496+joao1295rodrigues@users.noreply.github.com"`). Nunca nome do Claude, "Co-Authored-By", "Generated with" nem ligações de sessão. O `CLAUDE.md` repete isto.
2. Repositório **público**: nenhum dado pessoal, documento, IBAN, NIF, PIN, palavra-passe nem a chave de assinatura.
3. Custo zero sempre que possível; avisar antes de sugerir qualquer gasto.
4. As perguntas vivem em `questions.js` (fonte única); a app copia com `npm run sync` em `app/`.
5. Ser honesto sobre o que foi testado e o que não foi.
6. Atualizar `01-ponto-de-situacao.md` a cada alteração.

**6. Como trabalhar localmente**
1. `git clone https://github.com/joao1295rodrigues/codigo-estrada` e abrir a pasta no Claude Code. O `CLAUDE.md` é lido automaticamente e manda ler este ficheiro.
2. Site: `OUT_DIR=docs node build.js https://joao1295rodrigues.github.io/codigo-estrada`, depois commit e push.
3. App: `cd app && npm ci && npm test && npm run bundle`. O APK é compilado no GitHub Actions ao mudar `app/**` ou `questions.js`; detalhes em `02`.
4. Imagens de sinais: `app/scripts/gerar-sinais-png.cjs` (precisa de Playwright) e `scripts/importar-sinais-pt.py`.
5. Ambiente da nuvem tinha limites (só GitHub e npm acessíveis, sem escrita noutros repositórios). Localmente isso não se aplica.

**7. Como comunicar com o dono**
1. Português de Portugal, respostas curtas, **listas numeradas simples** (as tabelas aparecem mal no ecrã dele), um passo por linha.
2. Nomes exatos dos botões como aparecem e o que deve ver a seguir. Se não vês o ecrã dele, pedir captura (com dados pessoais tapados) em vez de adivinhar menus.
3. Não fazer trabalho a mais antes de haver necessidade (ele pediu para não preparar a chave antes de a OPPO aprovar).

## Como usar estas notas (para uma sessão nova, local ou na nuvem)
1. Ler por esta ordem: `01-ponto-de-situacao.md` (onde estamos) → `02-como-trabalhar.md` (comandos) → `03-anuncios.md` → `04-decisoes-e-problemas-resolvidos.md`.
2. Antes de terminar qualquer alteração, **atualizar `01-ponto-de-situacao.md`** (data, o que mudou, o que falta). Se mudar algo de arquitetura ou de decisão, atualizar também o ficheiro respetivo.
3. Nunca pôr palavras-passe, PIN, IBAN, NIF ou dados pessoais nestes ficheiros: o repositório é **público**.

## Índice
| Ficheiro | Conteúdo |
|---|---|
| `01-ponto-de-situacao.md` | Estado atual, pendentes e próximos passos (atualizar sempre) |
| `02-como-trabalhar.md` | Estrutura do repositório, comandos, compilação do site e do APK, trabalho local |
| `03-anuncios.md` | AdMob (app), IDs, regras de colocação, políticas, pagamentos, consentimento |
| `04-decisoes-e-problemas-resolvidos.md` | Decisões tomadas e problemas já resolvidos (para não repetir) |
| `05-ideias-futuras.md` | Domínio, site com anúncios AdSense, imagens com licença livre, escolas de condução |
| `06-conteudo-e-verificacao.md` | Como as perguntas foram verificadas e o que ainda não está confirmado |
| `07-passos-gerais-site-e-adsense.md` | Passos antigos para site e AdSense |
| `08-revisao-da-sinalizacao.md` | Revisão detalhada das perguntas de sinalização |
| `09-legalidade.md` | Plágio, direitos de autor, imagens, RGPD, licenças e pendentes |
| `10-publicacao-em-lojas.md` | Preparação para publicar numa loja: ordem, regras, textos prontos, materiais |

## Preferências do dono do projeto (importante para quem o ajudar)
- Português de Portugal. Passos **simples, um de cada vez**, com os nomes **exatamente como aparecem no ecrã** dele (por exemplo "Faixa" e "Intercalar" no AdMob, e não "banner"/"intersticial").
- Não sugerir custos sem avisar; ele quer custo zero (um domínio .pt de 1 € no primeiro ano é aceitável).
- Ser **honesto e verificar**: dizer o que foi testado e o que não foi. Não afirmar que algo funciona sem prova.
- Não pedir dados sensíveis. O dono nunca deve clicar nos próprios anúncios.
