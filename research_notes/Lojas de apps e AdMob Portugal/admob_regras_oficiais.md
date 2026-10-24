# Regras oficiais do AdMob: aprovação de apps ("Getting ready"/"Em preparação"), lojas suportadas, apps sem loja (pesquisa de 2026-10-24)

## AVISO METODOLÓGICO (ler primeiro)
- O acesso direto a `support.google.com` e `developers.google.com` estava BLOQUEADO nesta sessão (WebFetch: ENOTFOUND; curl: CONNECT 403 do proxy de saída). Nenhuma página oficial foi lida diretamente.
- Tudo abaixo vem de resumos devolvidos pela ferramenta WebSearch sobre páginas oficiais. As frases entre aspas são as que o resumo apresentou como citações, MAS não foram confirmadas palavra a palavra na página original. Marcar como "citação via resumo de pesquisa". Recomenda-se uma verificação manual das URLs (o dono tem acesso no browser).
- Quase todas as páginas trazem metadados de idade (p. ex. 10564477 "cerca de 1700 dias", ou seja, ~2022; outras 1200 a 2600 dias). Datas de última atualização exatas: NÃO encontradas. Nada foi confirmado como "em vigor em outubro 2026" por texto datado; apenas a página 14538460 e a 15948559 parecem recentes (2025).
- Texto do tooltip "Getting ready until account verified": NÃO encontrado (ver secção 4).

## 1. O que o AdMob exige para uma app Android sair de "Getting ready" e servir anúncios completos; o que significam "Getting ready" e "limited ad serving"

### Takeaway
Segundo a documentação oficial, para servir anúncios sem limites a app tem de (a) estar listada publicamente numa loja suportada, (b) estar ligada a essa loja na conta AdMob, (c) passar a revisão "app readiness" (normalmente 2-3 dias), e (d) a conta tem de estar verificada (dados de pagamento introduzidos). "Getting ready" = a Google está a rever a app (e, em contas novas, a aguardar a verificação da conta). Uma app sem listagem em loja suportada não pode ser revista e fica com "limited ad serving".

### Cited Findings
- Estados do "About app readiness" (citação via resumo): "Requires review: Your app hasn't been reviewed yet. To have it reviewed, you must link your app to a supported app store." / "Getting ready: We're reviewing your app. This usually takes a couple of days, but in some cases we may require more time to evaluate your app." / "Ready: Your app is ready to serve ads. We've either lifted the ad serving limits put in place during the review or confirmed readiness for ads." / "Needs attention: You need to fix some issues before your app is ready to show ads." (detalhes no Policy center) — [About app readiness](https://support.google.com/admob/answer/10564477?hl=en)
- Contas novas (citação via resumo): "If you recently signed up for AdMob, your apps will remain in the 'Getting Ready' status until your account is verified. Enter your payment details to have your account verified." — [About app readiness](https://support.google.com/admob/answer/10564477?hl=en)
- Apps em contas reativadas ficam "Request review"/"Requires review" até nova revisão — [About app readiness](https://support.google.com/admob/answer/10564477?hl=en)
- Revisão automática: "Your app will be automatically reviewed once it's listed in a store that AdMob supports and set up as a published app in AdMob." — [Set up an app in AdMob](https://support.google.com/admob/answer/9989980?hl=en) (citação via resumo)
- "In order for your app to be reviewed and approved by AdMob, you'll need to list it in a store that AdMob supports and link your app to the app store in your AdMob account." Apps não publicadas "will receive limited ad serving until it's approved during AdMob's readiness process." — [Set up an app in AdMob](https://support.google.com/admob/answer/9989980?hl=en) (citação via resumo)
- Lojas não suportadas: "apps listed exclusively in unsupported stores can't be reviewed and will receive limited ad serving" — [Link your app to an app store](https://support.google.com/admob/answer/10037806?hl=en) (via resumo)
- Getting started guide: sem dados de pagamento "Your AdMob account is not ready for monetization, you won't be able to show ads, and your app won't be reviewed for monetization eligibility until you've added your payment information." — [Getting started guide](https://support.google.com/admob/answer/15948559?hl=en) (via resumo)
- Prazo: revisão "usually takes a couple of days" (resumos falam em 2-3 dias); em contas novas a verificação da conta "usually takes up to 24 hours, but in rare cases can take up to 2 weeks" — [Sign up for AdMob](https://support.google.com/admob/answer/7356219?hl=en) (via resumo)
- API (enum de estado): `ACTION_REQUIRED` (precisa de ação do utilizador), `IN_REVIEW` (revisão pendente), `APPROVED` ("approved and can serve ads") — [AdMob API accounts.apps](https://developers.google.com/admob/api/reference/rest/v1beta/accounts.apps) (via resumo)
- Fórum Google (não oficial, comunitário): utilizador com "Getting ready" prolongado, dados de pagamento introduzidos mas sem botão de verificar — [Google Group](https://groups.google.com/g/google-admob-ads-sdk/c/wJp5_l5Ivpk). Guia de terceiros (NÃO oficial): [WebInto](https://webinto.app/blogs/get-admob-approval-new-app)
- "Limited ad serving" para tráfego inválido (outro mecanismo, não o da app readiness): aplica-se só à AdMob Network, não afeta mediação de terceiros, house ads nem campanhas diretas; normalmente "less than 30 days" — [Ad serving limits](https://support.google.com/admob/answer/9493252?hl=en) (via resumo)

### Inferences
- Para a app do dono (APK sem loja): a app não tem como ser "revista" e ficará, na melhor das hipóteses, com serving limitado ou em "Requires review"/"Getting ready" indefinidamente. Dados de pagamento do tipo Individual preenchidos são condição necessária mas não suficiente.
- A página não define quantitativamente "limited ad serving" para apps (ver Gaps): se aparecem anúncios reais, com que preenchimento, não está especificado nos resumos obtidos. A frase "lifted the ad serving limits put in place during the review" sugere que durante a revisão há limites impostos, mas não diz quais.

### Gaps
- Definição oficial exata de "limited ad serving" para apps em readiness (se há anúncios reais, se só demanda reduzida): NÃO encontrada.
- Texto verbatim e data de atualização de 10564477 / 9989980 / 10037806: não confirmados (acesso bloqueado).
- Versão pt-PT das páginas ("Em preparação"): não consultada. (Existe versão pt-BR de 10037806: "Vincular seu app a uma app store".)

## 2. Lojas suportadas para Android (lista atual); Google Play obrigatória?; Amazon após o encerramento

### Takeaway
A lista oficial (conforme resumos) para Android: Google Play + Amazon Appstore, OPPO App Market, Samsung Galaxy Store, VIVO App Store, Xiaomi GetApps. Google Play não é a única, mas a app tem de estar "publicly available" numa loja suportada. O Amazon Appstore ainda consta na lista nos resumos, apesar do encerramento da loja Android em 20 ago 2025; não foi encontrada declaração oficial do AdMob a retirá-lo.

### Cited Findings
- "AdMob supports the Amazon Appstore, OPPO App Market, Samsung Galaxy Store, VIVO App Store, and Xiaomi GetApps" (além de Google Play e Apple App Store) — [Set up an app in AdMob](https://support.google.com/admob/answer/9989980?hl=en) e [Link your app to an app store](https://support.google.com/admob/answer/10037806?hl=en) (via resumo)
- "all Android apps must be publicly available in a supported store in order to link to AdMob"; o nome do pacote é sensível a maiúsculas e tem de corresponder exatamente ao da loja; após listar a app pode demorar 24 a 48 h até poder ligar; é possível adicionar lojas adicionais depois — [Link your app to an app store](https://support.google.com/admob/answer/10037806?hl=en) (via resumo)
- Há página "Unlink your app from app stores" — [13683020](https://support.google.com/admob/answer/13683020?hl=en); a API v1beta diz que definir o appStoreId é irreversível e uma app ligada não pode ser desligada — [API accounts.apps](https://developers.google.com/admob/api/reference/rest/v1beta/accounts.apps) (via resumo; há aparente contradição entre a API e a existência da página "Unlink", possivelmente por a página da API ser v1beta antiga; não resolvido)
- API: `LinkedAppInfo.appStoreId` = ID da loja (para Google Play o application ID, p.ex. "com.example.myapp"; para Apple o ID numérico); `ManualAppInfo` = apps não ligadas a uma loja, informação mantém-se após ligação — [API accounts.apps](https://developers.google.com/admob/api/reference/rest/v1beta/accounts.apps) (via resumo). Enum específico "AppLinkedStore"/lista de plataformas de loja na API: NÃO encontrado nos resumos.
- Amazon Appstore para Android encerrou a 20 de agosto de 2025 (anunciado fev 2025); mantém-se em dispositivos Amazon (Fire) — [TechCrunch](https://techcrunch.com/2025/02/20/amazon-is-shutting-down-its-app-store-on-android/) e [MediaPost](https://www.mediapost.com/publications/article/408264/) (imprensa, não oficial AdMob)

### Inferences
- Como uma app Android só pode ser "publicly available" nestas lojas, e a Amazon já não distribui para telemóveis Android, a ligação à Amazon é na prática inútil para uma app de telemóvel (o dono já a limpou). Mesmo que o AdMob ainda a liste, a app não existe lá de forma verificável.
- As outras lojas (OPPO, Samsung, VIVO, Xiaomi) são orientadas a fabricantes/regiões; a disponibilidade para um indivíduo em Portugal não foi pesquisada (ver Gaps).

### Gaps
- Confirmação de que a lista atual (out 2026) ainda inclui Amazon: NÃO confirmada (páginas não lidas diretamente; sem data).
- Nome exato do enum da API e lista completa: NÃO encontrado.
- Elegibilidade de programadores individuais europeus nas lojas OPPO/Samsung/VIVO/Xiaomi: fora do âmbito / não pesquisado.

## 3. Forma oficial de usar o AdMob para apps não publicadas ("Unpublished")

### Takeaway
Sim: o AdMob permite adicionar a app como "Unpublished" (Apps > Add app > plataforma > "Is the app listed on a supported app store?" = No). Serve para configurar e testar antes do lançamento ou para apps em lojas não suportadas, mas a app fica com serving limitado até estar ligada a uma loja suportada e aprovada. Não foi encontrado limite temporal oficial para este estado.

### Cited Findings
- "Unpublished: Choose this option if your app isn't listed in an app store yet, or if you still need to set up and test an unpublished app. You can also choose this option if your app is in a store that AdMob doesn't support." — [Getting started guide](https://support.google.com/admob/answer/15948559?hl=en) (via resumo)
- "AdMob allows you to add an app that hasn't been listed in an app store yet, or is listed on a third-party store that AdMob doesn't support." — [Set up an app in AdMob](https://support.google.com/admob/answer/9989980?hl=en) (via resumo)
- "Before you can fully serve ads, your app must be linked to a supported store and undergo an app readiness review." Para linkar depois: pode "come back and link it to a supported store later" (o App ID mantém-se; esta última parte vem de tutorial de terceiros: [Undrads](https://www.undrads.com/blogs/how-to-set-up-admob-for-the-first-time)) — [Set up an app in AdMob](https://support.google.com/admob/answer/9989980?hl=en) (via resumo)
- Anúncios de teste: usar sempre ads de teste/dispositivos de teste durante o desenvolvimento ("Not using test ads during development" listado como causa de limite por tráfego inválido) — [Ad serving limits](https://support.google.com/admob/answer/9493252?hl=en)
- Ad Manager (páginas partilhadas) descreve o mesmo padrão "No" na lista de loja — [Set up an app in Google Ad Manager](https://support.google.com/admanager/answer/6316896?hl=en) (via resumo)

### Inferences
- A única via oficial sem loja é "Unpublished"; ela não prevê passagem a "Ready" sem listagem numa loja suportada. Para o dono, servir anúncios completos num APK sideloaded parece não ser suportado pelas regras oficiais lidas (a confirmar no texto original).
- Se vierem a aparecer anúncios reais durante o estado "Unpublished"/limitado, não está documentado em que volume; testar com anúncios de teste é o caminho seguro.

### Gaps
- Duração máxima do estado Unpublished/limitado: NÃO encontrada.
- Texto oficial sobre se anúncios REAIS (não de teste) são servidos a apps unpublished: formulado só como "limited ad serving" - detalhe não encontrado.
- Rótulo exato do botão no ecrã do dono (o resumo não encontrou "Add app manually" em páginas Google; a expressão só surgiu em terceiros).

## 4. Verificação da conta: pagamentos, identidade, PIN, limiares, prazos; o que bloqueia anúncios vs só pagamentos; tooltip

### Takeaway
Introduzir os dados de pagamento (perfil Individual/Organização, nome, morada, telefone) é o que verifica a conta e tira as apps de "Getting ready" em contas novas (normalmente até 24 h, raramente até 2 semanas). A verificação de identidade e o PIN só são pedidos ao atingir limiares de ganhos; a falta de verificação de identidade em 45 dias PARA os anúncios; informação fiscal afeta pagamentos (retenção), não o serviço de anúncios.

### Cited Findings
- 12835021 é a página "Enter your payment details": escolhe-se conta Individual ou Organização (não pode ser alterada depois), introduzem-se nome, morada postal e telefone; a morada recebe o PIN — [Enter your payment details](https://support.google.com/admob/answer/12835021?hl=en) (via resumo). Texto do tooltip "Getting ready until account verified": NÃO encontrado (a pesquisa não devolveu o tooltip). O texto mais próximo está em 10564477 (ver secção 1).
- Identidade: "you need to verify your identity to keep showing ads and receiving payments. You get 45 days from the date Google first asks you to verify your identity to submit the documents. If you haven't finished after 45 days, ads stop showing" — [Verify your identity](https://support.google.com/admob/answer/13030080?hl=en) (via resumo). Caminho: Payments > Verification > Identity Verification > Verify now; documentos oficiais (passaporte, carta de condução, cartão de identidade) compatíveis com o país do perfil de pagamentos.
- Re-revisão: se falhar a verificação de identidade numa re-revisão, os anúncios param e os ganhos ficam retidos — [Verify your identity](https://support.google.com/admob/answer/13030080?hl=en) (via resumo)
- Limiares (tabela, USD): verificação de identidade/morada a $10 (a tabela mostra "$0 / $10" na coluna de verificação), pagamento $100 — [Payment thresholds](https://support.google.com/admob/answer/2772208?hl=en) (via resumo; página antiga). A identidade é normalmente pedida quando os ganhos atingem o limiar de verificação, que varia por moeda.
- PIN: 6 dígitos, enviado por correio internacional para a morada do perfil de pagamentos; pode demorar 2-3 semanas; 4 meses desde a geração para o introduzir; 3 tentativas erradas = falha de verificação de morada e "your account will stop showing ads" (pedir novo PIN reinicia) — [Address verification (PIN) overview](https://support.google.com/admob/answer/2772302?hl=en) (via resumo; página antiga). O PIN só é enviado depois de a identidade estar verificada (quando esta é pedida).
- Informação fiscal: não é obrigatória para todos os editores; tem de ser entregue antes do dia 20 do mês para receber o pagamento desse mês; é motivo de "payment hold" — [Pay taxes](https://support.google.com/admob/answer/2772620?hl=en), [Non-US tax info](https://support.google.com/admob/answer/14135099?hl=en) (via resumo)
- Se AdMob e Play Console partilham o perfil de pagamentos, pode ser exigida verificação separada de programador (Google Play) — [Verify your identity](https://support.google.com/admob/answer/13030080?hl=en) (via resumo)
- "Steps to getting paid" lista a ordem identidade, PIN, forma de pagamento — [Steps to getting paid](https://support.google.com/admob/checklist/2998383?hl=en)

### Inferences
- Para o dono: dados de pagamento já preenchidos deviam, segundo a regra de conta nova, ter iniciado a verificação da conta (até 24 h / 2 semanas). Se continuar "Getting ready" após esse prazo, a causa provável é a falta de loja ligada (secção 1), não a conta. Sem tráfego e ganhos, não deve haver pedido de identidade/PIN nem prazo de 45 dias; o cartão e a informação fiscal vazia afetam pagamentos, não a revisão da app (inferência, a confirmar).
- Bloqueiam anúncios: conta por verificar (dados de pagamento), identidade não verificada em 45 dias, falha do PIN. Bloqueiam só pagamentos: informação fiscal em falta, limiar de $100, verificação bancária.

### Gaps
- Tooltip exato ("Getting ready until account verified"): NÃO encontrado.
- Se 45 dias também se aplicam ao PIN de 4 meses ou a outro contador, e a ordem exata de prompts em Portugal: não confirmados.
- Texto verbatim de 3006274 e 9948073 sobre verificação: 3006274 não aparece nos resultados; 9948073 só foi visto para suporte.

## 5. app-ads.txt: regras oficiais

### Takeaway
A verificação com app-ads.txt é exigida para apps novas desde janeiro de 2025 (segundo o resumo de 14538460) mas, segundo a mesma página, apps listadas apenas em lojas de terceiros (não Google Play/App Store) não são, por agora, obrigadas. O ficheiro tem de estar na raiz do domínio do site do programador indicado na ficha da Google Play/App Store; sem ficha de loja não há como o crawler descobrir o site.

### Cited Findings
- "an app can't fully serve ads until it's verified with an app-ads.txt file and then passes the app readiness review. After we verify that you're authorized to monetize the app, we'll review your app as part of our app readiness process." — [Verify your app with app-ads.txt](https://support.google.com/admob/answer/14538460?hl=en) (via resumo)
- "Starting January 2025, you will be required to verify new apps that you set up in AdMob with an app-ads.txt file." e "eventually all AdMob publishers will be required to verify their apps" — idem (via resumo)
- "If your app is only listed in a third-party store (not in the Play Store or App Store), you won't currently be required to verify your app with app-ads.txt." — idem (via resumo; formulação "currently" sem data; o sentido para apps sem qualquer loja não é explícito)
- Passos: configurar o ficheiro, abrir definições da app > Verify app > "Check for updates"; pode demorar até 24 h — idem
- Descoberta: o site do programador tem de constar na ficha da Google Play (contactos) ou na App Store (marketing URL); o crawler usa só o hostname, tenta `https://<hostname>/app-ads.txt` e depois http; sobe no máximo um nível de subdomínio e ignora "www." e "m."; começa no domínio raiz, que tem de devolver ou redirecionar para o ficheiro; HTTP 200; robots.txt com `User-agent: Google-adstxt` / `Disallow:` para permitir; alterações na Play detetadas em até 24 h, na App Store até 7 dias — [Set up an app-ads.txt file](https://support.google.com/admob/answer/9363762?hl=en), [Ensure app-ads.txt can be crawled](https://support.google.com/admob/answer/9679128?hl=en), [App-ads.txt FAQ](https://support.google.com/admob/answer/9675354?hl=en) (via resumo)
- "Without that link in the store listing, AdMob and other ad platforms can't establish your app's ownership." — [Verify your app with app-ads.txt](https://support.google.com/admob/answer/14538460?hl=en) (via resumo)

### Inferences
- Um site em GitHub Pages (`joao1295rodrigues.github.io/codigo-estrada`) está num subdomínio de github.io e não numa raiz própria; o crawler pede a raiz do hostname (`joao1295rodrigues.github.io/app-ads.txt`), não o caminho `/codigo-estrada/`. Teoricamente só funcionaria colocando o ficheiro num repositório `joao1295rodrigues.github.io`, mas sem ficha de loja o AdMob não tem como ligar a app a esse site. Inferência minha, não afirmação oficial.

### Gaps
- Se app-ads.txt é exigido ou possível para apps sem qualquer ficha de loja: NÃO encontrado explicitamente.
- Data de entrada em vigor para todos os editores: não encontrada.

## 6. Políticas: APK sideloaded/não lançado, dispositivos de teste, tráfego inválido

### Takeaway
Não foi encontrada qualquer política AdMob que proíba apps sideloaded em si, mas o AdMob liga o serviço completo a apps listadas em lojas suportadas. É proibido clicar nos próprios anúncios; devem usar-se anúncios de teste/dispositivos de teste.

### Cited Findings
- Publishers não podem clicar nos seus próprios anúncios, mesmo para testar; usar dispositivos de teste permite verificar anúncios de produção sem violar a política; remover o dispositivo de teste faz o AdMob servir anúncios reais ao dispositivo — [How you can prevent invalid activity](https://support.google.com/admob/answer/3342099?hl=en), [Set up a test device](https://support.google.com/admob/answer/9691433?hl=en), [Behavioral policies](https://support.google.com/admob/answer/2753860?hl=en) (via resumo)
- Os ad units de demonstração da Google "are not associated with your AdMob account", sem risco de tráfego inválido — [How to test your ads](https://support.google.com/admob/answer/9388275) (via resumo)
- Causas listadas de limite de anúncios: clicar nos próprios anúncios, não usar anúncios de teste durante o desenvolvimento, etc.; consequência possível: suspensão, devolução de ganhos aos anunciantes, encerramento da conta e impedimento de participar noutras soluções de monetização Google — [Ad serving limits](https://support.google.com/admob/answer/9493252?hl=en), [Invalid activity: Suspended account](https://support.google.com/admob/answer/6213019?hl=en), [Disabled account](https://support.google.com/admob/answer/6197403?hl=en) (via resumo)
- Política de projeto (CLAUDE.md): não aconselhar clicar em anúncios próprios — coerente com o acima.

### Inferences
- Para testar o APK, usar o App ID de teste da Google e/ou registar o telemóvel como dispositivo de teste; só trocar para IDs reais quando a app estiver aprovada.

### Gaps
- Política específica sobre apps distribuídas fora de lojas ("sideloaded"/APK direto): NÃO encontrada. Programa/Políticas de editor (AdMob policies and restrictions, 6128543) não lidos em detalhe.

## 7. Contactar o suporte do AdMob e elegibilidade

### Takeaway
Existe um fluxo "Contact us" na página de opções de suporte: escolher categoria, ver recursos recomendados e depois escolher uma opção de contacto disponível; respostas por email em ~2 dias úteis. Elegibilidade geral para todos os editores não foi encontrada explicitamente.

### Cited Findings
- "pick a help category, try the recommended resources first, and then choose an available contact option"; emails respondidos "within 2 business days (sometimes longer during holidays)" — [Support options AdMob offers](https://support.google.com/admob/answer/9948073?hl=en) (via resumo)
- Contas geridas pela Google: contactar o Account Manager — [AdMob sign-up errors](https://support.google.com/admob/answer/7356424?hl=en-GB) (via resumo)
- Existe uma secção de apelos de app e conta no Help Center (App and account appeals) — mencionada pelo resumo sem URL específica

### Inferences
- Um editor individual com conta nova deve poder usar o "Contact us" (a disponibilidade de opções de contacto pode variar por conta; não confirmado).

### Gaps
- Regras de elegibilidade (p.ex. mínimo de ganhos) para email/chat: NÃO encontradas.
- Texto do formulário em pt-PT: não consultado.

## Resumo para o dono (síntese das conclusões, a confirmar nas páginas originais)
1. Estado "Getting ready" em conta nova = à espera de verificação da conta (dados de pagamento) E de revisão da app; revisão só começa com app ligada a loja suportada.
2. Sem loja suportada (APK sideloaded): a app fica como "Unpublished"/limitada; as regras lidas não preveem aprovação plena.
3. Lojas suportadas Android (via resumo): Google Play, Amazon, OPPO, Samsung, VIVO, Xiaomi; Amazon Android encerrou em 20-08-2025.
4. Identidade/PIN/fiscais só importam ao atingir limiares de ganhos; 45 dias de identidade e 3 erros de PIN param anúncios.
5. Não clicar nos próprios anúncios; usar anúncios/dispositivos de teste.
6. Verificar manualmente (acesso bloqueado nesta sessão): 10564477, 9989980, 10037806, 14538460, 12835021 (tooltip), 13030080, 9493252, 9948073.
