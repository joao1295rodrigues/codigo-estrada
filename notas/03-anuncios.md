# Anúncios (AdMob na app; AdSense só no futuro, no site)

## Regra de ouro
**Nunca clicar nos próprios anúncios**, nem pedir a outros que cliquem. O Google trata isso como tráfego inválido e pode banir a conta e anular o saldo. Ver os anúncios é permitido. Não gerar visualizações em excesso só para "inflacionar" números.

## AdMob (a app)
- Conta AdMob criada pelo dono. ID de editor: `pub-9348535205156836` (partilhado com o AdSense).
- App no AdMob: **Código da Estrada** (Android). Foi ligada a uma "loja" com o nome de pacote `codigo.da.estrada.R`, e a **app Android usa esse mesmo pacote**. Existe uma segunda app, duplicada e **oculta** (criada por engano): ignorar.
- IDs (não são secretos; estão em `app/ads.config.json`):
  - **ID da app:** `ca-app-pub-9348535205156836~9573351572`
  - **Faixa (banner), ecrã inicial e resultados:** `ca-app-pub-9348535205156836/6734813125`
  - **Intercalar (ecrã inteiro):** `ca-app-pub-9348535205156836/4108649782`
- Em `ads.config.json`: `"useTestAds": false` usa os IDs reais; `true` usa os anúncios de teste da Google (aparecem com "Test Ad" e não geram dinheiro). O ID da app vai para o manifesto através de `app.config.js`.
- **Revisão:** o AdMob mostrou "vamos rever a sua app (2 a 3 dias); a publicação de anúncios está limitada até à conclusão". **Importante:** o AdMob só conclui a revisão com a app **publicada numa loja suportada** (Google Play, Amazon Appstore, Samsung Galaxy Store, OPPO, VIVO, Xiaomi). Um APK instalado fora de lojas pode ficar com anúncios muito limitados ou nenhuns. A Google Play custa 25 $ (uma vez) e, para contas pessoais, exige 12 testadores durante 14 dias. Não foi verificado se as outras lojas são gratuitas.

## Regras de colocação (decisões atuais)
- **Faixa:** fixa em baixo no ecrã inicial e nos resultados, com "Preferências de anúncios" por cima. **Não** aparece durante as perguntas (por agora). O dono gostaria de a ter também durante os testes; o AdMob **proíbe cliques acidentais**, e nos testes os botões "Seguinte"/respostas ficam perto da faixa. Se avançarmos, afastar bem a faixa dos botões. Decidir só com dados reais.
- **Intercalar:** só no fim de um teste, de 3 em 3 testes (`interstitialEvery` em `app/src/config.js`) e nunca em menos de 5 minutos desde o último (`interstitialMinGapMs`). Nunca ao abrir a app nem durante as perguntas.
- O dono quer anúncios **discretos** e a app **gratuita**.

## Consentimento (RGPD / EEE)
- A app usa o SDK UMP da Google (`AdsConsent.gatherConsent()` em `src/ads.js`) e tem o link "Preferências de anúncios".
- **Falta criar a mensagem de consentimento no AdMob** (Privacidade e mensagens → Criar uma mensagem). Convém antes de divulgar a app na Europa.

## Pagamentos (conta do dono)
- Limites em EUR (tabela do AdMob): confirmar identidade/morada a partir de ~10 $ de ganhos; escolher método de pagamento a partir de 10 €; **pagamento a partir de 70 €** (abaixo disso, acumula para o mês seguinte).
- Pagamentos entre os dias 21 e 26 de cada mês, se o saldo atingir o limite. PIN de morada por carta quando se atingir o limite de verificação (4 meses para introduzir).
- Os dados bancários e fiscais são escritos **só no AdMob**, nunca em conversas ou ficheiros. O titular do perfil de pagamentos é quem recebe e quem tem de declarar o rendimento.
- O rendimento de anúncios é declarável (categoria B). Questão fiscal do dono, a tratar com as Finanças. Não registar aqui detalhes pessoais.

## Anúncios no site (AdSense), só no futuro
- O AdSense só funciona em sites (não em apps). Precisa de domínio próprio aprovado. Ver `05`.
- `config.js` já tem `adsTxt` (linha `google.com, pub-9348535205156836, DIRECT, f08c47fec0942fa0`); `build.js` gera `ads.txt` e `app-ads.txt`, mas num site de projeto do GitHub ficam em `/codigo-estrada/` e não na raiz do domínio, por isso só passam a contar com um domínio próprio.

## Verificar se está a funcionar
1. AdMob → Início/Relatórios: pedidos, visualizações, ganhos (demoram horas a aparecer).
2. Telemóvel: faixa em baixo no ecrã inicial. Se não aparecer, instalar `codigo-estrada-anuncios-de-teste.apk` (deve mostrar "Test Ad").
