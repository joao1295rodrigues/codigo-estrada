# Ideias futuras (só depois de se ver se há anúncios/ganhos)

## Domínio .pt e site com anúncios (AdSense)
- O dono viu domínios .pt a **1 € no primeiro ano**. Quer comprar **só por 1 ano**, e só renovar (até cerca de 39 €/ano) se o rendimento aumentar muito. A renovação costuma ser entre ~13 € e ~39 €: **desligar a renovação automática**.
- **Não é preciso servidor.** O GitHub Pages aloja o site de graça e aceita domínio próprio; só se paga o domínio.
- Passos previstos: comprar o domínio → eu acrescento o ficheiro `CNAME` em `docs/` e refaço o build com o novo endereço → o dono aponta o DNS para o GitHub Pages → pedir o AdSense → depois colocar o ID e os blocos em `config.js` (`adClient`, `adSlotHome`, `adSlotResult`, `adSlotPage`) e refazer o build.
- AdSense: várias faixas por página são possíveis, mas evitar excesso de anúncios face ao conteúdo (2 a 3 por página, bem espaçadas, e nunca encostadas a botões). A aprovação pode demorar dias a semanas. Precisa de consentimento (CMP) para a Europa.
- O ficheiro `ads.txt` já existe em `docs/`; com domínio próprio fica na raiz e passa a contar.

## Imagens com licença livre (para ficar mais profissional)
- O dono quer **fotos/imagens das situações** (sinais, marcas, cruzamentos) e usa-las só se tiverem **licença livre**. Não copiar imagens nem perguntas de outros bancos de teste.
- Fontes possíveis a verificar caso a caso: Wikimédia Commons (sinais de trânsito portugueses; **verificar a licença e a atribuição de cada ficheiro**), fotografias do próprio dono, ilustrações criadas de raiz.
- Implementação: acrescentar um campo `img` às perguntas em `questions.js`, mostrar a imagem no site (`build.js`, `app.js`) e na app (`app/src/screens.js`), guardar as imagens na pasta do repositório e registar a **licença e a fonte** de cada uma num ficheiro `notas/creditos-imagens.md`.

## Escolas de condução
- O dono quer, se correr bem, **apresentar a app a escolas de condução** e oferecê-la. Conteúdo tem de estar alinhado com o IMT (confirmar com o IMT o que se pode usar/citar) e revisto contra a lei em vigor. Possíveis extras: estatísticas por tema, modo exame cronometrado, marca/identidade própria.
- Oferecer gratuitamente com anúncios é diferente de vender/licenciar: vender seria atividade económica com implicações fiscais.

## Outros
- Faixa também durante os testes (cuidado com cliques acidentais; ver `03`).
- Google Search Console para o site; divulgar em grupos de quem tira a carta.
- Publicar a app numa loja (Google Play 25 $ + 12 testadores/14 dias, ou outra loja suportada) só se for necessário para os anúncios reais e o dono aceitar o custo.
