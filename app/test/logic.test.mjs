// Testes da lógica pura. Correr: npm test
import assert from 'node:assert/strict';
import QUESTIONS from '../src/questions.js';
import fs from 'node:fs';
import { SIGN_QUESTIONS, SIGN_CATEGORY } from '../src/signs.js';
import { answer, buildSession, categoriesOf, initialStore, percent, results, shouldShowInterstitial, shuffle } from '../src/logic.js';

const seeded = (seed = 1) => () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296);

// banco de perguntas
assert.ok(QUESTIONS.length >= 300, 'banco com 300+ perguntas');
for (const q of QUESTIONS) {
  assert.ok(q.a >= 0 && q.a < q.o.length, `resposta válida: ${q.q}`);
  assert.ok(q.e && q.o.length >= 2 && new Set(q.o).size === q.o.length, `pergunta bem formada: ${q.q}`);
  assert.equal(typeof q.id, 'number');
}
assert.equal(new Set(QUESTIONS.map((q) => q.id)).size, QUESTIONS.length, 'ids únicos');
assert.equal(categoriesOf(QUESTIONS).length, 13);

// perguntas com imagem do sinal
assert.ok(SIGN_QUESTIONS.length >= 15, 'perguntas de sinais');
for (const q of SIGN_QUESTIONS) {
  assert.equal(q.c, SIGN_CATEGORY);
  assert.equal(q.o.length, 4, `4 opções: ${q.img}`);
  assert.equal(new Set(q.o).size, 4, `opções diferentes: ${q.img}`);
  assert.ok(q.a >= 0 && q.a < 4 && q.e, `resposta e explicação: ${q.img}`);
  assert.ok(q.id >= 10000, 'id fora do intervalo do banco base');
  assert.ok(fs.existsSync(new URL(`../assets/sinais/${q.img.replace('/', '-')}.png`, import.meta.url)), `PNG existe: ${q.img}`);
  const src = fs.readFileSync(new URL('../src/signImages.js', import.meta.url), 'utf8');
  assert.ok(src.includes(`'${q.img}'`), `mapa de imagens tem ${q.img}`);
}
assert.equal(new Set([...QUESTIONS, ...SIGN_QUESTIONS].map((q) => q.id)).size, QUESTIONS.length + SIGN_QUESTIONS.length, 'ids únicos no conjunto');
assert.ok(new Set(SIGN_QUESTIONS.map((q) => q.a)).size >= 3, 'a resposta certa não está sempre na mesma posição');

// shuffle não perde nem duplica elementos
const arr = Array.from({ length: 50 }, (_, i) => i);
assert.deepEqual([...shuffle(arr, seeded())].sort((a, b) => a - b), arr);

// sessão: tamanho, opções baralhadas mas com a certa preservada
const s0 = buildSession({ mode: 'exam', label: 'Simulacro', pool: QUESTIONS, size: 20 }, seeded(7));
assert.equal(s0.items.length, 20);
for (const it of s0.items) {
  assert.equal(it.options.filter((o) => o.ok).length, 1);
  assert.equal(it.options.find((o) => o.ok).text, it.q.o[it.q.a]);
}

// responder certo e errado atualiza o progresso e a lista de erros
let session = buildSession({ mode: 'train', label: 't', pool: QUESTIONS.slice(0, 3), size: 3 }, seeded(3));
let store = { ...initialStore };
const right = (it) => it.options.findIndex((o) => o.ok);
const wrong = (it) => it.options.findIndex((o) => !o.ok);

let r = answer(session, store, wrong(session.items[0]));
assert.equal(r.store.answered, 1); assert.equal(r.store.correct, 0); assert.equal(r.store.wrong.length, 1);
assert.equal(store.answered, 0, 'não altera o original');
session = r.session; store = r.store;

// responder duas vezes à mesma pergunta não conta duas vezes
r = answer(session, store, right(session.items[0]));
assert.equal(r.store.answered, 1);

// acertar mais tarde a mesma pergunta tira-a da lista de erros
const again = buildSession({ mode: 'train', label: 't', pool: [session.items[0].q], size: 1 }, seeded(5));
r = answer(again, store, right(again.items[0]));
assert.equal(r.store.wrong.length, 0); assert.equal(r.store.correct, 1);

// resultados e critério de aprovação
const ex = buildSession({ mode: 'exam', label: 'x', pool: QUESTIONS, size: 10 }, seeded(11));
let st = { ...initialStore }; let se = ex;
for (let i = 0; i < 10; i++) { const a = answer({ ...se, i }, st, right(se.items[i])); se = { ...a.session, i: 0 }; st = a.store; }
const all = results(se, 0.9);
assert.equal(all.right, 10); assert.equal(all.passed, true); assert.equal(all.wrongItems.length, 0);
assert.equal(percent(st), 100);

const none = buildSession({ mode: 'exam', label: 'x', pool: QUESTIONS, size: 10 }, seeded(12));
let sn = none; let stn = { ...initialStore };
for (let i = 0; i < 10; i++) { const a = answer({ ...sn, i }, stn, wrong(sn.items[i])); sn = { ...a.session, i: 0 }; stn = a.store; }
const bad = results(sn, 0.9);
assert.equal(bad.right, 0); assert.equal(bad.passed, false); assert.equal(bad.wrongItems.length, 10);
assert.equal(percent(initialStore), 0);

// anúncio de ecrã inteiro: nunca à 1.ª nem à 2.ª sessão, e só de 3 em 3
assert.deepEqual([0, 1, 2, 3, 4, 5, 6].map((n) => shouldShowInterstitial(n, 3)), [false, false, false, true, false, false, true]);

// intervalo mínimo: de 3 em 3 testes, mas nunca em menos de 5 minutos desde o último
const MIN = 5 * 60 * 1000, T = 1_000_000_000;
assert.equal(shouldShowInterstitial(3, 3, T - 2 * 60 * 1000, T, MIN), false, 'ainda só passaram 2 min');
assert.equal(shouldShowInterstitial(3, 3, T - 6 * 60 * 1000, T, MIN), true, 'já passaram 6 min');
assert.equal(shouldShowInterstitial(4, 3, T - 60 * 60 * 1000, T, MIN), false, 'não é múltiplo de 3');

console.log('lógica: todos os testes passaram');
