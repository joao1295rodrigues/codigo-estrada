# Ponto de situação

**Última atualização: 2026-10-24.** (Atualizar a data e o resumo a cada alteração.)

## Estado em resumo
- **Site no ar** e a funcionar: https://joao1295rodrigues.github.io/codigo-estrada/ (28 páginas: app de treino, 13 páginas de perguntas por categoria, 10 guias, Sobre, Privacidade). **Sem anúncios** (o AdSense ainda não foi pedido).
- **App Android** (Expo/React Native) a funcionar no telemóvel do dono (Motorola Edge 60, Android 16): abre bem, o simulacro funciona. Tem **anúncios AdMob configurados com IDs reais**, mas **ainda não aparecem anúncios** (a app está em revisão no AdMob desde 2026-10-21; revisão de 2 a 3 dias).
- **Banco de perguntas:** 303 perguntas, 13 categorias, verificadas por fontes secundárias (ver `06`).

## Versão atual da app (APK)
- Pacote Android: `codigo.da.estrada.R` (igual ao ligado no AdMob). Versão 1.0.0.
- Ecrã inicial e resultados: **faixa de anúncio fixa em baixo**, com "Preferências de anúncios" por cima. Durante as perguntas **não há anúncios** (decisão por agora; ver `05`).
- **Anúncio de ecrã inteiro (Intercalar):** só no fim de um teste, de 3 em 3 testes, e nunca duas vezes em menos de 5 minutos.
- Download: https://github.com/joao1295rodrigues/codigo-estrada/releases/download/apk-latest/codigo-estrada.apk (com anúncios) · `codigo-estrada-sem-anuncios.apk` · `codigo-estrada-anuncios-de-teste.apk` (anúncios de teste da Google, "Test Ad").
- Última compilação do APK: run `39688379095` (intervalo mínimo de 5 minutos entre anúncios de ecrã inteiro), **concluída com sucesso em 2026-10-21 (22:54)**. Os 3 APK na release `apk-latest` estão atualizados. Decisão: o repositório fica **público** (nada secreto lá dentro; o site precisa disto).

## O que o dono vai fazer agora (sem pressa)
1. **Esperar cerca de 24 horas** e depois testar em **outros telemóveis** (outras operadoras, sem o email dele) se aparecem anúncios. **Sem clicar** nos anúncios.
2. Ver no AdMob (Início/Relatórios) se aparecem pedidos de anúncio, visualizações e ganhos.
3. Só depois decidir mudanças (ver abaixo).

## Porque ainda não há anúncios (2026-10-23)
- Capturas do AdMob: a app está **"Em preparação"**, com 0 pedidos e 0 impressões.
- Duas coisas diferentes no AdMob → Pagamentos: (1) **Validação** de identidade, só pedida quando os ganhos atingem o limite (nada a fazer agora); (2) **Informações de pagamento** (tipo de conta Individual, nome, morada, dados fiscais, método de pagamento): segundo a ajuda do AdMob, é preciso preencher para a conta ser **aprovada para publicar anúncios**. Isto faz-se na conta, no site do AdMob (Pagamentos → "Configurar os pagamentos" / "Gerir definições"), não na app.
- **Por confirmar:** se esta parte está incompleta na conta do dono (as capturas vistas estavam cortadas em cima). O dono preenche tudo sozinho; **nunca escrever aqui NIF, IBAN, morada, telefone ou email de pagamentos**.
- **Facto dado pelo dono:** no Google dele o método de pagamento é um **cartão bancário** (não IBAN/NIB). Usa um **cartão virtual** com limite baixo, em nome dele. A 2026-10-23 trocou o cartão expirado do aviso em https://pay.google.com/gp/w/home/paymentmethods por um válido. Não se sabe se isto desbloqueia a app "Em preparação". **Não escrever aqui números de cartão.**
- **Erro do dono, já corrigido (2026-10-23):** em AdMob → Apps → Definições da aplicação → "Detalhes da loja de apps" tinha declarado a app como publicada numa loja (Amazon Appstore + nome do pacote), mas a app **só existe como APK**, não está em nenhuma loja. Pode ter deixado a app em "Em preparação". Removeu (X) e ficou **sem loja ligada, que é o estado certo**. **Não voltar a adicionar nenhuma loja/pacote enquanto a app não estiver realmente publicada nela. Não sugerir "Adicionar".**
- Texto de ajuda do AdMob (ponto de interrogação em "Estado de aprovação"): numa conta recente as apps ficam "Em preparação" **até a conta ser verificada**, o que passa por inserir os detalhes da forma de pagamento (há um link no próprio texto). Por confirmar se já ficou feito.
- Provável limitação: o Google trata apps **sem loja suportada** com serviço de anúncios limitado (poucos/pouco valor ou nenhum). Fontes: ajuda do AdMob + relatos de programadores; **nenhuma diz com clareza o que acontece a um APK instalado à mão**.
- **Plano combinado com o dono:** esperar até 2026-10-24; se continuar "Em preparação"/sem anúncios, **pesquisar a Samsung Galaxy Store** (a Amazon foi descartada). Antes de mexer, verificar custos, requisitos e se aceita a app. A Google Play (25 €) só se houver ganhos.
- Perfil de pagamentos do AdMob (2026-10-23): país PT, tipo **Individual**, nome, telefone e morada preenchidos; pagamento mensal com limite de 70 €. **Informações fiscais (PT e EUA) vazias**: o Google não as exigiu (o aviso de PT está avariado); preencher só se for pedido, antes dos primeiros pagamentos. O telefone não mostrou botão de verificação nem SMS.
- **app-ads.txt:** o AdMob procura-o na **raiz** do site (`https://joao1295rodrigues.github.io/app-ads.txt`). O nosso ficheiro está em `/codigo-estrada/app-ads.txt` (subpasta, não serve). Solução grátis: segundo repositório **público** `joao1295rodrigues.github.io` com um ficheiro `app-ads.txt` com a linha `google.com, pub-9348535205156836, DIRECT, f08c47fec0942fa0`. O AdMob só chega ao site através do **"site do programador" da página da app numa loja** (Amazon/Google Play): sem loja não lê. Por isso a ligação à loja só se faz quando a app estiver mesmo publicada. Prazos de aprovação "24–48 h" **não confirmados**. Por criar pelo dono (a sessão na nuvem não tem acesso).
- Depois: esperar ~24 h, testar noutros telemóveis; se não houver anúncios, `codigo-estrada-anuncios-de-teste.apk` ("Test Ad"); se nem esses, investigar no emulador.

## Teste e imagens (2026-10-24)
- O dono testou o `codigo-estrada-anuncios-de-teste.apk` e **os anúncios de teste apareceram**: a integração da app com o AdMob funciona. A app continua "Em preparação" no AdMob; sem anúncios reais.
- **Amazon Appstore NÃO serve (verificado 2026-10-24):** conta e submissão são grátis, mas a Amazon fechou a loja nos telemóveis Android em 2025-08-20 e desde 2025-02-20 não aceita apps novas para Android; só continua em tablets Fire/Fire TV. Não chega aos telemóveis. Tinha sido sugerida por engano (sem verificar).
- **Lojas alternativas pesquisadas (2026-10-24; só resumos de pesquisa, fontes secundárias):** Samsung Galaxy Store grátis mas na Europa pede registo de empresa/estatuto comercial (**não serve** a um particular); **Xiaomi GetApps**: sem taxa encontrada, aceita pessoa singular em princípio, pede ID, cobre a Europa (**opção grátis possível, por confirmar** em https://global.developer.mi.com/); OPPO/VIVO: incerto/improvável fora da China. O AdMob só liga apps "publicamente disponíveis" numa loja suportada. Garantia de anúncios reais mesmo assim: **nenhuma**.
- **OPPO App Market pesquisada (2026-10-24, fontes secundárias):** conta de programador **gratuita** e certificação de **particular** (nome, morada, telefone, documentos de identificação) existem no portal https://developers.oppomobile.com/; **não confirmado** se aceita residentes na Europa, se a loja "overseas" cobre Portugal (as listagens no estrangeiro só suportam certas regiões; um fórum diz que a loja OPPO não está na versão global) nem o tempo de revisão (1–2 dias para conta e 3–5 dias para a app, só para lojas da China). Passo seguinte, só se o dono quiser: abrir o portal e ver se oferece registo como particular na Europa.
- **Pesquisa mais funda (2026-10-24; só resumos de pesquisa, nada aberto diretamente):**
  - AdMob: conta recente → apps ficam "Em preparação" até a conta ser verificada (dados de pagamento); revisão "uns dois dias", sem prazo fixo; sem loja suportada = anúncios **limitados** (relato: poucos e de pouco valor, não zero). Estar numa loja alternativa **não garante** aprovação (caso Samsung rejeitado, relato antigo).
  - Xiaomi GetApps: distribuição grátis por acordo (pode vir a ter taxa); registo documentado só para **empresa**; existe https://global.developer.mi.com/create/individual (não aberta); GetApps está nos Xiaomi "Global ROM" (blogue), Portugal por confirmar; revisão 1–2 dias.
  - OPPO: conta grátis e particular, Europa/Portugal por confirmar; fórum diz que a loja não está na versão global.
  - Conclusão: o mais provável é a verificação da conta do AdMob (já com dados de pagamento); lojas alternativas = esforço sem garantia e só alcançam o respetivo público. Sugerido: esperar 2–3 dias; depois suporte do AdMob; Google Play só se houver ganhos.
- **Relatório de pesquisa (2026-10-24):** `reports/Lojas de apps e AdMob Portugal.md` (notas em `research_notes/Lojas de apps e AdMob Portugal/`). Conclusão: segundo as páginas do AdMob (lidas só via resumo de pesquisa, não na fonte), a app só é revista/aprovada se estiver **publicamente listada numa loja suportada e ligada à conta**; sem loja, "serviço limitado". Só a **Google Play (25 USD, teste fechado com 12 testadores durante 14 dias)** está confirmada como aberta a um particular em PT; Samsung exige empresa; Xiaomi/OPPO por confirmar; Amazon fechada; Aptoide 69 €/ano e F-Droid não contam. Verificação de programadores do Android não afeta o APK direto em 2026. Há uma lista de páginas oficiais a abrir no computador para confirmar.
- (antes) Alternativas por pesquisar: **Samsung Galaxy Store** (custo, requisitos, contas pessoais) e, se houver ganhos, **Google Play** (25 € uma vez; contas pessoais novas costumam precisar de teste fechado com 12 pessoas durante 14 dias). Não avançar com nada sem o dono confirmar.
- **Imagens:** a nuvem não acede ao Wikimedia Commons nem a bancos de imagens. Foram criados **25 sinais desenhados por nós** (SVG, sem terceiros) em `imagens/sinais/` por `scripts/gerar-sinais.mjs`, com licenças e pendentes em `imagens/LICENCAS.md`. Ainda **não estão na app nem no site** (não se mexeu em `app/**`, por isso o APK não recompilou).
- Falta: descarregar localmente imagens livres com atribuição (Commons) e desenhar os sinais complexos só depois de conferir a imagem oficial.

## Autoria (2026-10-22)
- A pedido do dono, o histórico do `main` foi reescrito: todos os commits são de `joao1295rodrigues` (email privado `…@users.noreply.github.com`), sem linhas de co-autoria. A etiqueta `apk-latest` foi movida para o commit atual (fluxo `mover-etiqueta.yml`, que se pode apagar). Release e APK intactos.
- Regra no `CLAUDE.md`: commits sempre no nome do dono, sem atribuições. Se clonaste o repositório antes desta data, volta a clonar.

## Legalidade (2026-10-22)
- Criada `notas/09-legalidade.md` (plágio, imagens, RGPD, licenças, pendentes). Perguntas são texto próprio; ainda sem imagens de terceiros.
- Site: página Privacidade passou a dizer que o projeto é independente e sem ligação ao IMT/ANSR. **App:** falta o mesmo aviso (adiado para depois das 24 h de teste, porque recompila o APK).

## Pendentes e decisões adiadas (só se começarem a aparecer anúncios/ganhos)
- Mostrar a faixa também **durante os testes**? (O dono quer; cuidado com cliques acidentais; ver `03` e `05`.)
- **Domínio .pt** (1 € no primeiro ano; renovação 13–39 €; o dono compra só por 1 ano) para o site com **AdSense** (várias faixas por página).
- **Imagens com licença livre** nas perguntas (sinais, situações), para ficar mais profissional e apresentar a **escolas de condução**. O dono quer **oferecer** a app, não vendê-la.
- Criar a **mensagem de consentimento (RGPD)** em AdMob → Privacidade e mensagens.
- Registar o site no **Google Search Console** (grátis) e divulgar em grupos de quem tira a carta.

## Se não aparecerem anúncios passadas 24 horas
1. Instalar `codigo-estrada-anuncios-de-teste.apk`: tem de mostrar "Test Ad". Se mostrar, a integração está certa e só falta o AdMob servir anúncios reais.
2. Lembrar: o AdMob só conclui a revisão com a app numa loja suportada (ver `03`). Sem loja, os anúncios reais podem ficar limitados indefinidamente.
3. Se nem os de teste aparecerem, usar o emulador (workflow "Diagnóstico em emulador", ver `02`) para ler o erro.

## Histórico de alterações (mais recente primeiro)
- 2026-10-21: faixa de anúncio fixa em baixo; intervalo mínimo de 5 min no anúncio de ecrã inteiro; notas `.md` criadas.
- 2026-10-21: **corrigido o arranque da app com anúncios** (R8 desligado nas compilações de release; ver `04`). Pacote mudado para `codigo.da.estrada.R`.
- 2026-10-19/21: app em React Native com AdMob criada; APK compilado automaticamente no GitHub; site publicado no GitHub Pages; 10 guias e 303 perguntas.
