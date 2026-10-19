(() => {
  const app = document.getElementById("app");
  const STORE_KEY = "codigo:v1";

  // ---------- armazenamento local (nunca deve partir a app) ----------
  const load = () => {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; } catch { return {}; }
  };
  const save = (s) => {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(s)); } catch { /* modo privado: ignora */ }
  };
  let store = Object.assign({ answered: 0, correct: 0, sessions: 0, wrong: [] }, load());

  // ---------- utilitários ----------
  const esc = (t) => String(t).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const shuffle = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  QUESTIONS.forEach((q, i) => { q.id = i; });
  const categories = [...new Set(QUESTIONS.map((q) => q.c))];

  // ---------- anúncios (só ativos se CONFIG.adClient estiver preenchido) ----------
  // O script do AdSense é inserido no <head> de cada página pelo build.js.
  const adsEnabled = Boolean(CONFIG.adClient);
  const adSlot = (slotId) => {
    if (!adsEnabled || !slotId) return "";
    return `<div class="ad"><small>Publicidade</small>
      <ins class="adsbygoogle" style="display:block" data-ad-client="${esc(CONFIG.adClient)}"
           data-ad-slot="${esc(slotId)}" data-ad-format="auto" data-full-width-responsive="true"></ins></div>`;
  };
  const activateAds = () => {
    if (!adsEnabled) return;
    app.querySelectorAll("ins.adsbygoogle").forEach(() => {
      try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch { /* bloqueado */ }
    });
  };

  // ---------- estado da sessão ----------
  let session = null;

  const startSession = (mode, pool, size, label) => {
    const picked = shuffle(pool).slice(0, size).map((q) => ({
      q,
      options: shuffle(q.o.map((text, i) => ({ text, ok: i === q.a }))),
      choice: null,
    }));
    session = { mode, label, items: picked, i: 0 };
    renderQuestion();
  };

  // ---------- ecrãs ----------
  function renderHome() {
    session = null;
    const pct = store.answered ? Math.round((store.correct / store.answered) * 100) : 0;
    const wrongPool = QUESTIONS.filter((q) => store.wrong.includes(q.id));
    app.innerHTML = `
      <h1>Treina para o exame de código</h1>
      <p class="lead">${QUESTIONS.length} perguntas com explicação. Grátis, sem registo, funciona no telemóvel.</p>

      <div class="card stats">
        <div><b>${store.answered}</b><span>respondidas</span></div>
        <div><b>${pct}%</b><span>certas</span></div>
        <div><b>${store.sessions}</b><span>sessões</span></div>
      </div>

      <button class="primary block" data-act="exam">Simulacro (${Math.min(CONFIG.examSize, QUESTIONS.length)} perguntas)</button>
      <button class="block" data-act="all">Treino geral com explicação</button>
      <button class="block" data-act="wrong" ${wrongPool.length ? "" : "disabled"}>Rever os meus erros (${wrongPool.length})</button>

      <h2>Treino por categoria</h2>
      <div class="chips">
        ${categories.map((c) => `<button data-cat="${esc(c)}">${esc(c)}</button>`).join("")}
      </div>
      ${adSlot(CONFIG.adSlotHome)}
    `;
    activateAds();
  }

  function renderQuestion() {
    const it = session.items[session.i];
    const total = session.items.length;
    const exam = session.mode === "exam";
    const answered = it.choice !== null;
    const showFeedback = answered && !exam;

    app.innerHTML = `
      <div class="meta"><span>${esc(session.label)} · ${session.i + 1}/${total}</span><span class="tag">${esc(it.q.c)}</span></div>
      <div class="progress"><i style="width:${(session.i / total) * 100}%"></i></div>
      <p class="q">${esc(it.q.q)}</p>
      ${it.options.map((o, idx) => {
        let cls = "opt";
        if (showFeedback) {
          if (o.ok) cls += " ok";
          else if (idx === it.choice) cls += " bad";
        } else if (exam && idx === it.choice) cls += " ok";
        return `<button class="${cls}" data-opt="${idx}" ${answered ? "disabled" : ""}>${esc(o.text)}</button>`;
      }).join("")}
      ${showFeedback ? `<div class="expl"><b>${it.options[it.choice].ok ? "Certo!" : "Errado."}</b> ${esc(it.q.e)}</div>` : ""}
      ${answered ? `<button class="primary block" data-act="next">${session.i + 1 === total ? "Ver resultado" : "Seguinte"}</button>` : ""}
      <button class="block" data-act="home">Sair</button>
    `;
  }

  function renderResult() {
    const items = session.items;
    const right = items.filter((it) => it.options[it.choice].ok).length;
    const ratio = right / items.length;
    const passed = ratio >= CONFIG.passRatio;
    const wrongItems = items.filter((it) => !it.options[it.choice].ok);
    const exam = session.mode === "exam";

    app.innerHTML = `
      <p class="meta">${esc(session.label)}</p>
      <p class="score ${exam ? (passed ? "pass" : "fail") : ""}">${right}/${items.length}</p>
      ${exam ? `<p class="${passed ? "pass" : "fail"}"><b>${passed ? "Aprovado no simulacro" : "Reprovado no simulacro"}</b>
        <span class="lead"> (critério deste simulador: ${Math.round(CONFIG.passRatio * 100)}% certas)</span></p>` : ""}
      ${adSlot(CONFIG.adSlotResult)}
      ${wrongItems.length ? `<h2>Para rever</h2><div class="card">${wrongItems.map((it) => `
        <div class="err">
          <p><b>${esc(it.q.q)}</b></p>
          <p>A tua resposta: ${esc(it.options[it.choice].text)}</p>
          <p class="pass">Certa: ${esc(it.options.find((o) => o.ok).text)}</p>
          <p class="lead">${esc(it.q.e)}</p>
        </div>`).join("")}</div>` : `<p>Sem erros. Excelente!</p>`}
      <button class="primary block" data-act="again">Repetir</button>
      <button class="block" data-act="home">Início</button>
    `;
    activateAds();
    window.scrollTo(0, 0);
  }

  // ---------- eventos ----------
  const begin = (mode) => {
    if (mode === "exam") startSession("exam", QUESTIONS, CONFIG.examSize, "Simulacro");
    else if (mode === "all") startSession("train", QUESTIONS, QUESTIONS.length, "Treino geral");
    else if (mode === "wrong") startSession("train", QUESTIONS.filter((q) => store.wrong.includes(q.id)), QUESTIONS.length, "Revisão de erros");
  };

  app.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn || btn.disabled) return;

    if (btn.dataset.cat) {
      startSession("train", QUESTIONS.filter((q) => q.c === btn.dataset.cat), QUESTIONS.length, btn.dataset.cat);
      return;
    }
    if (btn.dataset.opt !== undefined) {
      const it = session.items[session.i];
      it.choice = Number(btn.dataset.opt);
      const ok = it.options[it.choice].ok;
      store.answered += 1;
      if (ok) {
        store.correct += 1;
        store.wrong = store.wrong.filter((id) => id !== it.q.id);
      } else if (!store.wrong.includes(it.q.id)) {
        store.wrong.push(it.q.id);
      }
      save(store);
      renderQuestion();
      return;
    }

    switch (btn.dataset.act) {
      case "exam": case "all": case "wrong":
        lastMode = btn.dataset.act;
        begin(btn.dataset.act);
        break;
      case "next":
        if (session.i + 1 < session.items.length) { session.i += 1; renderQuestion(); }
        else { store.sessions += 1; save(store); renderResult(); }
        break;
      case "again":
        if (lastMode) begin(lastMode); else renderHome();
        break;
      case "home":
        renderHome();
        break;
    }
  });

  let lastMode = null;

  // Ligação direta a uma categoria: index.html#cat=Velocidade
  const hashCat = decodeURIComponent((location.hash.match(/^#cat=(.+)$/) || [])[1] || "");
  if (hashCat && categories.includes(hashCat)) {
    startSession("train", QUESTIONS.filter((q) => q.c === hashCat), QUESTIONS.length, hashCat);
  } else {
    renderHome();
  }

  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
})();
