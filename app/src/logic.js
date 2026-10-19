// Lógica pura do treino (sem React), para poder ser testada.

export const initialStore = { answered: 0, correct: 0, sessions: 0, wrong: [] };

export const shuffle = (arr, rnd = Math.random) => {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export const categoriesOf = (questions) => [...new Set(questions.map((q) => q.c))];

// Cria uma sessão: perguntas baralhadas, com as opções também baralhadas.
export const buildSession = ({ mode, label, pool, size }, rnd = Math.random) => ({
  mode,
  label,
  i: 0,
  items: shuffle(pool, rnd)
    .slice(0, size)
    .map((q) => ({
      q,
      options: shuffle(q.o.map((text, idx) => ({ text, ok: idx === q.a })), rnd),
      choice: null,
    })),
});

// Regista a resposta e devolve a sessão e o progresso atualizados (sem alterar os originais).
export const answer = (session, store, optionIndex) => {
  const item = session.items[session.i];
  if (item.choice !== null) return { session, store };
  const ok = item.options[optionIndex].ok;
  const items = session.items.map((it, idx) => (idx === session.i ? { ...it, choice: optionIndex } : it));
  const wrong = ok ? store.wrong.filter((id) => id !== item.q.id) : store.wrong.includes(item.q.id) ? store.wrong : [...store.wrong, item.q.id];
  return {
    session: { ...session, items },
    store: { ...store, answered: store.answered + 1, correct: store.correct + (ok ? 1 : 0), wrong },
  };
};

export const results = (session, passRatio) => {
  const total = session.items.length;
  const right = session.items.filter((it) => it.options[it.choice]?.ok).length;
  const wrongItems = session.items.filter((it) => !it.options[it.choice]?.ok);
  return { total, right, wrongItems, passed: total > 0 && right / total >= passRatio };
};

export const percent = (store) => (store.answered ? Math.round((store.correct / store.answered) * 100) : 0);
