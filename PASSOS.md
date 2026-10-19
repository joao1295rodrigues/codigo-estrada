# O que tens de fazer (por ordem)

Tudo o que eu podia fazer sem aceder às tuas contas já está feito. Os passos abaixo precisam de ti
porque envolvem contas, identidade e dinheiro teus.

## Não precisas de "chave API"
O AdSense não usa chave API. A ligação do site à tua conta Google faz-se com:
- o **ID de editor** (`ca-pub-XXXXXXXXXXXXXXXX`), que o AdSense te dá;
- o ficheiro **ads.txt**, que o `build.js` gera sozinho quando preencheres esse ID.

## Estado da verificação das perguntas (feita por mim)
Conferi o banco (303 perguntas) com fontes que citam o Código da Estrada e o Regulamento de Sinalização do Trânsito
(as páginas oficiais estão bloqueadas neste ambiente, por isso são fontes secundárias que coincidem entre si).
Detalhe da sinalização: `REVISAO-SINALIZACAO.md`.

**Já confirmado e corrigido onde havia erro:**
- Sinalização: nomes e significados de todos os sinais (11 correções feitas).
- Pontos da carta: 12 iniciais; grave 2, muito grave 4, **crime 6** (corrigido; estava 5).
- Álcool: 0,5 g/l geral; 0,2 g/l para regime probatório, táxis, socorro, pesados, transporte de crianças; escalões 0,5–0,8 / 0,8–1,2 / ≥ 1,2.
- Regime probatório: 3 anos (artigo 122.º). Zona de coexistência: 20 km/h (artigo 27.º).
- Estacionamento: 5 m (passadeiras e cruzamentos), pistas de velocípedes, passagens de nível, regra do artigo 48.º (reformulada).
- Ultrapassagem: proibida em passagens de nível, cruzamentos, passadeiras, curvas e lombas; 1,5 m a velocípedes; regra da direita (reformulada).
- Inspeção 4 anos / bienal / anual aos 8; velocidade mínima 50 km/h em autoestrada; pneus 1,6 mm; cadeirinha < 12 anos e < 135 cm.
- Triângulo: pelo menos 30 m, visível a 100 m, colete; alcance de máximos (100 m) e médios (30 m); regras de luzes e nevoeiro.
- Prova teórica: 30 perguntas, máximo 3 erros.

**Ainda sem confirmação direta (baixo risco, confirma quando tiveres tempo):**
- Desenho exato de cada sinal (as fontes dão nome e significado, não o desenho em texto).
- Uso do telemóvel ao volante (artigo 84.º): mãos-livres.
- Luzes de cruzamento em túneis (deixei a pergunta como "atitude mais segura", não como obrigação legal).

Se encontrares uma pergunta errada, corrige-a em `questions.js` (ou apaga-a) e corre `node build.js`.

## Fase 1 – Publicar (custo 0 €)  ⏱ ~30 min
1. Abre `config.js` e põe o teu email em `contactEmail`.
2. **Revê as perguntas** (`questions.js`) contra o manual/IMT. Foram escritas de memória.
3. Corre `node build.js` (ou diz-me e eu corro). Gera a pasta `dist/`.
4. Publica `dist/` de graça: no Cloudflare Pages ou Netlify (Add new site → Deploy manually → arrasta o ficheiro `site-para-publicar.zip` ou a pasta `dist`).
5. Testa o endereço que te derem no telemóvel.

## Fase 2 – Ganhar visitas (semanas/meses, 0 €)
6. Partilha em grupos de Facebook/WhatsApp/Reddit de quem está a tirar a carta.
7. Acrescenta perguntas todos os dias (`questions.js`). Mais páginas = mais Google. Meta: 300+.
8. Regista o site no Google Search Console (grátis) e envia o `sitemap.xml`.

## Fase 3 – Monetizar (quando já houver visitas diárias)  💶 ~10 €/ano
9. Compra um domínio (ex.: `.pt`) e liga-o ao alojamento. O AdSense dificilmente aprova subdomínios gratuitos.
10. Corre `node build.js https://TEU-DOMINIO.pt` e republica (isto corrige o sitemap).
11. Em https://adsense.google.com cria conta com a tua conta Google, adiciona o domínio e envia para revisão.
    Podem pedir: NIF/dados fiscais, morada e uma verificação por **PIN enviado por carta** (~semanas).
12. Quando aprovarem: copia o **ID de editor** (`ca-pub-...`) para `config.js` → `adClient`.
13. No AdSense cria 3 blocos de anúncio (Por anúncio → Anúncios de display → Reativo) e copia cada ID para
    `adSlotHome`, `adSlotResult` e `adSlotPage`.
14. No AdSense ativa a mensagem de consentimento (Privacidade e mensagens → Mensagens da UE). É obrigatória no EEE.
15. Corre `node build.js https://TEU-DOMINIO.pt`, republica. Confirma no AdSense que o `ads.txt` foi encontrado.
16. Pagamento: o AdSense só paga a partir de ~70 € acumulados (verifica o valor para EUR na tua conta). Associa o IBAN em Pagamentos.

## Impostos
Os rendimentos do AdSense são rendimentos teus. Fala com um contabilista ou com as Finanças sobre abrir atividade
(categoria B). Não é uma decisão que eu possa tomar por ti.

## Regras que NÃO podes quebrar (o AdSense bane a conta)
- Nunca cliques nos teus anúncios nem peças a amigos/utilizadores para clicarem.
- Nunca ofereças recompensas por ver/clicar anúncios.
- Mantém a página de privacidade e o contacto visíveis.

## Ficheiros
- `config.js` – email e IDs do AdSense (único ficheiro que vais mexer)
- `questions.js` – banco de perguntas
- `build.js` – gera `dist/` (o site final)
- `site-para-publicar.zip` – o `dist/` zipado, pronto a publicar
