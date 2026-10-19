# O que preciso de ti (por ordem)

Só preciso de ti para o que envolve contas e dados teus. Tudo o resto já está feito (ver `PASSOS.md`).

## 1. Repositório GitHub (para eu publicar o site de graça)
O GitHub Pages aloja o site sem custos. Para eu o conseguir fazer, preciso de acesso a um repositório vazio.

1. Se não tens conta, cria uma em https://github.com (grátis).
2. Cria um repositório novo:
   - Nome: `codigo-estrada`
   - Visibilidade: **Public** (o GitHub Pages grátis só funciona com repositórios públicos; não há nada secreto no site)
   - Não acrescentes ficheiros (sem README, sem .gitignore, sem licença)
3. Liga o GitHub ao Claude em https://claude.ai/connect-github e **instala a aplicação do Claude no repositório** `codigo-estrada` (podes escolher só esse repositório).
4. Diz-me o nome completo do repositório, por exemplo `o-teu-utilizador/codigo-estrada`.
   - Se eu disser que não consigo anexá-lo a esta sessão, abre uma **sessão nova** com esse repositório selecionado. Os repositórios são escolhidos quando a sessão começa.

O que eu faço depois: envio o projeto e o site para o repositório, e preparo o GitHub Pages. Pode ficar a faltar um clique teu em
Settings → Pages (escolher a pasta `/docs` do ramo `main`); se for o caso, digo-te exatamente onde.

Nota: o endereço fica `o-teu-utilizador.github.io/codigo-estrada`. Serve para testar e divulgar, mas o AdSense dificilmente
aprova esse tipo de endereço. Para os anúncios vais precisar de um domínio próprio (~10 €/ano), mais tarde.

## 2. Email de contacto
Diz-me o email que queres que apareça nas páginas "Sobre" e "Privacidade" (fica público). Eu não o ponho sem tu me dizeres.

## 3. Dados do AdSense (só depois de o AdSense aprovar o site)
Estes dados não são secretos e posso usá-los:
- **ID de editor:** `ca-pub-` seguido de 16 números
- **3 IDs de blocos de anúncio:** um para a página inicial, um para os resultados, um para as páginas de perguntas (números de ~10 dígitos)
- **O domínio final** (por exemplo `https://teusite.pt`)

Com isto eu preencho `config.js`, gero o `ads.txt` e o sitemap certos e volto a publicar.

## O que NUNCA me deves dar
Palavras-passe (Google, GitHub, banco), o PIN que o AdSense envia por carta, o IBAN, o NIF e outros dados fiscais.
Esses dados escreves tu diretamente no AdSense (Pagamentos e Informações de pagamento). É lá que se define para onde vai o dinheiro.
Eu nunca preciso deles para o site funcionar.

## Ordem prática
1. Repositório + email (agora). Eu publico o site.
2. Divulgar e juntar visitas (semanas).
3. Comprar domínio, pedir o AdSense, e depois enviar-me os dados do ponto 3.
