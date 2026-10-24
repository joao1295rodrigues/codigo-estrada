# Sem loja suportada, o AdMob nunca aprova a app

**Conclusão:** para servir anúncios reais sem limites, o AdMob exige que a app esteja **publicamente listada numa loja suportada e ligada à conta**; só então arranca a revisão ("app readiness", normalmente 2-3 dias). Uma app só em APK não pode ser revista e fica com "serviço limitado" ([AdMob 9989980](https://support.google.com/admob/answer/9989980?hl=en), [10037806](https://support.google.com/admob/answer/10037806?hl=en)). Das lojas suportadas, **só a Google Play está confirmada como aberta a um particular em Portugal sem empresa**: a Samsung exige conta de empresa ("corporate seller", DUNS), a Amazon fechou no Android, e Xiaomi, OPPO e vivo não têm regras para particulares confirmadas. A Aptoide custa 69 EUR/ano e o F-Droid não aceita o SDK do AdMob; nenhuma das duas conta para o AdMob. A verificação de programadores do Android **não afeta o APK direto em Portugal em 2026**, mas chega a todo o mundo em 2027 ([Android Developers](https://developer.android.com/developer-verification)). **Recomendação:** fazer já os passos gratuitos (Parte 4A) e pagar os **25 USD** da Google Play quando decidir que quer anúncios reais; é a única via documentada. Nenhuma fonte oficial foi lida na página original do AdMob (ver aviso abaixo).

**Etiquetas usadas (nível de prova):**

| Etiqueta | Significado |
|---|---|
| **[OL]** | Oficial, lido na fonte (só as páginas de developer.android.com) |
| **[OR]** | Oficial, via resumo de motor de pesquisa, **não lido na fonte** (o proxy bloqueou support.google.com, developers.samsung.com, global.developer.mi.com, etc.) |
| **[RB]** | Relato, blogue, fórum ou notícia |
| **[INF]** | Inferência nossa |

Quase todas as páginas do AdMob trazem metadados de 1200 a 2600 dias de idade; nenhuma foi confirmada como "em vigor em outubro de 2026". Tudo o que está em [OR] deve ser confirmado pelo dono (lista no fim).

## 1. O AdMob exige loja suportada e conta verificada para aprovar a app

| Estado ou regra | O que diz a ajuda | Nível |
|---|---|---|
| **Em preparação** ("Getting ready") | "We're reviewing your app", normalmente "a couple of days" ([10564477](https://support.google.com/admob/answer/10564477?hl=en)) | [OR] |
| Conta nova | As apps ficam em "Getting ready" até a conta ser verificada, introduzindo os dados de pagamento; verificação até 24 h, raramente 2 semanas ([10564477](https://support.google.com/admob/answer/10564477?hl=en), [7356219](https://support.google.com/admob/answer/7356219?hl=en)) | [OR] |
| Revisão da app | Começa sozinha quando a app está "listed in a store that AdMob supports" e ligada à conta ([9989980](https://support.google.com/admob/answer/9989980?hl=en)) | [OR] |
| Android | Tem de estar "publicly available in a supported store"; o nome do pacote tem de coincidir exatamente (maiúsculas incluídas); após listar, 24-48 h até poder ligar ([10037806](https://support.google.com/admob/answer/10037806?hl=en)) | [OR] |
| **App só em loja não suportada ou sem loja** | "can't be reviewed and will receive limited ad serving" ([10037806](https://support.google.com/admob/answer/10037806?hl=en)); opção "Unpublished" serve para configurar e testar ([15948559](https://support.google.com/admob/answer/15948559?hl=en)) | [OR] |
| app-ads.txt | Obrigatório para apps novas desde jan. 2025; o site do programador tem de constar na ficha Play/App Store; apps só em lojas de terceiros dispensadas "currently" ([14538460](https://support.google.com/admob/answer/14538460?hl=en)) | [OR] |
| Identidade e PIN | Pedidos só ao atingir limiares de ganhos (verificação ~10 USD, pagamento 100 USD); 45 dias sem identidade param os anúncios ([13030080](https://support.google.com/admob/answer/13030080?hl=en), [2772208](https://support.google.com/admob/answer/2772208?hl=en)) | [OR], páginas antigas |

**O que não está documentado.** Nenhuma fonte define o que "serviço limitado" significa para uma app sem loja (se há anúncios reais, com que preenchimento). Nenhuma fonte descreve uma app só-APK a ser aprovada. Os relatos de fóruns (Kodular, App Inventor, Thunkable, sem datas verificadas) convergem: anúncios de teste funcionam, anúncios reais dão "No Ad Config"/erro 3 e relatórios com zero pedidos, o mesmo sintoma que o dono descreve ([Kodular](https://community.kodular.io/t/admob-banner-not-loading/24307), [App Inventor](https://community.appinventor.mit.edu/t/outdated-free-admob-extension-add-different-types-of-admob-ads-in-your-application/45216/62)) **[RB]**. Esses fóruns misturam regras próprias das plataformas Kodular/Thunkable, por isso valem como pista e não como prova.

**Leitura para o dono [INF]:** se os dados de pagamento já estão preenchidos há mais de 2 semanas e continua "Em preparação", a causa provável é a falta de loja ligada, não a conta. Contactar o suporte do AdMob só compensa depois de ter loja ligada; respondem em cerca de 2 dias úteis ([9948073](https://support.google.com/admob/answer/9948073?hl=en)) **[OR]**.

## 2. Só a Google Play está confirmada como viável para um particular

Legenda de AdMob: **Sim** = consta na lista de lojas suportadas **[OR]**. "n/c" = não confirmado em fonte.

| Loja | Custo | Particular em PT/UE? | Documentos | Revisão | Alcance em PT | AdMob aceita? |
|---|---|---|---|---|---|---|
| **Google Play** | **25 USD**, taxa única; cartão Visa/Mastercard/Amex, pré-pagos não aceites ([Play Help](https://support.google.com/googleplay/android-developer/answer/6112435?hl=en)) **[OR]** | **Sim**, conta pessoal, sem D-U-N-S. Conta nova (após 13-11-2023): teste fechado com 12 testadores durante 14 dias antes da produção ([14151465](https://support.google.com/googleplay/android-developer/answer/14151465?hl=en)) **[OR]** | Nome legal, morada, e-mail e telefone verificados por OTP; documento de identificação se o perfil de pagamentos não estiver verificado ([14177239](https://support.google.com/googleplay/android-developer/answer/14177239?hl=en)) **[OR]**; apps novas com API alvo 36 desde 31-08-2026 ([target-sdk](https://developer.android.com/google/play/requirements/target-sdk)) **[OL]** | Oficial: n/c. Blogue: teste fechado 3-5 dias, produção "7 dias ou menos" ([TestersCommunity](https://www.testerscommunity.com/blog/how-long-does-it-take-to-publish-an-app-on-google-play)) **[RB]**; total ~3 semanas **[INF]** | Maior: Android ~62-67 % dos telemóveis ([StatCounter](https://gs.statcounter.com/os-market-share/mobile/portugal)) **[RB]**; a quota da Play em si não foi encontrada | **Sim** |
| **Samsung Galaxy Store** | Taxa n/c | **Provavelmente não.** Apps Android, mesmo gratuitas, exigem "commercial seller"; "private seller" é só para quem não distribui apps ([Samsung](https://developer.samsung.com/galaxy-store/prepare.html)) **[OR]** | Empresa com DUNS (ou DBA/equivalente), banco ou PayPal, e-mail de domínio próprio, documentos em inglês **[OR]** | Conta "several days", banco até 10 dias úteis **[OR]**; app: n/c | Samsung 25-31 % dos aparelhos (inclui iPhone no cálculo) ([StatCounter](https://gs.statcounter.com/vendor-market-share/mobile/portugal)) **[RB]**; uso real da loja n/c | **Sim** |
| **Xiaomi GetApps** | Grátis por defeito, taxa futura possível ([Acordo §2.2](https://global.developer.mi.com/document?doc=cookiePolicyTitle.releaseAgreement)) **[OR]** | **Por confirmar.** O acordo admite pessoa singular, mas a documentação atual só descreve o registo de empresa **[OR]** | Empresa: licença comercial; fluxo individual (guia antigo): documento de identidade **[OR]** | Conta 1-2 dias úteis (empresa) **[OR]**; app: n/c | Xiaomi 11-13 %; na UE a Play vem instalada; GetApps ~1,5 % dos downloads da Play (um relato) **[RB]** | **Sim** |
| **OPPO App Market** | "Free developer account" **[OR]** | **Por confirmar.** Existe portal europeu, mas com aviso de suspensão de funções para contas registadas na Europa (texto não lido) ([portal EU](https://developers-eu.oppomobile.com/)) **[OR]** | n/c | n/c | OPPO ~3-4 % **[RB]**; marca a sair de partes da Europa (só títulos) **[RB]** | **Sim** |
| **VIVO App Store** | n/c | **Improvável.** O processo mostra "Enterprise verification"; Portugal fora do lançamento europeu ([4gnews](https://4gnews.pt/vivo-anuncia-a-sua-chegada-oficial-a-europa-a-xiaomi-que-se-cuide/)) **[RB]** | n/c; documentação sobretudo em chinês **[RB]** | n/c | Residual | **Sim** |
| **Huawei AppGallery** | Sem taxa de registo encontrada **[OR]** | **Sim**, conta individual existe ([Policy Center](https://developer.huawei.com/consumer/en/doc/start/policycenter-0000001053129900)) **[OR]** | ID ou passaporte + documento bancário, política de privacidade no idioma do país **[OR]** | 1-2 a ~7 dias úteis para identidade **[RB]** | Sem dados; telemóveis sem Google | **Não** |
| **Amazon Appstore** | Conta historicamente grátis (n/c) | **Não em telemóveis Android.** Encerrada a 20-08-2025; resta Fire TV/Tablet ([Release notes](https://developer.amazon.com/docs/app-submission/release-notes.html)) **[OR]** | n/c | n/c | Residual | Consta na lista, mas a loja Android acabou; listagem só Fire não confirmada |
| **Aptoide** | **69 USD ou EUR/ano** para submeter ([docs](https://docs.catappult.io/docs/subscription)) **[OR]** | Sim, com prova de propriedade da app | APK assinado; pedido de propriedade se a app não estiver na Play **[OR]** | Revisão de conformidade, tempo n/c | ~25 M utilizadores/mês globais, auto-reportado; PT n/c ([PR Newswire](https://www.morningstar.com/news/pr-newswire/20260810io22581/aptoide-returns-to-google-play-after-more-than-a-decade-opening-a-new-chapter-for-competition-on-android)) **[RB]** | **Não** |
| **F-Droid** | Grátis | Só software livre. O próprio F-Droid diz que apps com anúncios raramente são livres "because they use proprietary software (e.g. AdMob)" ([Anti-Features](https://f-droid.org/en/docs/Anti-Features/)) **[OR]** | Código-fonte aberto | Voluntários, n/c | Nicho | **Não** |
| **Outras** (Uptodown, APKPure, GitHub Releases, Firebase App Distribution, itch.io, Epic) | Maioria grátis (n/c) | Sem fontes oficiais lidas | n/c | Nenhuma ou n/c | Só quem procura | **Não** |

**Conclusões da tabela.**
- Para o AdMob, o único caminho gratuito teórico passa por Xiaomi ou OPPO, e ambos têm regras para particulares por confirmar **[INF]**.
- A Samsung só serviria com atividade aberta e DUNS, e o seu aviso do Seller Portal diz que sem estatuto "corporate" os vendedores Android deixam de poder registar conteúdo **[OR/RB]**. Não vale abrir atividade só por isto **[INF]**; não é aconselhamento fiscal.
- Estar numa loja secundária não dispensa a Play: se o pacote não for igual em todas as lojas, o AdMob cria apps desligadas.

## 3. A verificação de programadores Android não toca o APK direto em 2026

| Ponto | Estado | Nível |
|---|---|---|
| Datas | Registo obrigatório a 30-09-2026 só nas lojas participantes de Brasil, Indonésia, Singapura e Tailândia; expansão global em 2027, sem data para a UE | [OL] ([developer-verification](https://developer.android.com/developer-verification)) |
| APK direto | "If users sideload your app directly, these new verification requirements won't apply to your app yet" | [OL] ([FAQ](https://developer.android.com/developer-verification/guides/faq)) |
| Apps não registadas, a partir de 2027 | O utilizador passa pelo "advanced flow": modo de programador, espera única de um dia, biometria/PIN, aviso e "Install Anyway"; sem isso, as atualizações falham | [OL] (FAQ) |
| Custo de registar | Conta de distribuição completa 25 USD + documento de identificação. Conta limitada: grátis, sem ID, **até 20 dispositivos**, mas inútil para distribuição pública | [OL] ([limited distribution](https://developer.android.com/developer-verification/guides/limited-distribution)) |
| Apps da Play | "Google Play automatically registers 99% of apps" | [OL] (página principal) |
| Chave de assinatura | O registo exige o APK assinado com a chave privada; se a perder, não consegue registar o pacote | [OL] ([FAQ](https://developer.android.com/developer-verification/guides/faq)) |

**Efeito prático [INF]:** hoje o APK instala-se normalmente em Portugal. Em 2027 (mês e âmbito UE por confirmar) quem instalar o APK em telemóveis certificados enfrentará fricção ou o dono terá de pagar 25 USD. A taxa da Play e a da consola de verificação são ambas de 25 USD, e a conta Play regista as apps nela publicadas; a Play cobre assim as duas necessidades com um só pagamento **[INF]**. Uma pista de um issue de GitHub (Samsung a bloquear binários sem aprovação da Google desde 02-09-2026) não está confirmada e não deve ser tratada como facto **[RB]**.

## 4. Recomendação: gratuito agora, 25 USD quando quiser anúncios reais

### 4A. Passos de custo zero (fazer já)

1. **Manter o APK** (GitHub Releases ou site) como canal de distribuição. É gratuito, não exige revisão e está fora da verificação de programadores até 2027.
2. **Usar anúncios de teste** (IDs de demonstração da Google) em todos os APK distribuídos. Os IDs demo "are not associated with your AdMob account" e não geram tráfego inválido ([Enable test ads](https://developers.google.com/admob/android/next-gen/test-ads)) **[OR]**. Para ver anúncios reais no seu telemóvel, regista-o como dispositivo de teste ([9691433](https://support.google.com/admob/answer/9691433?hl=en)) **[OR]**.
3. **Guardar a chave de assinatura** do APK num sítio seguro e privado (nunca no repositório público). Sem ela, não regista o pacote em 2027 nem atualiza o APK instalado.
4. **Fixar o `applicationId` agora** e usá-lo igual em todas as lojas e no AdMob (as maiúsculas contam) **[OR]**.
5. **Conferir o AdMob:** conta "Individual" com dados de pagamento preenchidos (o tipo não se altera depois) **[OR]**; app registada como "Unpublished" ("Is the app listed on a supported app store?" = No) **[OR]**.
6. **Preparar o app-ads.txt:** o AdMob lê o ficheiro na raiz do hostname. No GitHub Pages isso significa um repositório chamado `joao1295rodrigues.github.io`; o caminho `/codigo-estrada/` não serve **[INF]**. O site também tem de constar na ficha da Play **[OR]**.
7. **Opcional, gratuito:** tentar o registo de particular na Xiaomi GetApps e escrever a overseas-dev@xiaomi.com a perguntar se aceitam particulares da UE. Retorno esperado baixo **[INF]**.

### 4B. Quando pagar os 25 USD da Google Play

| Pagar já | Esperar |
|---|---|
| Quer **anúncios reais** (a Play é a única via documentada para "Pronta") | Só quer partilhar a app, sem receita |
| Quer chegar a utilizadores sem fazer sideload | O APK chega para o público que já tem |
| Quer cobrir a verificação de 2027 com um só pagamento **[INF]** | Não tem 12 testadores para o teste fechado de 14 dias |

Não há dados de receita (nem de preenchimento nem de eCPM) para estimar o retorno. O pagamento mínimo do AdMob é de 100 USD **[OR, página antiga]**: com uma app gratuita de nicho, **o investimento pode não ser recuperado** **[INF]**. A decisão é do dono.

**Percurso na Play, por ordem [OR/INF]:**
1. Criar conta pessoal e verificar identidade (nome legal e e-mail ficam públicos na ficha).
2. Gerar o AAB com API alvo 36.
3. Lançar o teste fechado: 12 testadores durante 14 dias seguidos.
4. Pedir acesso à produção e publicar.
5. Ligar a app ao AdMob (24-48 h após publicar).
6. Esperar a revisão de 2-3 dias.
7. Verificar o app-ads.txt.
8. Só então trocar para os IDs reais.

### 4C. O que NÃO fazer

| Não fazer | Porquê |
|---|---|
| **Clicar nos próprios anúncios reais**, nem "para testar" | Pode levar à suspensão da conta e ao encerramento ([3342099](https://support.google.com/admob/answer/3342099?hl=en)) **[OR]** |
| Distribuir o APK com IDs reais antes de a app estar "Pronta" | Sem benefício documentado e com risco de tráfego inválido **[INF]** |
| Pagar a Aptoide (69 EUR/ano) para "aprovar" o AdMob | A Aptoide não consta da lista do AdMob **[OR]**; contradiz o orçamento zero |
| Abrir atividade ou empresa só para a Samsung | Custo e obrigações fiscais para uma loja de alcance incerto; consultar um contabilista **[INF]** |
| Usar "oficial", o emblema da República ou logótipos do IMT/ANSR no nome, ícone ou descrição | A política da Play proíbe sugerir afiliação governamental ([9514050](https://support.google.com/googleplay/android-developer/answer/9514050?hl=en)) **[OR]**; usar aviso "app não oficial" **[INF]** |
| Perder ou mudar a chave de assinatura | Impede atualizações e o registo de 2027 **[OL]** |
| Gastar o cartão com prepagos ou de terceiros | A Play recusa pré-pagos; o cartão tem de estar em nome do titular **[OR]** |
| Escrever palavras-passe, IBAN, NIF ou morada no repositório público | Regra do projeto |

## Incertezas que podem mudar a decisão

Nenhuma página do AdMob foi lida na origem, pelo que a regra "sem loja = serviço limitado" é a leitura consistente de várias páginas oficiais em resumo, não um texto confirmado. Três pontos em aberto pesam na decisão: se alguma app só-APK chega a servir anúncios reais (sem relato fiável), se a Xiaomi/OPPO aceitam particulares da UE (um sim tornaria possível uma via de custo zero), e se o estatuto de "trader" do DSA obriga a mostrar morada e telefone nas fichas da UE para uma app com anúncios (provável, por [INF], mas sem página oficial lida) ([Epic](https://legal.epicgames.com/epicgames/marketplace-disclosure-requirements), [RevenueCat](https://www.revenuecat.com/blog/growth/am-i-a-trader-and-other-existential-questions-for-developers)) **[RB]**. Se a Play mostrar dados pessoais, usar um e-mail dedicado.

## Páginas oficiais a abrir no computador para confirmar

| Para confirmar | Página |
|---|---|
| Estados "Em preparação / Pronta", conta nova | [AdMob 10564477](https://support.google.com/admob/answer/10564477?hl=en) |
| Lojas suportadas, "limited ad serving", Unpublished | [AdMob 9989980](https://support.google.com/admob/answer/9989980?hl=en), [10037806](https://support.google.com/admob/answer/10037806?hl=en), [15948559](https://support.google.com/admob/answer/15948559?hl=en) |
| Se a Amazon ainda consta na lista; lista na API | [API accounts.apps](https://developers.google.com/admob/api/reference/rest/v1beta/accounts.apps) |
| app-ads.txt (dispensa em lojas de terceiros?) | [AdMob 14538460](https://support.google.com/admob/answer/14538460?hl=en), [9363762](https://support.google.com/admob/answer/9363762?hl=en) |
| Pagamento, identidade, PIN, limiares | [12835021](https://support.google.com/admob/answer/12835021?hl=en), [13030080](https://support.google.com/admob/answer/13030080?hl=en), [2772208](https://support.google.com/admob/answer/2772208?hl=en) |
| Testes e cliques proibidos | [9493252](https://support.google.com/admob/answer/9493252?hl=en), [9691433](https://support.google.com/admob/answer/9691433?hl=en) |
| Contactar o suporte | [AdMob 9948073](https://support.google.com/admob/answer/9948073?hl=en) |
| Play: taxa, cartões, identidade | [6112435](https://support.google.com/googleplay/android-developer/answer/6112435?hl=en), [14177239](https://support.google.com/googleplay/android-developer/answer/14177239?hl=en) |
| Play: teste fechado de 12 testadores | [14151465](https://support.google.com/googleplay/android-developer/answer/14151465?hl=en) |
| Play: apps oficiais do Estado/impersonação | [9888374](https://support.google.com/googleplay/android-developer/answer/9888374), [9514050](https://support.google.com/googleplay/android-developer/answer/9514050?hl=en) |
| Verificação de programadores (confirmar data para a UE) | [Visão geral](https://developer.android.com/developer-verification), [FAQ](https://developer.android.com/developer-verification/guides/faq) |
| Samsung: particular pode distribuir? | [Get Started](https://developer.samsung.com/galaxy-store/prepare.html), [fórum](https://forum.developer.samsung.com/t/change-to-seller-registration-requirements/22583) |
| Xiaomi: registo de particular | [Acordo](https://global.developer.mi.com/document?doc=cookiePolicyTitle.releaseAgreement), [registo](https://global.developer.mi.com/document?doc=accountRegistration.becomeADeveloper), [individual](https://global.developer.mi.com/create/individual) |
| OPPO: aviso a contas europeias | [developers-eu.oppomobile.com](https://developers-eu.oppomobile.com/) |
| vivo, Huawei | [developer.vivo.com](https://developer.vivo.com/), [Huawei Policy Center](https://developer.huawei.com/consumer/en/doc/start/policycenter-0000001053129900) |
| Amazon: encerramento Android | [Release notes](https://developer.amazon.com/docs/app-submission/release-notes.html) |
| Aptoide: preço | [docs.catappult.io/docs/subscription](https://docs.catappult.io/docs/subscription) |
