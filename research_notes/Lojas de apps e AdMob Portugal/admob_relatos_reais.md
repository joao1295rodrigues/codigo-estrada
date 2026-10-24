# Relatos reais de programadores: AdMob "Getting ready", anúncios em apps fora de lojas

> **Limitações desta pesquisa (ler primeiro).** O acesso HTTP direto foi bloqueado pelo proxy da sessão (403 em support.google.com, groups.google.com, reddit.com, stackoverflow.com, dev.to, community.kodular.io, community.thunkable.com; WebFetch falhou com erro de DNS). Não contornei a política. Todo o conteúdo abaixo vem de **resultados do WebSearch (resumos do motor de pesquisa)**, não de leitura direta das páginas. Por isso: (a) não consegui confirmar datas de quase nenhum post, (b) as citações entre aspas vêm do resumo do motor, não verificadas na fonte, (c) **não encontrei nenhum post de r/admob, Stack Overflow, dev.to ou Medium com relato datado de 2024-2026 sobre este tema** (o único r/admob datado é de abril de 2025 e é sobre outro assunto). Tudo o que é de fóruns é **anedótico/não verificado**. Fontes oficiais Google estão marcadas como "oficial (via resumo)".

## Quanto tempo dura realmente "Getting ready" em contas novas, e o que desbloqueou

### Takeaway
A documentação oficial diz "alguns dias", mas liga explicitamente "Getting ready" em contas novas à **verificação da conta (dados de pagamento)** e, para a revisão começar, à **app estar publicada e ligada a uma loja suportada**. Os relatos de fóruns vão de 48 horas a várias semanas; não encontrei relatos datados de 2024-2026 de contas novas com loja ausente a sair do estado sem publicar.

### Cited Findings
- Oficial (via resumo): "Getting ready" = "We're reviewing your app"; normalmente "a couple of days", por vezes mais. — [About app readiness](https://support.google.com/admob/answer/10564477?hl=en)
- Oficial (via resumo): "If you recently signed up for AdMob, your apps will remain in the 'Getting ready' status until your account is verified"; a verificação faz-se introduzindo os dados de pagamento. — [About app readiness](https://support.google.com/admob/answer/10564477?hl=en)
- Oficial (via resumo): a revisão só começa automaticamente quando a app está ligada a pelo menos uma loja suportada e a app tem de estar publicada ("available to users"). — [About app readiness](https://support.google.com/admob/answer/10564477)
- Oficial (via resumo): desde 2024 há um passo adicional: para a app ser revista/aprovada para servir plenamente, primeiro verificar a app com **app-ads.txt** (o site do programador tem de estar na ficha da loja; o AdMob demora ~24 h a rastrear; "wait one week before seeking additional help"). — [app-ads.txt / verificação](https://support.google.com/admob/answer/9363762) e [App readiness](https://support.google.com/admob/answer/10564477)
- Oficial (via resumo): conta nova revista em ~24 h, "rarely up to 2 weeks"; app/bloco de anúncios novo normalmente até 1 h, raramente alguns dias. — [Ad serving / new account](https://support.google.com/admob/answer/9905175)
- Anedótico, data não verificada: staff/moderador no fórum Thunkable disse que ~90% das apps são revistas em 48 h (comentário informal, não oficial; contexto de apps Thunkable já em loja). — [Thunkable: how long will it take to get AdMob reviewed](https://community.thunkable.com/t/solved-curious-about-how-long-will-it-take-to-get-admob-reviewed/539419)
- Anedótico, data não verificada: outros fios Thunkable reportam esperas de poucos dias a várias semanas; num caso o desbloqueio foi aceitar o convite antes de as apps poderem ser aprovadas. — [Approval for ad-mob timeline (48 h+)](https://community.thunkable.com/t/approval-for-ad-mob-timeline-via-thunkable-its-been-over-48-hours/502184), [Thunkable admob waiting](https://community.thunkable.com/t/thunkable-admob-waiting/2136384), [AdMob review question](https://community.thunkable.com/t/admob-review-question/2122945)
- Anedótico, data não verificada: fio no Google Group do SDK "Approval status is in 'Getting ready' for long time"; segundo o resumo, um utilizador não encontrava botão para iniciar a verificação depois de introduzir pagamento (só aparecia verificada a organização). Não consegui confirmar data nem resolução. — [Google Group google-admob-ads-sdk](https://groups.google.com/g/google-admob-ads-sdk/c/wJp5_l5Ivpk)
- Anedótico: carta com PIN de morada do AdMob remete a verificação para o AdSense; o utilizador não achava o botão; a resposta aponta para o cartão "Verify" no painel inicial do AdSense. Anúncios ficam pausados até introduzir o PIN. (Fórum russo, data não verificada.) — [qna.habr.com/q/1041318](https://qna.habr.com/q/1041318)
- Anedótico: no fórum Kodular, um utilizador reporta "review waiting time already over 1 month" (sistema de aprovação da Kodular, não do AdMob; data não verificada). — [Kodular Admob Approval System](https://community.kodular.io/t/admob-approval-system/22210)
- Anedótico: um fio do fórum de desenvolvimento App Studio ("Admob 1) no ad showing 2) app under review") descreve app em revisão sem anúncios; conteúdo e data não verificados. — [discuss.appstudio.dev](https://discuss.appstudio.dev/t/admob-1-no-ad-showing-2-app-under-review/4041)

### Inferences
- Para uma conta nova de Out 2026, as três causas oficiais prováveis de continuar em "Getting ready" são: pagamento/verificação incompleta, app não ligada a loja suportada, app-ads.txt não verificado. A app estar só como APK cobre pelo menos o segundo ponto.
- 3 dias é ainda "normal" para a janela oficial, mas sem loja ligada a revisão pode simplesmente nunca arrancar (inferência a partir do texto oficial, não de um relato).

### Gaps
- Nenhum relato datado de 2024-2026 de uma conta nova a sair de "Getting ready" com app **só APK**. Não consegui abrir r/admob, Stack Overflow, dev.to, Medium (bloqueados) nem confirmar datas nos Google Groups.
- Durações reais (percentis) para contas novas: sem dados fiáveis.

## Anúncios reais (não teste) em apps só APK/não publicadas; fill/eCPM; "No Ad Config", erro 3, erro 0

### Takeaway
Os relatos de fóruns convergem: anúncios de teste funcionam sempre; anúncios reais em APK/app não publicada vêm tipicamente em branco (erro 3 / "No ad config"). Oficialmente, apps só em lojas não suportadas "can't be reviewed and will receive limited ad serving". Não encontrei nenhum relato fiável de anúncios reais a aparecer numa app puramente sideloaded, nem números de fill/eCPM.

### Cited Findings
- Oficial (via resumo): apps listadas só em lojas não suportadas "can't be reviewed and will receive limited ad serving". — [Supported stores / app readiness](https://support.google.com/admob/answer/9989980?hl=en)
- Oficial (via resumo): durante a revisão as apps podem ter "limited ad serving"; só depois da aprovação servem plenamente. — [App readiness](https://support.google.com/admob/answer/10564477)
- Oficial (via resumo): AdMob tem a opção "unpublished app" para configurar/testar antes de publicar; não diz que serve anúncios reais nesse estado. — [Unpublished apps](https://support.google.com/admob/answer/9989980?hl=en)
- Oficial (via resumo): erro 3 = ERROR_CODE_NO_FILL, "successful request that returned no ad due to lack of ad inventory"; restrições de política a apps/blocos também devolvem erro 3; blocos novos podem demorar até ~2 h. — [Solar2D forum a citar a documentação](https://forums.solar2d.com/t/admob-doesn-t-work/352564/18), [AdMob help](https://support.google.com/admob/answer/9905175?hl=en-AU)
- Anedótico (AppInventor/Kodular, datas não verificadas): "No Ad Config" aparece com anúncios não-teste em app que não está live na Play Store; conselho: publicar na Play Store, registar no AdMob e esperar. — [AppInventor AdMob extension thread, pág. 4](https://community.appinventor.mit.edu/t/outdated-free-admob-extension-add-different-types-of-admob-ads-in-your-application/45216?page=4), [post 62](https://community.appinventor.mit.edu/t/outdated-free-admob-extension-add-different-types-of-admob-ads-in-your-application/45216/62)
- Anedótico: um programador relata que o suporte Google disse que "sometimes it takes 18 days or 4 weeks" até aparecerem anúncios reais; outro fio diz até 24 h após aprovação (contraditórios; posts não identificados com precisão no resumo). — [AppInventor AdMob extension thread](https://community.appinventor.mit.edu/t/outdated-free-admob-extension-add-different-types-of-admob-ads-in-your-application/45216/75)
- Anedótico (Thunkable): resposta diz que contas novas e apps instaladas fora de lojas podem ter fill muito menor, ligado a prevenção de fraude; é opinião do respondente, não regra confirmada; o erro no fio era NO_FILL. — [Thunkable X Admob not working in APK](https://community.thunkable.com/t/thunkable-x-admob-not-working-in-apk-but-works-in-live-test/73949)
- Anedótico (Kodular): "banner de teste carrega, com ID real fica espaço branco; AdMob mostra zero pedidos e zero impressões" — o mesmo sintoma do dono da app. A sugestão foi garantir que a app está ativada/aprovada. — [Kodular: Admob banner not loading](https://community.kodular.io/t/admob-banner-not-loading/24307)
- Anedótico (Kodular, data não verificada): "Admob banner ad works in companion, but not in final apk form" e outros fios semelhantes com APK. — [Kodular](https://community.kodular.io/t/admob-banner-ad-works-in-companion-but-not-in-final-apk-form/55823)
- Anedótico (Godot QA, data não verificada): um caso em sentido inverso, em que a instalação pela Play Store não mostrava anúncios e o mesmo APK sideloaded mostrava — mostra que o comportamento não é uniforme. — [Godot QA 94228](https://godotengine.org/qa/94228/admob-ads-not-showing-after-app-update)
- Anedótico (Kodular, relevante só ao sistema de aprovação da Kodular, não ao AdMob): a Kodular bloqueia/permite anúncios em APK fora da Play Store por um sistema próprio de aprovação; ver nota abaixo. — [Kodular Admob Approval System](https://community.kodular.io/t/admob-approval-system/22210), [Approval ads outside the Playstore](https://community.kodular.io/t/approval-ads-outside-the-playstore-help/176066)
- Anedótico (r/admob, abr 2025, via espelho): utilizador com zero pedidos após dias foi aconselhado a verificar inicialização do SDK e IDs dos blocos, e testar com anúncios de teste. — [r/admob (espelho redlib)](https://redlib.hbubli.cc/r/admob/comments/1jr6h69/need_help_ading_ads)
- Anedótico (Expo): banner em branco que passou a funcionar com IDs de teste; sem causa identificada. — [Expo forum](https://forums.expo.dev/t/expo-admob-banner-display-blank/29251)

### Inferences
- "0 ad requests" nos relatórios + banner em branco com ID real + teste a funcionar bate com o padrão de fóruns: a app está em estado de revisão/limitada e/ou o pedido é rejeitado antes de ser contado. Não encontrei fonte que explique ao certo porque os pedidos não são contados; é inferência.
- Erro 0 (interno): não encontrei relatos específicos para apps não publicadas; fica por documentar.

### Gaps
- Nenhum número de fill ou eCPM para apps sideloaded/não publicadas.
- Nenhum relato verificado de que o SDK da Google mostre anúncios reais numa APK sideloaded de uma app nunca aprovada. Não encontrei confirmação nem desmentido oficial explícito.
- Nenhum relato específico de "error 0" em apps não publicadas.
- Relatos "ads not counted in reports for unreviewed apps": só o sintoma do fio Kodular acima (zero pedidos/impressões); sem explicação oficial encontrada.

## Contas desativadas por cliques próprios / anúncios reais em dispositivos de teste

### Takeaway
A política oficial proíbe clicar nos próprios anúncios reais, mesmo para testar; a solução oficial é usar blocos de teste/demo ou registar o dispositivo como dispositivo de teste. Não encontrei relatos pessoais datados de 2024-2026 nesta pesquisa.

### Cited Findings
- Oficial (via resumo): testar clicando nos próprios anúncios não é permitido; muitos cliques fora do modo de teste podem levar a atividade inválida/suspensão. — [Invalid activity: Disabled account](https://support.google.com/admob/answer/6197403?hl=en), [Suspended account](https://support.google.com/admob/answer/6213019?hl=en), [Prevent invalid activity](https://support.google.com/admob/answer/3342099?hl=en)
- Oficial (via resumo): os IDs de blocos demo "are not associated with your AdMob account", portanto sem risco de tráfego inválido; alternativa: dispositivo de teste + os seus próprios IDs. Anúncios mediados não mostram o rótulo Test Ad. — [Enable test ads (Android)](https://developers.google.com/admob/android/next-gen/test-ads)
- Oficial (via resumo): a Google diz que não pode dar informação sobre a atividade da conta; recurso via formulário/email de qualidade de tráfego (adsense-noreply@google.com), descrevendo as alterações feitas. — [Disabled account](https://support.google.com/admob/answer/6197403?hl=en), [blog Google AdMob](https://blog.google/products/admob/understanding-account-suspensions-due-invalid-traffic/)
- Um blog de terceiros (apsteq.com) afirma terminação permanente por cliques acidentais; **não verificado** e não deve ser tratado como fonte. — [apsteq.com](https://apsteq.com/blog/admob-test-ads/)
- Anedótico (fórum, data não verificada): aviso para não testar anúncios reais no próprio dispositivo. — [AppInventor AdMob thread](https://community.appinventor.mit.edu/t/outdated-free-admob-extension-add-different-types-of-admob-ads-in-your-application/45216/102)

### Inferences
- Mostrar anúncios reais no telemóvel do dono sem estar registado como dispositivo de teste, e nunca clicar, é a prática segura; coerente com a regra do projeto de não aconselhar cliques nos anúncios próprios.

### Gaps
- Sem relatos pessoais concretos (com datas e URL) de contas desativadas por este motivo; não consegui aceder a r/admob nem a Stack Overflow.

## Contacto com o suporte: canais, tempos de resposta, opções atuais

### Takeaway
A via oficial é o fluxo "Contact us" no fim das páginas de ajuda do AdMob (formulário guiado, resposta por email em ~2 dias úteis); para problemas do SDK há formulário próprio; a comunidade AdMob e o Google Group do SDK são os canais públicos. Não encontrei relatos datados de 2024-2026 de contactos bem-sucedidos para problemas de estado de app.

### Cited Findings
- Oficial (via resumo): fluxo "Contact us" → descrever o problema, escolher categoria, ver sugestões, depois "Next step" e escolher opção de contacto disponível; evitar a categoria "Other" (pode atrasar). Resposta por email: objetivo de 2 dias úteis (mais em feriados). — [AdMob contact us](https://support.google.com/admob/answer/9948073?hl=en-GB)
- Oficial (via resumo): formulário separado para problemas do SDK (Publisher ID, package name, Ad Unit ID; anexos até 20 MB, logs/capturas). — [Contact us GMA SDK](https://support.google.com/admob/contact/contact_us_gma_sdk)
- Oficial (via resumo): fórum de comunidade AdMob com Product Experts. — [AdMob contact us](https://support.google.com/admob/answer/9948073?hl=en-GB)
- Um site comparador (cuspera.com) diz que há chat, telefone e 24/7; contradiz a página oficial e **não está verificado**. — [cuspera.com](https://www.cuspera.com/compare/google-admob-vs-medianet/401/5311)
- Anedótico: um blog afirma que a equipa AdMob ajuda via fórum Google Mobile Ads SDK; sem data nem URL do caso confirmado. — resumo de pesquisa para [Google Group wJp5_l5Ivpk](https://groups.google.com/g/google-admob-ads-sdk/c/wJp5_l5Ivpk)
- Anedótico: a Thunkable aconselha contactar o suporte com ID da app e package name se nada mudar após espera razoável. — [Thunkable](https://community.thunkable.com/t/solved-curious-about-how-long-will-it-take-to-get-admob-reviewed/539419)
- Oficial (via resumo): "Wait one week before seeking additional help" para problemas de app-ads.txt. — [app-ads.txt](https://support.google.com/admob/answer/9363762)

### Inferences
- Contactar o suporte só faz sentido depois de pagamento verificado e app-ads.txt/loja tratados, senão a resposta provável é "ligue a app a uma loja suportada".

### Gaps
- Tempos de resposta reais e canais que funcionaram em 2024-2026: nenhum relato obtido. Se existe chat/telefone para pequenos publishers hoje: não confirmado.

## Lojas alternativas (Xiaomi GetApps, Samsung, Aptoide, OPPO) e aprovação AdMob

### Takeaway
Segundo a ajuda oficial (via resumo), o AdMob suporta como lojas de terceiros Android: Amazon Appstore, OPPO App Market, Samsung Galaxy Store, VIVO App Store e Xiaomi GetApps. Aptoide e Huawei AppGallery não aparecem na lista. Não encontrei relatos de programadores sobre aprovação via estas lojas.

### Cited Findings
- Oficial (via resumo): lojas suportadas = Amazon Appstore, OPPO App Market, Samsung Galaxy Store, VIVO App Store, Xiaomi GetApps; apps de Google Play têm de ser públicas (não se ligam apps privadas). — [Supported app stores](https://support.google.com/admob/answer/9989980?hl=en), [Link apps to stores](https://support.google.com/admob/answer/9493252?hl=en)
- Oficial (via resumo): apps só em lojas não suportadas não podem ser revistas e têm "limited ad serving". — [Supported app stores](https://support.google.com/admob/answer/9989980?hl=en)
- Anedótico (Kodular, não é AdMob): relato de que em apps publicadas na Amazon e outros canais não-Play "nothing works and no ads load" porque o sistema de verificação da Kodular só dispara para instalações Play Store. Aplica-se à Kodular, não necessariamente a apps nativas. — [Kodular Admob Approval System](https://community.kodular.io/t/admob-approval-system/22210)
- Um fio no fórum russo trata de retirar apps do GetApps; irrelevante para aprovação AdMob. — [qna.habr.com/q/907509](https://qna.habr.com/q/907509)

### Inferences
- Das lojas pedidas, GetApps, Samsung e OPPO estão oficialmente na lista; Aptoide não. Se a Play Store não for opção, uma dessas três seria a via de ligação mais plausível, mas a existência de relatos de sucesso não foi encontrada. Requisitos de cada loja (conta de programador, verificação, mercado Portugal) não foram pesquisados aqui.

### Gaps
- Nenhum relato de programador (2024-2026) sobre aprovação AdMob depois de publicar em GetApps, Samsung Galaxy Store, OPPO ou Aptoide.
- Não verifiquei na fonte a lista de lojas suportadas (página bloqueada); confirmar em support.google.com/admob/answer/9989980 diretamente.
- Não se sabe se uma app só como APK, com conta paga verificada e app-ads.txt, chega a ser aprovada: sem evidência.
