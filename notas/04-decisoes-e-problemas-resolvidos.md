# Decisões e problemas já resolvidos (para não repetir)

## Decisões
- **Sem pagamentos a utilizadores.** A ideia inicial (pagar 10 % dos anúncios aos utilizadores, com levantamento por PayPal) foi **abandonada**: pagar dinheiro por ver anúncios viola as políticas do AdMob (recompensas em dinheiro são proibidas), e a matemática não dava (cada utilizador demoraria anos a chegar a 10 €).
- **Produto escolhido:** treino para o exame de código da estrada, em português, com anúncios discretos, **gratuito** para todos.
- **Site em GitHub Pages** (grátis) e **app em Expo/React Native**, ambos partilhando `questions.js`.
- **AdSense ≠ AdMob:** o AdSense é só para sites; apps usam AdMob. O dono já tem uma conta AdMob.
- **Pacote Android `codigo.da.estrada.R`:** mudado para ficar igual ao ligado no AdMob.
- **Faixa fixa em baixo** e **anúncio de ecrã inteiro raro** (ver `03`).
- O dono **não vende** a app: quer oferecê-la (e, mais tarde, apresentá-la a escolas de condução).

## Problema: a app fechava ao abrir quando tinha anúncios (RESOLVIDO)
- **Sintoma:** "a app não responde" e depois "continua a parar", logo ao abrir. Só funcionava a versão sem anúncios.
- **Como se descobriu:** workflow do emulador Android 16 reproduziu o erro e o registo mostrou: `Unable to get provider androidx.startup.InitializationProvider ... Failed to create an instance of androidx.work.impl.WorkDatabase`.
- **Causa:** o modelo do Expo SDK 58 liga o **R8** por defeito nas compilações de release (`android.enableMinifyInReleaseBuilds=true`), e o R8 corta uma classe do **WorkManager** (trazido pelo SDK de anúncios da Google).
- **Correção:** plugin `app/plugins/no-minify.js` (usado em `app/app.config.js`) que põe `android.enableMinifyInReleaseBuilds=false` e `android.enableShrinkResourcesInReleaseBuilds=false`. Confirmado no emulador e no telemóvel do dono.
- Não era causa: ID da app, IDs dos blocos, perfil de pagamentos, consentimento, telemóvel, Android 16.

## Outros pormenores técnicos aprendidos
- Para compilar sem anúncios é preciso **remover** o SDK (`npm uninstall react-native-google-mobile-ads --no-save`) e usar `app/src/ads.stub.js`; sem o plugin, com o SDK instalado, a app falha por falta do `APPLICATION_ID`.
- `app/app.config.js` aceita variáveis de compilação só para diagnóstico (`NO_ADS`, `NO_PROVIDER`).
- Em workflows YAML, `run: echo '{ "a": 1 }'` parte o YAML (dois pontos seguidos de espaço); usar `run: |`.
- Um push a `app/**` cancela a compilação do APK em curso (`concurrency`).
- Instalar um APK com o mesmo pacote e a mesma assinatura atualiza por cima; com outro pacote instala-se como outra app.

## Coisas que NÃO funcionaram / não fazer
- Comprar domínio "para ter anúncios": o AdSense não aprova subdomínios gratuitos de forma fiável; para o site é preciso domínio próprio.
- Pedir ao dono para clicar nos anúncios para "testar": nunca.
- Dar passos de ecrãs que não se estão a ver: pedir sempre uma captura de ecrã.
