# Ponto de situação

**Última atualização: 2026-10-22.** (Atualizar a data e o resumo a cada alteração.)

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
