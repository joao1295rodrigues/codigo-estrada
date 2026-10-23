// Gera desenhos próprios (SVG) de sinais de trânsito simples, em imagens/sinais/.
// Uso: node scripts/gerar-sinais.mjs
// Os desenhos são nossos (sem imagens de terceiros). Seguem as formas e cores do
// Regulamento de Sinalização do Trânsito / Convenção de Viena.
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'imagens', 'sinais');
mkdirSync(OUT, { recursive: true });

const RED = '#d71920';
const BLUE = '#0b4ea2';
const BLACK = '#111111';
const FONT = "font-family=\"Arial, Helvetica, sans-serif\" font-weight=\"700\"";

const svg = (body, title, desc) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200" role="img" aria-label="${title}">\n  <title>${title}</title>\n  <desc>${desc}</desc>\n${body}\n</svg>\n`;

// Triângulo de perigo (ponta para cima): bordo vermelho, fundo branco.
const triUp = (inner) => `  <polygon points="100,16 188,170 12,170" fill="#fff" stroke="${RED}" stroke-width="18" stroke-linejoin="round"/>\n${inner}`;
// Disco com bordo vermelho e fundo branco (proibição).
const discProhib = (inner) => `  <circle cx="100" cy="100" r="88" fill="#fff" stroke="${RED}" stroke-width="18"/>\n${inner}`;
// Disco azul (obrigação).
const discBlue = (inner) => `  <circle cx="100" cy="100" r="92" fill="${BLUE}"/>\n  <circle cx="100" cy="100" r="92" fill="none" stroke="#fff" stroke-width="4" opacity="0"/>\n${inner}`;
// Disco azul com bordo vermelho (estacionamento).
const discParking = (inner) => `  <circle cx="100" cy="100" r="88" fill="${BLUE}" stroke="${RED}" stroke-width="18"/>\n${inner}`;
// Quadrado azul (informação).
const squareBlue = (inner) => `  <rect x="12" y="12" width="176" height="176" rx="14" fill="${BLUE}" stroke="#fff" stroke-width="6"/>\n${inner}`;

// Seta branca a apontar para cima (centrada), rodada por `deg`.
const arrow = (deg) =>
  `  <g transform="rotate(${deg} 100 100)" fill="#fff"><rect x="88" y="92" width="24" height="64"/><polygon points="100,38 138,96 62,96"/></g>`;

const signs = [];
const add = (file, title, desc, body) => signs.push({ file, title, desc, body });

// ---- Cedência e paragem ----
add('B1-cedencia-de-passagem', 'Cedência de passagem (B1)', 'Triângulo com a ponta para baixo, bordo vermelho e fundo branco.',
  `  <polygon points="12,30 188,30 100,184" fill="#fff" stroke="${RED}" stroke-width="18" stroke-linejoin="round"/>`);
add('B2-paragem-obrigatoria-stop', 'Paragem obrigatória (B2, STOP)', 'Octógono vermelho com a palavra STOP a branco.',
  `  <polygon points="62,10 138,10 190,62 190,138 138,190 62,190 10,138 10,62" fill="${RED}" stroke="#fff" stroke-width="6"/>\n  <polygon points="64,20 136,20 180,64 180,136 136,180 64,180 20,136 20,64" fill="none" stroke="#fff" stroke-width="5"/>\n  <text x="100" y="124" text-anchor="middle" font-size="50" ${FONT} fill="#fff">STOP</text>`);

// ---- Proibição ----
add('C1-sentido-proibido', 'Sentido proibido (C1)', 'Disco vermelho com uma barra horizontal branca.',
  `  <circle cx="100" cy="100" r="94" fill="${RED}"/>\n  <rect x="36" y="84" width="128" height="32" fill="#fff"/>`);
add('C2-transito-proibido', 'Trânsito proibido (C2)', 'Disco branco com bordo vermelho, sem símbolo.', discProhib(''));
for (const v of [30, 40, 50, 60, 70, 80, 90, 100, 120]) {
  const size = v >= 100 ? 62 : 78;
  add(`C13-limite-velocidade-${v}`, `Limite máximo de velocidade ${v} km/h (C13)`, `Disco branco com bordo vermelho e o número ${v} a preto.`,
    discProhib(`  <text x="100" y="${100 + size * 0.36}" text-anchor="middle" font-size="${size}" ${FONT} fill="${BLACK}">${v}</text>`));
}
add('C15-estacionamento-proibido', 'Estacionamento proibido (C15)', 'Disco azul com bordo vermelho e uma barra diagonal vermelha.',
  discParking(`  <line x1="42" y1="42" x2="158" y2="158" stroke="${RED}" stroke-width="20"/>`));
add('C16-paragem-e-estacionamento-proibidos', 'Paragem e estacionamento proibidos (C16)', 'Disco azul com bordo vermelho e duas barras diagonais vermelhas em cruz.',
  discParking(`  <line x1="42" y1="42" x2="158" y2="158" stroke="${RED}" stroke-width="20"/>\n  <line x1="158" y1="42" x2="42" y2="158" stroke="${RED}" stroke-width="20"/>`));

// ---- Obrigação ----
add('D1-sentido-obrigatorio-em-frente', 'Sentido obrigatório em frente (D1)', 'Disco azul com seta branca a apontar para cima.', discBlue(arrow(0)));
add('D1-sentido-obrigatorio-direita', 'Sentido obrigatório à direita (D1)', 'Disco azul com seta branca a apontar para a direita.', discBlue(arrow(90)));
add('D1-sentido-obrigatorio-esquerda', 'Sentido obrigatório à esquerda (D1)', 'Disco azul com seta branca a apontar para a esquerda.', discBlue(arrow(-90)));
for (const v of [30, 50, 70]) {
  add(`D8-velocidade-minima-${v}`, `Velocidade mínima obrigatória ${v} km/h (D8)`, `Disco azul com o número ${v} a branco.`,
    discBlue(`  <text x="100" y="${100 + 78 * 0.36}" text-anchor="middle" font-size="78" ${FONT} fill="#fff">${v}</text>`));
}

// ---- Perigo ----
add('A29-outros-perigos', 'Outros perigos (A29)', 'Triângulo de perigo com um ponto de exclamação a preto.',
  triUp(`  <rect x="91" y="66" width="18" height="52" rx="4" fill="${BLACK}"/>\n  <circle cx="100" cy="140" r="11" fill="${BLACK}"/>`));
add('A22-sinalizacao-luminosa', 'Sinalização luminosa (A22)', 'Triângulo de perigo com um semáforo de três luzes (vermelha, amarela, verde).',
  triUp(`  <rect x="82" y="62" width="36" height="86" rx="8" fill="${BLACK}"/>\n  <circle cx="100" cy="80" r="10" fill="${RED}"/>\n  <circle cx="100" cy="105" r="10" fill="#f2b705"/>\n  <circle cx="100" cy="130" r="10" fill="#2e9b3e"/>`));

// ---- Informação ----
add('H1a-estacionamento', 'Estacionamento (H1a)', 'Quadrado azul com a letra P branca.',
  squareBlue(`  <text x="100" y="146" text-anchor="middle" font-size="130" ${FONT} fill="#fff">P</text>`));
add('H2-hospital', 'Hospital (H2)', 'Quadrado azul com a letra H branca.',
  squareBlue(`  <text x="100" y="146" text-anchor="middle" font-size="130" ${FONT} fill="#fff">H</text>`));

for (const s of signs) writeFileSync(join(OUT, `${s.file}.svg`), svg(s.body, s.title, s.desc));

// Folha de contacto (para ver tudo de uma vez).
const cell = 150;
const cols = 6;
const rows = Math.ceil(signs.length / cols);
const items = signs.map((s, i) => {
  const x = (i % cols) * cell;
  const y = Math.floor(i / cols) * (cell + 24);
  const inner = svg(s.body, s.title, s.desc).replace(/^<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
  const code = s.file.split('-')[0];
  return `<g transform="translate(${x + 10} ${y + 8}) scale(0.65)">${inner}</g><text x="${x + 75}" y="${y + 150}" text-anchor="middle" font-size="11" font-family="Arial">${s.file.slice(0, 26)}</text>`;
}).join('\n');
writeFileSync(join(OUT, '_folha.svg'),
  `<svg xmlns="http://www.w3.org/2000/svg" width="${cols * cell}" height="${rows * (cell + 24)}"><rect width="100%" height="100%" fill="#eee"/>\n${items}\n</svg>\n`);

console.log(`${signs.length} sinais gerados em ${OUT}`);
