# Samsung Galaxy Store e Xiaomi GetApps como opções de publicação para um particular em Portugal (outubro de 2026)

**AVISO METODOLÓGICO (ler primeiro).** Nesta sessão o proxy de saída bloqueou (403 CONNECT, política) todos os domínios oficiais: `developer.samsung.com`, `forum.developer.samsung.com`, `seller.samsungapps.com`, `global.developer.mi.com`, `dev.mi.com`, `support.google.com` e `gs.statcounter.com` (confirmado por `curl` e pelo endpoint `/__agentproxy/status`). Nenhuma página oficial foi aberta diretamente. Tudo o que está abaixo vem de **resumos devolvidos pela ferramenta de pesquisa** sobre páginas oficiais (os excertos entre aspas são os que a pesquisa devolveu, não texto que eu tenha lido na página). Cada URL indicado é o da página que a pesquisa identificou, mas **não foi verificado por abertura direta**. Os pontos marcados "(secundário)" vêm de GitHub, blogues ou comunidade e não de documentação oficial. Nada foi inventado; o que falta está em "Gaps".

---

## 1. Samsung Galaxy Store: um particular sem empresa pode publicar uma app Android gratuita com anúncios?

### Takeaway
Em princípio **não**: as fontes oficiais indicam que publicar qualquer app Android (mesmo gratuita) exige "commercial seller status", e um aviso do Seller Portal diz que, para vender conteúdo Android, é preciso passar a "corporate Commercial Distribution Seller". A conta "private seller" serve para gestores ou para quem não distribui apps. O caminho de empresa pede DUNS (ou, segundo o guia, equivalente tipo DBA). Para o dono (particular, sem empresa) a Samsung é, com a informação encontrada, a opção mais difícil.

### Cited Findings
- Para distribuir apps gratuitas ou pagas na Galaxy Store é preciso "commercial seller status" (os gestores de uma conta estão isentos); o guia oficial diz que "A Private Seller is if you are being added as a manager account to another Seller Portal account or if you do not plan to distribute apps. A Corporate Seller is if you want to sell your apps under a company name." — [Get Started in Galaxy Store](https://developer.samsung.com/galaxy-store/prepare.html) (via resumo de pesquisa, página não aberta).
- O mesmo guia indica que o estatuto comercial é exigido para apps Android "even if your apps are free" e que a Samsung recomenda registar com um alias de organização em vez de conta individual — [Get Started in Galaxy Store](https://developer.samsung.com/galaxy-store/prepare.html) / [distribution guide](https://developer.samsung.com/galaxy/distribute/distribution-guide) (via resumo de pesquisa).
- Aviso no Seller Portal: "To sell Android content, a status change to corporate Commercial Distribution Seller is necessary. 'Request Corporate Commercial Seller' from your profile." — [Seller Portal notice](https://seller.samsungapps.com/notice/getNoticeList.as) (lista de avisos; o aviso concreto exato não foi identificado por ID). Citação transmitida via resumo.
- Texto de comunidade citando o aviso: "If you are not a Corporate Commercial Distribution Seller, existing Android content will be discontinued and you will not be able to register Android content." — [Samsung Community (EU)](https://eu.community.samsung.com/t5/mobile-apps-services/galaxy-seller-portal-app-upload/td-p/11444578) (secundário, não confirmado na página oficial). Mesmo post: vendedores de conteúdo não-Android (temas, watch faces) podem continuar como corporate ou individual, mas "all Android app free content providers must become validated commercial sellers by the Effective Date" (data não incluída no excerto).
- Resposta de Developer Relations no fórum: é preciso ser empresa registada com DUNS para ter apps Android gratuitas ou pagas; só vendedores de watch faces/temas podem ser "private seller" — [Fórum Samsung: Change to Seller Registration Requirements](https://forum.developer.samsung.com/t/change-to-seller-registration-requirements/22583) e [Request Commercial Seller Status](https://forum.developer.samsung.com/t/request-commercial-seller-status/39520) (via resumo; datas das mensagens não confirmadas).
- DUNS exigido pelo Seller Portal desde 2022; se não for possível obter DUNS no país, contactar a equipa do Seller Portal — [Fórum: DUNS questions](https://forum.developer.samsung.com/t/duns-questions/23122) (via resumo).
- Alternativa documentada no guia: "if you cannot get a D-U-N-S number, get a DBA (Doing Business As) or other documentation your country uses"; documentos em inglês (ou coreano) — [Get Started in Galaxy Store](https://developer.samsung.com/galaxy-store/prepare.html) (via resumo). Não foi possível confirmar o que a Samsung aceita em Portugal (p. ex. NIF de trabalhador independente / "Atividade Aberta" ou só empresa com DUNS).
- Pedido de estatuto comercial: conta Samsung necessária; o e-mail deve ser de domínio privado/empresa (domínios públicos como Gmail só com justificação); para sellers privados o nome tem de coincidir com o perfil e o titular da conta bancária; PayPal é o método mais fácil; verificação bancária até 10 dias úteis; aprovação "several days"; se o banco não for verificado a candidatura não é aprovada — [Seller Portal Registration guide](https://seller.samsungapps.com/guidePopup.as?numcid=0102010000&localeLanguage=en) (via resumo; algumas páginas têm mais de um ano).
- DSA: a partir de 28/05/2025 (GMT+0) todos os "app and theme corporate sellers" que oferecem apps/temas na UE têm de divulgar o número de registo comercial aos utilizadores e acrescentá-lo ao perfil do Seller Portal para continuar a submeter atualizações/novas apps na UE — [Seller Portal notice 0000009680](https://seller.samsungapps.com/notice/getNoticeDetail.as?csNoticeID=0000009680) (via resumo). A Samsung não usa a palavra "trader" nos excertos; não apareceu requisito de morada/telefone para DSA.
- Comissão/taxas: não foi encontrado nenhum valor oficial de taxa de registo ou anual, nem comissão sobre apps gratuitas/anúncios. Os termos são em [Seller Portal Terms](https://seller.samsungapps.com/terms/termsAndConditions.as) (não lidos).
- Aviso de manutenção: a autenticação DUNS para conversão a corporate esteve indisponível em 17/10/2026 — [Seller Portal notices](https://seller.samsungapps.com/notice/getNoticeList.as) (via resumo).
- (secundário) Um issue de GitHub afirma que desde 02/09/2026 a Samsung bloqueia submissões cujo binário não tenha aprovação "ADV" da Google — [GitHub micode-ai/ai-budget-assistant #500](https://github.com/micode-ai/ai-budget-assistant/issues/500). Não confirmado oficialmente; pode referir-se à verificação de programadores Android da Google. Tratar como pista a verificar, não como facto.

### Inferences
- Um particular empregado, sem atividade aberta nem DUNS, provavelmente não consegue publicar a app Android gratuita na Samsung. Se tiver (ou abrir) atividade como trabalhador independente ou empresa, o caminho seria "corporate commercial seller" com DUNS (a D&B atribui DUNS gratuito a empresas, mas isto não foi verificado aqui) ou documentação alternativa.
- A obrigação DSA de divulgar o número de registo comercial reforça que a Samsung trata o vendedor Android como entidade comercial.

### Gaps
- Texto literal dos Termos do Seller Portal sobre taxas/comissões e sobre apps gratuitas com anúncios: página não aberta.
- Documentos aceites em Portugal em substituição do DUNS (NIF, "Atividade Aberta" nas Finanças, etc.): não encontrado.
- Data de efeito e redação oficial exata do aviso "corporate Commercial Distribution Seller": não confirmada.
- Tempo de revisão de apps na Galaxy Store, requisitos de APK/AAB, política de privacidade, API alvo e política sobre apps "governamentais não oficiais": não encontrados (páginas oficiais inacessíveis; não foi pesquisado em separado).

---

## 2. Xiaomi GetApps: um particular pode registar-se e publicar?

### Takeaway
O Acordo de Programador da GetApps define "Developer" como pessoa singular ou coletiva e a distribuição é gratuita por defeito, mas pode ser cobrada uma taxa de distribuição no futuro. A documentação atual de registo que a pesquisa devolveu descreve apenas o fluxo de **empresa** (licença comercial); o fluxo de **particular** (página `/create/individual`) só aparece como página de login da Xiaomi Account e não foi possível ver as regras. Fica por confirmar se hoje um particular na UE consegue ser aprovado.

### Cited Findings
- Acordo (Secção 2.2): "Unless otherwise specified in this Agreement (as modified) or agreed separately, Xiaomi offers Developers to distribute Products or Services for free." e "A distribution service fee, as may be revised by Xiaomi at any time with notice to Developer, may be charged if later decided by Xiaomi in compliance with the conditions for Modifications in Section 13." Para cobrar utilizadores, pode usar-se GetApps Payments sob acordo separado — [Xiaomi GetApps Developer's Agreement](https://global.developer.mi.com/document?doc=cookiePolicyTitle.releaseAgreement) (via resumo de pesquisa; indexação com ~296 dias, versão atual por confirmar).
- Definição de Developer: qualquer pessoa singular ou coletiva que ofereça produtos/serviços para distribuição; o registo pode pedir nome, número de ID, localização, contacto e dados de faturação/banco (sobretudo com compras na app) — mesma página do Acordo (via resumo).
- Acordo suplementar "GetApps Distribution Service Agreement" (atualizado a 23/07/2024), que prevalece em caso de conflito — [dev.mi.com pId=2187](https://dev.mi.com/xiaomihyperos/documentation/detail?pId=2187) (via resumo). Página de termos relacionada indica que, se o país de distribuição for UE/UK, o programador contrata com "Xiaomi Technology Netherlands B.V." — [Technology Terms of Service](https://dev.mi.com/xiaomihyperos/documentation/detail?pId=1699) (via resumo; é de outro produto, Mi Push, logo extrapolação a confirmar para a GetApps).
- Registo atual documentado (empresa): Xiaomi Account + formulário de programador; carregar licença comercial/certificado de registo, nome oficial e número de ID da empresa, contacto de representante; revisão estimada 1-2 dias úteis; ficheiros PNG/JPG/JPEG até 4 MB; nome tem de coincidir com o registo oficial — [Create an account](https://global.developer.mi.com/document?doc=accountRegistration.becomeADeveloper) (via resumo).
- Fluxo individual: guia antigo (não atual) pede categoria "Mobile Apps" e documento de identidade válido (cartão de cidadão, passaporte, segurança social ou carta de condução) com número — [How to register Mi developer account](http://en.dev.mi.com/doc/p=12/index.html) (legado, via resumo). A página [global.developer.mi.com/create/individual](https://global.developer.mi.com/create/individual) devolveu apenas a página de login da Xiaomi Account nos resultados de pesquisa. A documentação inclui uma página "Converting Your Developer Identity" (conteúdo não lido).
- Contacto de suporte indicado: overseas-dev@xiaomi.com — [Customer service](https://global.developer.mi.com/support?type=customer_service) (via resumo).
- Apps financeiras exigem categoria "Finance" e carta de declaração assinada — [Special Requirements for Financial Apps](https://global.developer.mi.com/document?doc=appReview.letterOfCommitmentTemplate) (via resumo). Não aplicável à app do dono.
- Tempo de revisão: o único valor encontrado, "1-2 dias", refere-se a campanhas pagas de recomendação (OOBE), não à submissão normal — [Xiaomi OOBE doc](https://global.e.mi.com/doc/resources/special_style_oobe.html) (não representativo). Programadores no Habr queixam-se de revisões repetidas e de poucos downloads (~150/dia vs ~10 000 na Google Play) — [Habr](https://habr.com/en/articles/509806) (secundário, anedótico).

### Inferences
- A existência de "natural person" no Acordo e de um fluxo individual legado sugere que particulares são, em teoria, aceites, mas a documentação atual só mostra o ramo empresa; é prudente tentar o registo (sem custo) e confirmar com overseas-dev@xiaomi.com antes de investir tempo.
- O risco regulatório DSA (estatuto de "trader" na UE) para a GetApps não foi encontrado; não há evidência em ambas as direções.

### Gaps
- Conteúdo real de `/create/individual`, tipos de conta atuais, documentos exigidos a particulares, países aceites e se Portugal/UE está incluído: não obtido.
- Requisitos de APK/AAB, política de privacidade, API alvo, diretrizes de revisão (`appReview.reviewGuidelines`) e política sobre apps governamentais não oficiais: não obtidos.
- Se a taxa de distribuição já foi ativada: sem informação (o resumo não encontrou notícias de cobrança).
- Estatuto DSA/"trader" da Xiaomi GetApps: nada encontrado.

---

## 3. Alcance real em Portugal (quota de mercado e lojas pré-instaladas)

### Takeaway
Samsung (~25-31%) e Xiaomi (~11-13%) somam cerca de 40% dos dispositivos móveis em Portugal segundo a StatCounter, mas os dados não indicam quantos utilizam Galaxy Store/GetApps para instalar apps de terceiros; nas ROMs EEA/Global a Google Play está presente e não há prova de que estas lojas tenham uso relevante na UE.

### Cited Findings
- StatCounter Portugal (resumos de pesquisa, números por categoria): "mobile+tablet+console" jun/2026: Apple 36,18%, Samsung 30,47%, Xiaomi 13%; "mobile device" jul/2026: Apple 34,01%, Samsung 25,03%, Xiaomi 11,58%, Unknown 19,77%; ago/2026 (categoria mobile/tablet): Apple 37,37%, Samsung 31,27%, Xiaomi 12,33% — [StatCounter PT](https://gs.statcounter.com/vendor-market-share/mobile/portugal) e [mobile-tablet](https://gs.statcounter.com/vendor-market-share/mobile-tablet/portugal) (página não aberta; valores incluem iPhones, logo a quota Android é menor).
- Categoria "mob" de jul/2026 mostra Unknown 65,35%, Apple 14,8%, Samsung 10,79%, Xiaomi 4,89% — mesma fonte; definição de categoria incerta, não usar como estimativa principal.
- Xiaomi: desde 2020 as ROMs Global e EEA trazem Google Phone e Messages em vez de apps MIUI — [GSMArena](https://www.gsmarena.com/xiaomi_will_preinstall_googles_phone_and_messages_apps_on_global_devices-news-40859.php).
- (secundário) Um blogue de 2026 diz que a ROM Global inclui Google Play e apps Xiaomi como GetApps/Mi Apps — [droidrooter](https://www.droidrooter.com/blog/xiaomi-eu-rom-vs-global-vs-china/). Nada oficial da Xiaomi sobre o papel da GetApps nas ROMs EEA em 2026.
- Samsung: não foi encontrada fonte sobre quota de uso da Galaxy Store na UE; sabe-se que os telemóveis Galaxy trazem a Galaxy Store pré-instalada (conhecimento geral, não verificado nesta sessão).

### Inferences
- A quota de Android em Portugal é a de Samsung+Xiaomi relativamente ao total Android; como a StatCounter inclui Apple, a fração dos utilizadores Android que usariam estas lojas é desconhecida.
- Dado o dado anedótico do Habr (GetApps ~1,5% dos downloads da Google Play) e a ausência de dados da Samsung, esperar tráfego marginal.

### Gaps
- Utilização efetiva (instalações, MAU) de Galaxy Store e GetApps na UE/Portugal: não encontrado.
- Quota Android-only em Portugal por fabricante: não obtida.

---

## 4. AdMob: lojas suportadas e relatos de aprovação

### Takeaway
A ajuda do AdMob lista Samsung Galaxy Store e Xiaomi GetApps entre as lojas Android de terceiros suportadas; apps apenas em lojas não suportadas não são revistas e têm entrega limitada. Não foi encontrado nenhum relato de programador a confirmar aprovação do AdMob a partir de uma destas lojas.

### Cited Findings
- Lojas de terceiros suportadas: Amazon Appstore, OPPO App Market, Samsung Galaxy Store, VIVO App Store, Xiaomi GetApps; a app deve estar listada publicamente numa loja suportada; apps só em lojas não suportadas "não podem ser revistas" e têm entrega limitada — [AdMob Help 9989980](https://support.google.com/admob/answer/9989980?hl=en) (via resumo; página sem data visível).
- Os nomes de pacote têm de coincidir entre lojas, pois afetam revisão da app e entrega de anúncios; o ID da Amazon pode diferir — [AdMob Help 9972781](https://support.google.com/admob/answer/9972781?hl=en) (via resumo).
- Versão alemã da ajuda: apps listadas apenas numa loja de terceiros podem, atualmente, dispensar a verificação app-ads.txt — [AdMob Help 10037806 (de)](https://support.google.com/admob/answer/10037806?hl=de) (via resumo; não confirmado em inglês).
- Relatos de programadores: apenas casos genéricos de falha de verificação app-ads.txt em apps publicadas — [Apple Developer Forums](https://developer.apple.com/forums/thread/816098) (secundário, não relacionado com Samsung/Xiaomi).

### Inferences
- Ter a app listada na Galaxy Store ou na GetApps seria suficiente para satisfazer a regra de "loja suportada" do AdMob, mas não substitui nada para o dono: o requisito só ajuda se a app não estiver na Google Play.

### Gaps
- Nenhum relato fiável (fórum, blogue) de AdMob a aprovar uma app listada apenas em Galaxy Store ou GetApps.
- Confirmação em inglês da dispensa de app-ads.txt.

---

## 5. Efeito em apps também distribuídas por APK (mesmo package name)

### Takeaway
O AdMob exige o mesmo nome de pacote em todas as lojas, logo a app do dono (APK/Play/outras) deve manter o mesmo `applicationId` ao entrar nestas lojas. Se a conta de loja ficar associada a esse pacote, a loja pode reivindicar o nome naquela loja; a app já distribuída por APK não é alterada, mas atualizações têm de usar a mesma assinatura.

### Cited Findings
- AdMob: "Package names must match across stores" (paráfrase do resumo, ver acima) — [AdMob Help 9972781](https://support.google.com/admob/answer/9972781?hl=en).
- Sem fonte oficial encontrada sobre regras de package name/assinatura específicas da Galaxy Store ou GetApps.

### Inferences
- Para APK + loja, usar a mesma chave de assinatura permite atualizações sem desinstalar; isto é prática Android geral (não verificado nas docs destas lojas).

### Gaps
- Regras específicas de unicidade de package name e de assinatura em Galaxy Store/GetApps: não encontradas.

---

## 6. Resumo comparativo

### Takeaway
Nenhuma das duas lojas está confirmada como viável hoje para um particular sem empresa; a Xiaomi parece mais permissiva em teoria (pessoa singular, gratuito), a Samsung é explicitamente restritiva (Android = corporate + DUNS). Ambas estão listadas como lojas suportadas pelo AdMob.

| Aspeto | Samsung Galaxy Store | Xiaomi GetApps |
|---|---|---|
| Taxa de registo/anual | Não encontrada (Termos não lidos) | Distribuição gratuita por defeito (Acordo §2.2) |
| Comissão em app grátis/anúncios | Não encontrada | Nenhuma por defeito; taxa futura possível (§2.2/§13) |
| Particular pode registar? | Só "private seller" (gestores/não distribuem; temas/watch faces). Android exige "corporate commercial seller" | Acordo admite pessoa singular; fluxo individual atual não confirmado |
| Documentos | Conta Samsung, DUNS (ou DBA/equivalente), banco/PayPal, docs em inglês | Empresa: licença comercial; individual (legado): documento de identidade |
| DSA (UE) | Aviso 28/05/2025: nº de registo comercial de sellers corporate divulgado | Não encontrado |
| Revisão de conta | "Several days"; banco até 10 dias úteis | 1-2 dias úteis (empresa) |
| Revisão de app / APK-AAB / API alvo / políticas | Não obtido | Não obtido |
| Pré-instalada em PT | Galaxy Store em Samsung (não verificado nesta sessão) | GetApps possivelmente em ROM Global (secundário); EEA com Google Play |
| Quota PT (StatCounter, todos os dispositivos) | ~25-31% | ~11-13% |
| AdMob loja suportada | Sim | Sim |

### Inferences
- Para o objetivo do dono (app gratuita com anúncios, custo zero, sem empresa), a Samsung exigiria atividade comercial formal; a Xiaomi merece um teste de registo gratuito mas com retorno esperado baixo.

### Gaps
- Falta confirmar tudo o que depende de páginas oficiais inacessíveis (ver aviso no topo): recomenda-se reabrir estas páginas com acesso de rede ao domínio, ou perguntar ao suporte (Samsung: Seller Portal > Help > Contact us; Xiaomi: overseas-dev@xiaomi.com).
