# Google Play (conta pessoal, Portugal) e verificação de programadores Android — estado a 24-10-2026

**Nota de método (ler primeiro).** Páginas lidas diretamente (texto integral, fiáveis): `developer.android.com/developer-verification` e sub-páginas, e `developer.android.com/google/play/requirements/target-sdk`. O domínio `support.google.com` (Play Console Help) **não foi acessível** a partir deste ambiente (o proxy devolveu 403 por política; não foi contornado). Tudo o que cito de Play Console Help vem de **resumos do motor de pesquisa** que apontam para essas páginas oficiais e está marcado `[URL oficial, texto NÃO lido diretamente]`. Blogs/notícias estão marcados `[secundária]`. Convém confirmar no ecrã do Play Console antes de agir.

## 1. Taxa de registo, meios de pagamento, moeda

### Takeaway
Taxa única de 25 USD (confirmada para Play; a Google compara-a com a taxa de 25 USD da nova consola de verificação). Meios de pagamento e moeda em Portugal: só fonte indireta; cartão de débito/virtual não confirmado.

### Cited Findings
- A FAQ oficial de verificação diz: "The $25 fee for the Full Distribution account in the ADC helps cover administrative costs and investment in protecting the ecosystem, similar to Play's $25 registration fee." — [Android Developers FAQ](https://developer.android.com/developer-verification/guides/faq)
- Play Console Help "Get started" (resumo de pesquisa): taxa única de 25 USD, paga com Mastercard, Visa, American Express ou Discover (esta última só EUA); **cartões pré-pagos não são aceites**; pode ser pedido documento de identificação válido e cartão de crédito em nome legal. [URL oficial, texto NÃO lido diretamente] — [Get started with Play Console](https://support.google.com/googleplay/android-developer/answer/6112435?hl=en)
- Para a consola de verificação (ADC): "We are actively working to support multiple forms of payment... and will have more details when the console launches." — [FAQ](https://developer.android.com/developer-verification/guides/faq)

### Inferences
- Como cartões pré-pagos são excluídos (se o resumo estiver correto), um cartão virtual pré-pago/descartável provavelmente falha; um cartão de débito Visa/Mastercard normal em nome do titular é plausível mas **não confirmado**.

### Gaps
- Se cartões de débito e virtuais (ex.: MB WAY/Revolut virtual) são aceites: não confirmado em fonte oficial lida.
- Moeda cobrada em Portugal (EUR equivalente?): não encontrado.

## 2. Conta pessoal vs organização: verificação de identidade, D-U-N-S, morada pública, apps gratuitas com anúncios

### Takeaway
Conta pessoal: nome legal, morada, e-mail e telefone verificados por OTP, e documento de identificação oficial; D-U-N-S é só para organizações. Um particular sem empresa pode ter conta pessoal; a página lida sobre apps com anúncios não restringe particulares.

### Cited Findings
- Verificação de identidade (modelo da consola ADC, que reutiliza o processo de verificação): "Individuals must submit a government-issued photo ID and proof of address document as part of the verification program." Contacto: "A private email address and phone number, verified with a one-time password (OTP)." Os documentos concretos "will depend on your geographic location" (exemplos na página só dos EUA). Demora "about 10 minutes". — [Full distribution (developer.android.com)](https://developer.android.com/developer-verification/guides/full-distribution)
- D-U-N-S só para organizações: "A unique 9-digit identifier for your organization provided by Dun & Bradstreet... If your organization doesn't have one, you can get one at no cost"; site da organização verificado no Search Console. — mesma página; FAQ: "It is required if you are registering as an organization." — [FAQ](https://developer.android.com/developer-verification/guides/faq)
- Play Console Help (conta pessoal) [URL oficial, texto NÃO lido diretamente]: informação pedida = nome legal (mostrado no Google Play), morada legal (**só o país é mostrado** no Google Play), e-mail e telefone de contacto verificados por OTP, e-mail do programador (mostrado no Google Play); site opcional; se o perfil de pagamentos não estiver verificado, é exigido documento oficial de identidade. — [Verify developer identity info](https://support.google.com/googleplay/android-developer/answer/14177239?hl=en) e [10841920](https://support.google.com/googleplay/android-developer/answer/10841920?hl=en-GB)
- Contradição: um guia [secundária] diz que é exigido comprovativo de morada e mostrado e-mail público ([earndeelimited](https://sites.google.com/view/earndeelimited/tech-services/developer-account)); a página oficial (via resumo) só refere o país da morada. A página ADC lida acima, essa sim, pede comprovativo de morada.

### Inferences
- Para o dono (particular em Portugal): ID (CC/passaporte), morada, telefone, e-mail; sem D-U-N-S; o e-mail do programador ficará público.

### Gaps
- Se existe "endereço público" obrigatório (morada completa) para apps com anúncios/pagamentos em contas pessoais: o resumo diz que só o país é mostrado; a regra para apps com pagamentos (morada de comerciante) não foi confirmada.
- Verificação de dispositivo Android físico (exigida a contas pessoais novas, segundo conhecimento geral): não confirmada nas fontes lidas.
- Lista de documentos aceites para Portugal: não encontrada.

## 3. Teste fechado obrigatório para contas pessoais novas

### Takeaway
Ainda aplicável: contas pessoais criadas após 13-11-2023 precisam de teste fechado com pelo menos 12 testadores com adesão contínua de 14 dias antes de pedir acesso à produção. Organizações estão isentas.

### Cited Findings
- Resumo da pesquisa sobre a página oficial: contas criadas depois de 13 de novembro de 2023 necessitam de um teste fechado com pelo menos 12 testadores que permaneçam inscritos 14 dias seguidos; produção e pré-registo ficam desativados até cumprir; depois pede-se "acesso à produção" no Painel; se um testador sair e voltar a entrar, a contagem desse testador recomeça. [URL oficial, texto NÃO lido diretamente] — [App testing requirements for new personal developer accounts](https://support.google.com/googleplay/android-developer/answer/14151465?hl=en)
- Histórico: 20 testadores inicialmente, reduzido para 12 em dezembro de 2024 (um blog indica 11-12-2024; outro diz 2025) — [secundária] ([Choicely](https://www.choicely.com/blog/google-play-12-tester-rule), [PrimeTestLab](https://primetestlab.com/blog/google-play-changed-20-to-12-testers)) — discordam na data.
- Tempo de análise do pedido de produção: "7 dias ou menos, por vezes mais" e teste fechado 3-5 dias — [secundária] ([TestersCommunity](https://www.testerscommunity.com/blog/how-long-does-it-take-to-publish-an-app-on-google-play)). Rejeição reinicia o teste — [secundária].

### Inferences
- Prazo realista para um particular novo: cerca de 3 semanas até produção. Como o dono só distribui APK, isto só importa se avançar para a Play.

### Gaps
- Texto literal atual da página oficial, exceções oficiais e conselhos oficiais para encontrar testadores: não consegui ler a página. Encontrar testadores: só fontes secundárias (grupos de testadores; não avaliei).

## 4. Revisão, AAB, API alvo, Data safety, política de privacidade, anúncios, classificação, Educação/Governo

### Takeaway
Desde 31-08-2026 apps novas e atualizações têm de ter API alvo 36 (Android 16). As restantes exigências (AAB, Data safety, privacidade, declaração de anúncios, classificação) são standard, mas só consegui confirmar a de API alvo em fonte oficial lida.

### Cited Findings
- "New apps and app updates must target Android 16 (API level 36) or higher to be submitted to Google Play" (Starting August 31 2026); apps existentes têm de ter API 35+ para continuar disponíveis a novos utilizadores em dispositivos mais recentes; extensão possível até 1-11-2026 pedida na Play Console. Página atualizada 2026-10-16. — [Target API level requirements](https://developer.android.com/google/play/requirements/target-sdk)
- Impersonação/afiliação governamental (via resumo) [URL oficial, texto NÃO lido diretamente]: não são permitidas apps que enganem ao fazer-se passar por outra entidade ou ao sugerir relação/autorização que não existe; exemplo de violação: usar emblema nacional a sugerir afiliação governamental; política de Declarações Enganosas proíbe alegar falsamente afiliação a entidade governamental ou prestar serviços governamentais sem autorização e usar "Official" no título sem direitos. — [Impersonation](https://support.google.com/googleplay/android-developer/answer/9888374), [Government info apps](https://support.google.com/googleplay/android-developer/answer/9514050?hl=en)
- A Google verifica apps oficiais de governos e dá selo visual a apps aprovadas — [TechCrunch 2024, secundária](https://techcrunch.com/2024/05/02/google-will-now-show-labels-in-play-store-to-denote-official-government-apps)

### Inferences
- Risco para quiz não oficial do Código da Estrada: baixo se o nome/ícone/descrição não usarem emblema da República, logótipo IMT/ANSR, nem "oficial"; recomenda-se aviso claro "app não oficial, sem ligação ao IMT/Estado" na descrição e fonte das perguntas. Um aviso não corrige um ícone/título enganoso (inferência, política lida só em resumo).
- AAB: a Play exige formato AAB para apps novas (conhecimento geral; **não verificado** nesta sessão); o projeto Expo precisaria de gerar .aab além do .apk.

### Gaps
- Tempos de revisão para contas novas (oficial), requisitos AAB, Data safety, política de privacidade, declaração de anúncios, classificação de conteúdo e política "Educação/Referência": não consegui ler fontes oficiais. Não afirmo valores.

## 5. Verificação de programadores Android (distribuição fora da Play / APK)

### Takeaway
Aplicação obrigatória começa a 30-09-2026 só em Brasil, Indonésia, Singapura e Tailândia; global em 2027 (Portugal/UE sem data mais precisa). Sideloading direto de APK não é afetado "ainda"; conta de distribuição limitada gratuita (até 20 dispositivos, sem ID) existe para estudantes/hobbyists.

### Cited Findings
- Calendário oficial: março 2026 abertura a todos; agosto 2026 "Developer APIs, limited distribution accounts, and power user advanced flow launch"; 30-09-2026: "Protections begin for all users who install apps from participating stores in Brazil, Indonesia, Singapore, and Thailand on certified devices running Android 7+"; "Verification capability will be expanded globally for all apps on certified Android devices in 2027." — [Android developer verification](https://developer.android.com/developer-verification)
- Sideloading: "If you distribute your app through other stores, or if users sideload your app directly, these new verification requirements won't apply to your app yet." "The September 30, 2026 deadline only applies to the specific participating stores." Google recomenda completar a verificação antes de 2027. — [FAQ](https://developer.android.com/developer-verification/guides/faq)
- Custos: conta de distribuição completa (ADC) 25 USD; "We are waiving the fee for developers who qualify for a Limited Distribution account." Para quem distribui na Play, a conta Play serve (apps Play são registadas automaticamente: "Google Play automatically registers 99% of apps"). — [FAQ](https://developer.android.com/developer-verification/guides/faq), [página principal](https://developer.android.com/developer-verification)
- Conta de distribuição limitada: "Share apps with up to 20 devices that end-users have explicitly authorized"; "This account is free"; "you don't need to provide a government ID"; requer Conta Google com verificação em 2 passos e perfil de pagamentos Google; e-mail de contacto não público; partilha por "secure handshake process involving QR codes or links". Para estudantes/hobbyists "who wants to distribute apps to a small number of users"; sem restrição regional indicada. — [Limited distribution](https://developer.android.com/developer-verification/guides/limited-distribution)
- Registo de pacote: é preciso provar propriedade com "the APK signed with your private key"; "If you lose your signing key you won't be able to register your packages." — [Guides](https://developer.android.com/developer-verification/guides), [FAQ](https://developer.android.com/developer-verification/guides/faq)
- Utilizadores com apps não registadas ("advanced flow"): ativar modo de programador, verificação anti-coação, reinício e reautenticação, espera única de um dia + biometria/PIN, depois ativar 7 dias ou indefinidamente; aparece aviso, "Install Anyway". "if the advanced flow is disabled updates to unregistered apps will fail." ADB não é afetado. Aplica-se só a telemóveis e tablets certificados com Android 7+. — [FAQ](https://developer.android.com/developer-verification/guides/faq)
- Notícias [secundária] confirmam que o fluxo avançado está a ser lançado (XDA, Android Authority), sem data para Europa além de "2027" — [XDA](https://www.xda-developers.com/googles-controversial-advanced-flow-sideloading-rolling-out-ahead-of-stricter-developer-verification/), [Android Authority](https://www.androidauthority.com/android-sideloading-changes-timeline-3679204/) (não abri os artigos; só resumos).

### Inferences
- Em Portugal, em out/2026 um APK não registado instala-se normalmente. Em 2027 (data e âmbito UE por confirmar) utilizadores em dispositivos certificados teriam de usar o fluxo avançado (espera de 24 h) ou o dono teria de registar o pacote.
- Opção de custo zero para o dono: conta de distribuição limitada, mas só serve até 20 dispositivos — insuficiente para distribuição pública. Para distribuição ampla sem Play: conta ADC completa (25 USD + ID) ou Play Console (25 USD + ID).
- Manter e guardar a chave de assinatura do APK é crítico (perda impede registo).

### Gaps
- Se Portugal/UE entra em 2027 e em que mês: sem data oficial lida. Lista oficial de lojas participantes (âncora `#locations`) não visível na extração.
- Se a Play Console de conta pessoal gratuita sem ads precisa de registo adicional: não tratado diretamente.

## 6. Alcance: quota Google Play / Android em Portugal

### Takeaway
Android ≈ 2/3 dos telemóveis em Portugal (StatCounter); não há dado de quota da Play Store em instalações.

### Cited Findings
- StatCounter Portugal: Android ~67,3 % e iOS ~32,7 % em setembro de 2026; ~62 % Android em maio de 2026 [secundária, resumo de pesquisa, página não aberta] — [StatCounter Portugal](https://gs.statcounter.com/os-market-share/mobile/portugal)

### Inferences
- Quase todos os Android certificados em Portugal têm Play Store, por isso é o canal de maior alcance (inferência, sem fonte).

### Gaps
- Quota da Play nas instalações em Portugal: não encontrada.
