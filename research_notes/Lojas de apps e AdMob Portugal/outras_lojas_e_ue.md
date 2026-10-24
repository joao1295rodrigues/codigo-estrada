# Outros canais de distribuição Android (Amazon, Aptoide, F-Droid, outros) e ângulo UE (DMA/DSA) para app gratuita com AdMob, pessoa singular em Portugal (estado: 2026-10-24)

**Aviso metodológico (importante):** nesta sessão o `WebFetch` e o `curl` a `support.google.com`, `developers.google.com`, `f-droid.org` e `developer.amazon.com` falharam (DNS/proxy 403 por política). **Nenhuma página oficial foi aberta diretamente.** Tudo abaixo vem de resumos devolvidos pelo `WebSearch` (que cita as páginas oficiais, incluindo frases entre aspas). As citações "literais" são as que o resumo da pesquisa reproduziu; convém o dono confirmar no ecrã do AdMob/Play Console antes de decisões irreversíveis. O que não foi encontrado está em "Gaps".

## 1. O AdMob aceita estas lojas? (lista oficial, enum da API, "publicamente disponível")

### Takeaway
A lista oficial atual do AdMob (ligar app a loja) tem Google Play, Apple App Store e 5 lojas Android de terceiros: Amazon Appstore, OPPO App Market, Samsung Galaxy Store, VIVO App Store e Xiaomi GetApps. Aptoide, F-Droid, Uptodown, APKPure, GitHub, itch.io e Firebase App Distribution NÃO estão na lista. Apps só em lojas não suportadas "não podem ser revistas" e têm "limited ad serving".

### Cited Findings
- AdMob Help (resposta 10037806), segundo o resumo da pesquisa: "At this time, AdMob supports the Amazon Appstore, OPPO App Market, Samsung Galaxy Store, VIVO App Store, and Xiaomi GetApps." Google Play e Apple App Store são ligadas por fluxo de pesquisa separado — [AdMob Help 10037806](https://support.google.com/admob/answer/10037806) (página não aberta diretamente; via WebSearch).
- Mesma página: "You can't link private Google Play apps to AdMob. All Android apps must be publicly available in a supported store in order to link to AdMob." — [AdMob Help 10037806](https://support.google.com/admob/answer/10037806)
- Mesma página/related: apps "listed exclusively in unsupported stores can't be reviewed and will receive limited ad serving" (a redação varia entre versões da página; regra é a mesma) — [AdMob Help 10037806](https://support.google.com/admob/answer/10037806), [AdMob Help 9989980](https://support.google.com/admob/answer/9989980)
- Apps ainda não publicadas: pode adicionar-se a app como "unpublished" (manualmente); fica com "limited ad serving" até estar listada e ligada a uma loja suportada — [AdMob Help 9989980](https://support.google.com/admob/answer/9989980), [Manually link your app 3034835](https://support.google.com/admob/answer/3034835). A ligação a loja é, portanto, o caminho para a revisão deixar de ser limitada; a revisão começa automaticamente após ligação e "typically takes 2–3 days" (resumo da pesquisa de 10037806).
- Uma app acabada de listar pode demorar 24–48 h (até 1 semana) a poder ser ligada — [AdMob Help 10037806](https://support.google.com/admob/answer/10037806)
- Existe uma versão antiga da ajuda do AdMob com lista diferente de "supported app stores" (sobretudo lojas chinesas e Microsoft) — a pesquisa considerou-a desatualizada — [AdMob Help 2773509](https://support.google.com/admob/answer/2773509)
- API AdMob: `platform` é "IOS" ou "ANDROID"; `linkedAppInfo.appStoreId` é o ID de aplicação do Google Play (ex.: "com.example.myapp") para Android; "setting the app store id is considered an irreversible action" (não se pode desligar); o campo opcional `androidAppStores` (só Android, ignorado em iOS; default = Google Play; atualizável após criação) existe na v1beta; as bibliotecas v1 (Ruby/.NET) listam só `appStoreId` e `displayName` — [REST accounts.apps v1beta](https://developers.google.com/admob/api/reference/rest/v1beta/accounts.apps), [AppLinkedAppInfo .NET v1](https://googleapis.dev/dotnet/Google.Apis.AdMob.v1/latest/api/Google.Apis.AdMob.v1.Data.AppLinkedAppInfo.html)

### Inferences
- Para uma app com anúncios, as únicas lojas "oficialmente" contáveis para o AdMob são as 7 da lista. Para um particular em Portugal, na prática: Google Play (principal) e Samsung Galaxy Store / Amazon Appstore (Fire) como complementos. OPPO/VIVO/Xiaomi são lojas orientadas à China/Ásia; não foi verificado se aceitam publicadores individuais europeus.
- Aptoide/F-Droid/etc. podem distribuir a APK, mas não "contam" para o AdMob; os anúncios podem ainda assim servir (relatos anedóticos de fóruns Kodular/App Inventor divergem), mas sem revisão completa a app fica com serviço limitado. Não há política oficial a garantir o contrário.

### Gaps
- Valores exatos do enum `AndroidAppStore` da API: a pesquisa só viu que existe (páginas v1beta it/ko referem-no) mas não devolveu os valores; não confirmei `AMAZON_APP_STORE`, `SAMSUNG_GALAXY_STORE`, etc. Ver a secção `AndroidAppStore` na página REST v1beta.
- Não foi possível confirmar texto oficial que diga que o link de loja é "opcional" para apps não publicadas além da opção "unpublished" (a redação literal da página 9989980 não foi lida na íntegra).
- Não confirmei se o AdMob aceita uma listagem Amazon que exista APENAS para Fire (ver secção 2).

## 2. Amazon Appstore (estado atual)

### Takeaway
A Amazon parou novas submissões para dispositivos Android em 2025-02-20 e encerrou a Appstore para Android (não-Fire) em 2025-08-20; as release notes do developer console dizem agora que já não se pode submeter nem atualizar apps para móveis Android. Continua para Fire TV e Fire Tablet (e Vega OS). Para um particular em Portugal, uma listagem "só Fire" é possível em teoria, mas o alcance é residual e não confirmei que o AdMob a aceite para ligação.

### Cited Findings
- A Amazon anunciou a 2025-02-20 que a Appstore para dispositivos Android fecharia a 2025-08-20; novas apps para Android deixaram de poder ser submetidas a partir de 2025-02-20; atualizações a apps existentes permitidas até 2025-08-20; "Amazon Appstore will continue to be available and supported on Fire TV, Fire Tablet, and Fire TV built-in products"; Coins terminam e saldo é reembolsado — [Amazon Developer blog, Fev 2025](https://developer.amazon.com/apps-and-games/blogs/2025/02/upcoming-changes-to-amazon-appstore-for-android-devices-and-coins-program) (via WebSearch, página não aberta)
- Release notes do Developer Console: "Amazon Appstore for Android is now discontinued. You can no longer submit or update apps for Android mobile devices." Fire TV e tablet continuam; Vega OS (VPKG) suportado desde setembro 2025; a primeira versão de uma app nova tem de ser submetida pela Developer Console (API só para atualizações); web-based apps descontinuadas; 2026-01-20 adicionado papel "tester" — [Amazon Release Notes](https://developer.amazon.com/docs/app-submission/release-notes.html)
- Windows: o Amazon Appstore no Windows 11 (WSA) deixou de ser suportado a 2025-03-05 — [Amazon: Appstore on Windows 11](https://developer.amazon.com/apps-and-games/appstore-on-windows-11), [Windows Central](https://windowscentral.com/software-apps/windows-11/microsoft-will-kill-windows-subsystem-for-android-on-windows-11-next-year-but-amazon-just-drove-a-nail-in-the-coffin) (secundário)
- Fire OS é um fork do Android; apps Android correm "most likely" em Fire; Vega OS (baseado em React Native) está em Fire TV 4K Stick Select e dispositivos Echo, mais em 2026; sem menção a tablets Vega — [Amazon 2025 year in review](https://developer.amazon.com/apps-and-games/blogs/2025/12/2025-year-in-review), [Amazon SDKs](https://developer.amazon.com/apps-and-games/sdks)
- Cobertura secundária: [Android Authority](https://www.androidauthority.com/amazon-shuts-down-android-app-store-3528170), [Wikipedia](https://en.wikipedia.org/wiki/Amazon_Appstore)
- Fórum Solar2d "Admob on Amazon Marketplace Apps" existe (relato de developers), conteúdo não lido — [Solar2d forum](https://forums.solar2d.com/t/admob-on-amazon-marketplace-apps/353075)

### Inferences
- A Amazon continua na lista do AdMob, mas a sua Appstore para Android está encerrada; a lista de ajuda pode estar desatualizada ou refletir só Fire. Uma listagem Fire poderia, em tese, ser ligada pelo nome de pacote, mas isto é inferência não verificada.
- Alcance em Portugal: Fire tablets são um nicho; sem dados encontrados.
- Custo/individuo: a conta Amazon Developer foi historicamente gratuita; não confirmei nesta sessão a política de 2026 para novos publicadores nem requisitos fiscais (W-8/W-9 só se houver receitas).

### Gaps
- Se uma app só em Fire (Fire Tablet/TV) pode ser ligada no AdMob, e se a app com Google Mobile Ads SDK passa a revisão Amazon: sem fonte.
- Relatos de developers pós-encerramento (agosto 2025 em diante): não encontrei fontes fiáveis; não confirmo sequer a execução do encerramento por fontes independentes depois de agosto 2025, só pelas release notes da Amazon.
- Tempo de revisão Amazon, custo atual da conta: não confirmados.

## 3. Aptoide

### Takeaway
O Aptoide é uma loja alternativa portuguesa (Lisboa) com ~25 M de utilizadores mensais (auto-reportado, global), mas NÃO está na lista de lojas do AdMob. O programa para developers é agora o "Aptoide Connect" (ex-Catappult) e a submissão exige uma subscrição paga (69 USD/EUR por ano) — a ideia de conta "grátis" não se confirma na documentação oficial encontrada.

### Cited Findings
- Aptoide Connect (docs.catappult.io): "To submit applications for review on Aptoide Connect, you'll need an active subscription", 69 USD ou 69 EUR/ano, renovação automática, reembolsável nos primeiros 30 dias se nenhuma app tiver começado a distribuição — [Subscription](https://docs.catappult.io/docs/subscription)
- Prova de propriedade da app: se está no Google Play, usa o email de suporte do Google Play ("Aptoide Connect will use your application's Google Play support email address to verify ownership"); se não está, é preciso um "Application Ownership Request", e a subscrição paga é necessária para o pedido ser revisto — [App ownership](https://docs.catappult.io/docs/app-ownership), [App submission overview](https://docs.catappult.io/docs/app-submission-overview)
- Ficheiros: .apk (até 2 GB) e .obb (até 5 GB), APK assinado, sem .aab/.apks/zip; revisão de conformidade após "Submit" — [App files](https://docs.catappult.io/docs/app-files), [App submission overview](https://docs.catappult.io/docs/app-submission-overview)
- Contas do antigo portal Aptoide a migrar para Catappult/Aptoide Connect — [Migrating from Aptoide to Catappult](https://docs.catappult.io/v1.0/docs/migrating-from-aptoide-to-catappult); Catappult renomeado Aptoide Connect — [PocketGamer.biz](https://www.pocketgamer.biz/aptoide-rebrands-catappult-to-aptoide-connect) (secundário)
- Pagamentos in-app via SDK Aptoide: até 90% de payout — [Billing integration](https://docs.catappult.io/docs/billing-integration)
- Alcance: ~25 M MAU, >400 000 apps (comunicado da empresa; outras fontes citam >40 000 ou 430 M utilizadores registados; números auto-reportados e inconsistentes) — [PR Newswire/Morningstar 2026-08-10](https://www.morningstar.com/news/pr-newswire/20260810io22581/aptoide-returns-to-google-play-after-more-than-a-decade-opening-a-new-chapter-for-competition-on-android), [PocketGamer.biz](https://pocketgamer.biz/aptoide-returns-to-google-play-after-more-than-a-decade), [SQ Magazine (secundário)](https://sqmagazine.co.uk/aptoide-statistics/)
- Em 2026-08 o Aptoide Games (só jogos) voltou ao Google Play, mas apenas nos EUA, ao abrigo do programa "Play Catalog Access" (iniciado 2026-06-22 segundo TechCrunch); fora dos EUA o utilizador continua a ter de fazer sideload — [Notebookcheck](https://www.notebookcheck.net/Aptoide-Games-returns-to-Google-Play-Store-in-the-US.1367388.0.html), [4gnews.pt](https://4gnews.pt/de-portugal-para-o-mundo-aptoide-regressa-a-google-play-mais-de-10-anos-depois/)
- Aptoide também lançou loja iOS na UE ao abrigo do DMA (foco em jogos) — [Notebookcheck](https://www.notebookcheck.com/Aptoide-App-Store-fuer-iOS-in-der-Europaeischen-Union-in-den-Startloechern.844315.0.html), [Presse-citron](https://www.presse-citron.net/aptoide-arrive-sur-liphone-et-ce-nest-pas-une-blague/)
- Anúncios: a pesquisa não encontrou política do Aptoide que proíba ou aprove SDKs de anúncios; relatos anedóticos de que AdMob em apps fora do Play pode não servir anúncios (Kodular), sem valor oficial — [Kodular](https://community.kodular.io/t/without-uploaing-app-on-playstore-can-ads-come/20707), [Kodular Aptoide/AdSense](https://community.kodular.io/t/if-i-upload-my-app-to-aptoide-does-adsense-monetization-work/68129)

### Inferences
- Pagar 69 EUR/ano para uma loja que não conta para o AdMob contradiz o requisito "custo zero" do projeto; só faria sentido como canal de alcance, não de monetização validada.
- A fundação portuguesa não implica quota relevante em Portugal; não há dado por país.

### Gaps
- Instalações/utilizadores em Portugal: não encontrados.
- Existência de nível gratuito (ou se a subscrição de 69 EUR é obrigatória também para apps no Play): a documentação indica subscrição para submeter; um diretório de APIs de terceiros mencionou "Free developer account" sem detalhe — não confirmado.
- Tempo de revisão e malware scan do Aptoide: não encontrei números oficiais (o doc fala de revisão de conformidade).
- Se o Aptoide permite o Google Mobile Ads SDK: sem fonte oficial.

## 4. F-Droid

### Takeaway
O F-Droid distribui só software livre; a doc de Anti-Features diz que a maior parte das apps com publicidade não são software livre porque usam software proprietário (ex.: AdMob). O Google Mobile Ads SDK é proprietário, logo uma app com AdMob não é aceitável no repositório principal; apps com anúncios só entram (quando entram) assinaladas "Ads" ou com dependências não livres assinaladas. F-Droid é gratuito mas exige código-fonte aberto.

### Cited Findings
- Inclusion Policy: missão "to safely and transparently distribute free and open source applications"; apps que não recompilam (ex.: dependem do Play Services) ou têm anti-features não declaradas "will receive a rejection" — [F-Droid Inclusion Policy](https://f-droid.org/en/docs/Inclusion_Policy/) (via WebSearch)
- Anti-Features, "Ads": "This Anti-Feature is applied to an app that contains advertising. Note that most applications that contain advertising are not Free Software, because they use proprietary software (e.g. AdMob) to provide that advertising." — [F-Droid Anti-Features](https://f-droid.org/en/docs/Anti-Features/)
- A mesma página diz que apps com bibliotecas proprietárias de rastreio (ex.: Google Analytics) não se encontrarão no repositório F-Droid (o resumo refere isto a tracking, não resolve claramente o caso de anúncios) — [F-Droid Anti-Features](https://f-droid.org/en/docs/Anti-Features/)
- Caso real: thread sobre Librera Reader com AdMob (alegação de stubs/sem permissão de internet no build F-Droid; anedótico) — [F-Droid forum](https://forum.f-droid.org/t/librera-reader-containing-admob/10341)

### Inferences
- Para esta app (código aberto?), seria preciso uma variante de build sem o SDK de anúncios (flavor "fdroid") — o F-Droid não ajuda a monetizar. Não conta para o AdMob e a App não pode ligar-se lá.
- Não verifiquei o texto de "NonFreeNet"/"NonFreeDep" (a pesquisa não o devolveu); "NonFreeNet" refere-se a promover/depender de serviços de rede não livres.

### Gaps
- Texto literal de NonFreeNet e NonFreeDep; política atual para apps que só têm o SDK desativado/removido: não lidos.
- Tempo de revisão do F-Droid (voluntários, tipicamente semanas): sem fonte.

## 5. Outros canais (Uptodown, APKPure, GetJar, itch.io, GitHub Releases, Firebase App Distribution)

### Takeaway
Nenhum destes está na lista do AdMob. Servem para distribuição direta/testes, não para validar a app no AdMob. Quase tudo ficou sem fonte nesta sessão.

### Cited Findings
- Uptodown: os termos de developer dizem que o developer fornece os ficheiros e que têm de cumprir as políticas e critérios de publicação do Uptodown ("condition of essence of this Agreement") — [Uptodown developers zone](https://ru.uptodown.com/developers-zone/services). Unity Distribution Portal (que publicava no Uptodown) foi descontinuado em 2025-02-17 — [Unity guide](https://distribute.dashboard.unity.com/guideDoc/UPTODOWN)
- Sideload em geral: Google está a implementar "Android developer verification". Calendário reportado: serviço Android Developer Verifier a aparecer em 2026; registo obrigatório a partir de 2026-09-30 no Brasil, Indonésia, Singapura e Tailândia; expansão global em 2027; ADB isento; fluxo avançado para instalar apps de developers não verificados; conta "limited distribution" para estudantes/hobbyists (até 20 dispositivos, sem ID nem taxa). Calendário já mudou várias vezes e não foi confirmado o estado a 2026-10-24 — [Android Authority timeline](https://www.androidauthority.com/android-sideloading-changes-timeline-3679204/), [GSMArena](https://gsmarena.com/google_android_developer_verification_app_sideloading_changes_timeline-news-73354.php), [Bitdefender](https://www.bitdefender.com/en-au/blog/hotforsecurity/google-developer-verification-sideloaded-apps) (secundárias)
- Relato Kodular: AdMob pode ser bloqueado/limitado em APKs instaladas fora do Play em apps feitas na plataforma Kodular (política da plataforma, não do AdMob) — [Kodular](https://community.kodular.io/t/admob-troubleshooting/18115)

### Inferences
- GitHub Releases / site próprio: custo zero, sem revisão, mas sujeito à futura verificação de developers Android (2027 global) e ao risco de sideload; útil como espelho do APK, sem efeito no estado de revisão do AdMob.
- Aviso: ao publicar APK diretamente é preciso o `applicationId` igual ao do Play para não criar uma app AdMob duplicada/desligada.

### Gaps
- Sem fontes (não pesquisado/encontrado): APKPure, GetJar (provavelmente inativo), itch.io (aceita APK Android; sem política de anúncios verificada), GitHub Releases e Firebase App Distribution (política, limites). Uptodown: processo de submissão, tempos e custos não confirmados. Nenhum destes tem página oficial lida.

## 6. Ângulo UE: DMA e DSA ("trader")

### Takeaway
O DMA abriu lojas alternativas sobretudo no iOS na UE (Epic Games Store e Aptoide iOS); no Android já era possível sideload e lojas alternativas, e a Epic lançou a sua loja mobile em Android a nível mundial em 2024. Pelo DSA, quem publica apps em lojas na UE e atua com fins comerciais (incluindo anúncios) é provavelmente "trader" e vê dados de contacto verificados mostrados na ficha da loja; confirmar na Play Console quais os campos e se se aplica a conta pessoal.

### Cited Findings
- Epic Games Store: lançado em Android mundialmente e em iOS só na UE (ao abrigo do DMA) em agosto de 2024; instalação descrita pela Epic como "lengthy" — [Neowin](https://www.neowin.net/news/epic-games-store-launches-on-ios-in-the-eu-and-android-worldwide/), [Silicon Republic](https://siliconrepublic.com/?p=1090662) (secundárias). Artigo de 2026 cita 78 M MAU no PC (dez. 2025) — [Tech Insider (secundário, não corroborado)](https://tech-insider.org/fr/epic-games-store-2026-78m-actifs-ios-dma/). Epic é loja de jogos; não é canal viável para uma app de estudo e não está na lista do AdMob.
- Epic Games, requisitos DSA: vendedores declaram-se trader ou non-trader; dados de non-traders não são mostrados publicamente e aparece aviso sobre ausência de proteção de consumidor da UE — [Epic legal](https://legal.epicgames.com/epicgames/marketplace-disclosure-requirements)
- Apple (referência oficial): indivíduos têm de dar morada ou apartado, telefone e email, mostrados na ficha UE; apps sem estado de trader verificado foram removidas das lojas UE — [Apple Developer: DSA trader](https://developer.apple.com/help/app-store-connect/manage-compliance-information/manage-european-union-digital-services-act-trader-requirements/), [TechRepublic](https://www.techrepublic.com/article/eu-app-store-apple-digital-services-act/)
- Definição de trader (Comissão Europeia, via Chrome Web Store FAQ): pessoa singular ou coletiva que atua para fins relacionados com o seu comércio, negócio, ofício ou profissão; cada developer decide por si e a Google não aconselha — [Chrome Web Store Trader FAQ](https://developer.chrome.com/docs/webstore/program-policies/trader-verification-faq)
- Fontes secundárias: apps gratuitas com anúncios tendem a ser consideradas de trader — [RevenueCat blog](https://www.revenuecat.com/blog/growth/am-i-a-trader-and-other-existential-questions-for-developers), [SDTimes](https://sdtimes.com/mobile/apple-adds-new-requirements-for-apps-distributed-through-the-app-store-in-the-eu/)
- Google Play: um blogue japonês argumenta que no Google Play um developer individual tem o nome real tornado público mesmo com app gratuita — [note.com](https://note.com/kotodama_jp/n/nff5352d3ff2d?hl=en) (blogue, não verificado)
- Aptoide a ser a primeira loja rival a entrar no Google Play (só EUA, não UE; termos limitam o uso do catálogo fora dos EUA) — [TheNextWeb](https://thenextweb.com/news/aptoide-google-play-first-rival-app-store-us-catalog-access)

### Inferences
- Para o dono: uma app gratuita com AdMob gera receita, logo o enquadramento prudente é "trader" nas lojas que o pedem; isto implica morada/telefone/email visíveis nas fichas da UE (usar contactos dedicados, não pessoais). Decisão final: dele (não é aconselhamento jurídico).
- Não encontrei nenhuma obrigação do DMA que force o Google Play a listar lojas rivais na UE.

### Gaps
- Página oficial do Play Console Help sobre estado de trader (campos, prazos, se a morada é mostrada para contas pessoais, se aplica a apps gratuitas sem anúncios): não encontrada; só fontes secundárias.
- Páginas da Comissão Europeia (DMA designação de Google/Alphabet e Android; DSA art. 30 "traceability of traders"): não consultadas.
- Estado de lojas alternativas Android na UE em 2026 (além de Epic, Aptoide, Samsung): sem fonte.

## Tabela comparativa

| Canal | Custo | Particular pode publicar? | Revisão | Conta para o AdMob? | Alcance PT |
|---|---|---|---|---|---|
| Google Play | taxa única de conta (fora do âmbito desta nota) | sim | (outro investigador) | **Sim** (loja principal) | principal |
| Amazon Appstore | conta developer historicamente grátis (não confirmado 2026) | só Fire TV/tablet/Vega; Android móvel encerrado | n/d | Na lista, mas Android encerrado; Fire-only não confirmado | residual (sem dados) |
| Samsung Galaxy Store | n/d nesta nota | n/d nesta nota | n/d | **Sim** (na lista) | n/d |
| Aptoide (Connect) | 69 EUR/ano (docs.catappult.io) | sim, com prova de propriedade | revisão de conformidade (tempo n/d) | **Não** (não está na lista) | sem dados PT; ~25 M MAU global (auto-reportado) |
| F-Droid | grátis | sim, mas só código aberto/livre | voluntários (n/d) | **Não**; SDK AdMob proprietário incompatível (anti-feature "Ads") | nicho |
| Uptodown / APKPure | n/d | n/d | n/d | **Não** | sem dados |
| GitHub Releases / Firebase App Distribution / itch.io | grátis (não verificado) | sim | nenhuma | **Não** | só quem procura; risco de verificação de developers Android em 2027 |
| Epic Games Store (Android) | n/d | n/d (loja de jogos) | n/d | **Não** | sem dados |
