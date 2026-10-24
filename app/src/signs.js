// Perguntas com imagem do sinal ("Qual é o significado deste sinal?").
// Desenhos próprios (../imagens/sinais). Nomes e códigos conferidos em ../notas/08-revisao-da-sinalizacao.md.
// Parte pura (sem React Native), para ser testada.

export const SIGN_CATEGORY = 'Sinais (imagem)';
const ID_BASE = 10000; // ids fixos, para não colidirem com os de questions.js nem mudarem se este crescer

const SPEED = 'Limite máximo de velocidade';
const MIN = 'Velocidade mínima obrigatória';

// img = nome do ficheiro (sem extensão); ok = resposta certa; wrong = 3 respostas erradas; e = explicação.
const SIGNS = [
  { img: 'B1-cedencia-de-passagem', ok: 'Cedência de passagem', wrong: ['Paragem obrigatória (STOP)', 'Sentido proibido', 'Outros perigos'], e: 'É o sinal B1, de cedência de passagem: triângulo com a ponta para baixo e bordo vermelho. Tens de ceder a passagem aos veículos que circulam na via em que vais entrar.' },
  { img: 'B2-paragem-obrigatoria-stop', ok: 'Paragem obrigatória (STOP)', wrong: ['Cedência de passagem', 'Sentido proibido', 'Trânsito proibido'], e: 'É o sinal B2, de paragem obrigatória (STOP): o único sinal em forma de octógono. Tens de parar antes da linha ou do cruzamento e só avanças quando for seguro.' },
  { img: 'C1-sentido-proibido', ok: 'Sentido proibido', wrong: ['Trânsito proibido', 'Paragem obrigatória (STOP)', 'Estacionamento proibido'], e: 'É o sinal C1, de sentido proibido: disco vermelho com uma barra branca. Não podes entrar nessa via neste sentido.' },
  { img: 'C2-transito-proibido', ok: 'Trânsito proibido', wrong: ['Sentido proibido', 'Estacionamento proibido', 'Paragem e estacionamento proibidos'], e: 'É o sinal C2, de trânsito proibido: disco branco com bordo vermelho, sem símbolo. Está proibida a circulação de veículos nos dois sentidos.' },
  { img: 'C13-limite-velocidade-30', ok: `${SPEED}: 30 km/h`, wrong: [`${SPEED}: 50 km/h`, `${MIN}: 30 km/h`, 'Paragem e estacionamento proibidos'], e: 'É o sinal C13, de limite máximo de velocidade. O número indica a velocidade máxima, em km/h. Disco branco com bordo vermelho e o número a preto.' },
  { img: 'C13-limite-velocidade-50', ok: `${SPEED}: 50 km/h`, wrong: [`${SPEED}: 60 km/h`, `${MIN}: 50 km/h`, 'Trânsito proibido'], e: 'É o sinal C13, de limite máximo de velocidade (50 km/h). O número indica a velocidade máxima, em km/h.' },
  { img: 'C13-limite-velocidade-90', ok: `${SPEED}: 90 km/h`, wrong: [`${SPEED}: 80 km/h`, `${MIN}: 90 km/h`, `${SPEED}: 100 km/h`], e: 'É o sinal C13, de limite máximo de velocidade (90 km/h). Tem bordo vermelho; os sinais de velocidade mínima são azuis.' },
  { img: 'C13-limite-velocidade-120', ok: `${SPEED}: 120 km/h`, wrong: [`${SPEED}: 100 km/h`, `${MIN}: 120 km/h`, `${SPEED}: 90 km/h`], e: 'É o sinal C13, de limite máximo de velocidade (120 km/h). Bordo vermelho e fundo branco.' },
  { img: 'C15-estacionamento-proibido', ok: 'Estacionamento proibido', wrong: ['Paragem e estacionamento proibidos', 'Trânsito proibido', 'Estacionamento'], e: 'É o sinal C15, de estacionamento proibido: disco azul com bordo vermelho e uma barra vermelha. Com duas barras em cruz é o C16 (paragem e estacionamento proibidos).' },
  { img: 'C16-paragem-e-estacionamento-proibidos', ok: 'Paragem e estacionamento proibidos', wrong: ['Estacionamento proibido', 'Trânsito proibido', 'Sentido proibido'], e: 'É o sinal C16, de paragem e estacionamento proibidos: disco azul com bordo vermelho e duas barras em cruz (X). Com uma só barra é o C15 (só estacionamento proibido).' },
  { img: 'D1-sentido-obrigatorio-em-frente', ok: 'Sentido obrigatório em frente', wrong: ['Sentido proibido', 'Cedência de passagem', 'Trânsito proibido'], e: 'É o sinal D1, de sentido obrigatório: disco azul com uma seta branca. Esta seta indica que tens de seguir em frente.' },
  { img: 'D1-sentido-obrigatorio-direita', ok: 'Sentido obrigatório à direita', wrong: ['Sentido obrigatório à esquerda', 'Sentido obrigatório em frente', 'Sentido proibido'], e: 'É o sinal D1, de sentido obrigatório: a seta indica a direção que tens de seguir, aqui para a direita.' },
  { img: 'D1-sentido-obrigatorio-esquerda', ok: 'Sentido obrigatório à esquerda', wrong: ['Sentido obrigatório à direita', 'Sentido obrigatório em frente', 'Sentido proibido'], e: 'É o sinal D1, de sentido obrigatório: a seta indica a direção que tens de seguir, aqui para a esquerda.' },
  { img: 'D8-velocidade-minima-50', ok: `${MIN}: 50 km/h`, wrong: [`${SPEED}: 50 km/h`, `${MIN}: 30 km/h`, 'Paragem obrigatória (STOP)'], e: 'É o sinal D8, de velocidade mínima obrigatória: disco azul com o número a branco. Indica a velocidade mínima, em km/h, a que se deve circular. Os limites máximos (C13) têm bordo vermelho.' },
  { img: 'A29-outros-perigos', ok: 'Outros perigos', wrong: ['Cedência de passagem', 'Sinalização luminosa', 'Paragem obrigatória (STOP)'], e: 'É o sinal A29, de outros perigos: triângulo de perigo com um ponto de exclamação. Avisa de um perigo que não tem sinal próprio.' },
  { img: 'A22-sinalizacao-luminosa', ok: 'Sinalização luminosa', wrong: ['Outros perigos', 'Cedência de passagem', 'Trabalhos na via'], e: 'É o sinal A22, de sinalização luminosa: triângulo de perigo com um semáforo. Avisa que vais encontrar semáforos.' },
  { img: 'H1a-estacionamento', ok: 'Estacionamento', wrong: ['Hospital', 'Estacionamento proibido', 'Paragem obrigatória (STOP)'], e: 'É o sinal H1a, de estacionamento: quadrado azul com um P branco. Indica um local onde é permitido estacionar.' },
  { img: 'H2-hospital', ok: 'Hospital', wrong: ['Estacionamento', 'Outros perigos', 'Cedência de passagem'], e: 'É o sinal H2, de hospital: quadrado azul com um H branco. Indica a existência de um hospital.' },
];

// Posição fixa da resposta certa, rodada pelo índice, para não ser sempre a primeira.
export const SIGN_QUESTIONS = SIGNS.map((s, i) => {
  const o = s.wrong.slice();
  const a = i % 4;
  o.splice(a, 0, s.ok);
  return { id: ID_BASE + i, c: SIGN_CATEGORY, q: 'Qual é o significado deste sinal?', o, a, e: s.e, img: s.img };
});
