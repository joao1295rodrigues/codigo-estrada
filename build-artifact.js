// Gera artifact/index.html: a app num só ficheiro, pronta a publicar como página do Claude.
// Uso:  node build-artifact.js
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const read = (f) => fs.readFileSync(path.join(ROOT, f), "utf8");

// O service worker não funciona nas páginas do Claude; o resto do app.js mantém-se igual.
const swBlock = /\n  if \("serviceWorker" in navigator[\s\S]*?\n  }\n/;
let app = read("app.js");
if (!swBlock.test(app)) throw new Error("bloco do service worker não encontrado em app.js");
app = app.replace(swBlock, "\n");

const icon = "data:image/svg+xml;base64," + Buffer.from(read("icon.svg")).toString("base64");

const css = `
:root {
  --bg: #f7f9fc;
  --card: #ffffff;
  --text: #0f172a;
  --muted: #475569;
  --line: #dde4ee;
  --brand: #1d4ed8;
  --brand-ink: #ffffff;
  --link: #1d4ed8;
  --ok: #15803d;
  --ok-bg: #dcfce7;
  --bad: #b91c1c;
  --bad-bg: #fee2e2;
}
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg: #0f172a; --card: #1e293b; --text: #f1f5f9; --muted: #a3b1c6; --line: #334155;
    --brand: #2563eb; --brand-ink: #ffffff; --link: #93c5fd;
    --ok: #4ade80; --ok-bg: #14532d; --bad: #f87171; --bad-bg: #7f1d1d;
    color-scheme: dark;
  }
}
:root[data-theme="dark"] {
  --bg: #0f172a; --card: #1e293b; --text: #f1f5f9; --muted: #a3b1c6; --line: #334155;
  --brand: #2563eb; --brand-ink: #ffffff; --link: #93c5fd;
  --ok: #4ade80; --ok-bg: #14532d; --bad: #f87171; --bad-bg: #7f1d1d;
  color-scheme: dark;
}

* { box-sizing: border-box; }
body {
  margin: 0;
  font: 16px/1.5 system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  background: var(--bg);
  color: var(--text);
}
.gutter { padding-left: max(16px, env(safe-area-inset-left, 0px)); padding-right: max(16px, env(safe-area-inset-right, 0px)); }

.top { background: var(--brand); padding-block: 12px; }
.brand { display: inline-flex; align-items: center; gap: 10px; color: var(--brand-ink); font-weight: 700; }
#app { max-width: 640px; margin: 0 auto; padding-block: 16px; min-height: 70vh; }

h1 { font-size: 1.5rem; line-height: 1.25; margin: 8px 0 4px; text-wrap: balance; }
h2 { font-size: 1.1rem; margin: 24px 0 8px; }
.lead { color: var(--muted); margin: 0 0 16px; }

.card { background: var(--card); border: 1px solid var(--line); border-radius: 14px; padding: 16px; margin: 12px 0; }
.stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; text-align: center; }
.stats b { display: block; font-size: 1.4rem; font-variant-numeric: tabular-nums; }
.stats span { color: var(--muted); font-size: .8rem; }

button {
  font: inherit; cursor: pointer; border-radius: 12px; border: 1px solid var(--line);
  background: var(--card); color: var(--text); padding: 12px 16px; text-align: left;
}
button:focus-visible { outline: 3px solid var(--link); outline-offset: 2px; }
.primary { background: var(--brand); color: var(--brand-ink); border-color: var(--brand); font-weight: 600; text-align: center; }
.block { display: block; width: 100%; margin: 8px 0; }
button:disabled { opacity: .55; cursor: not-allowed; }

.chips { display: flex; flex-wrap: wrap; gap: 8px; }
.chips button { padding: 8px 12px; border-radius: 999px; text-align: center; }

.progress { height: 6px; background: var(--line); border-radius: 99px; overflow: hidden; margin: 4px 0 12px; }
.progress i { display: block; height: 100%; background: var(--brand); }
.meta { display: flex; justify-content: space-between; gap: 8px; color: var(--muted); font-size: .85rem; }
.meta > * { min-width: 0; }
.tag { background: var(--line); border-radius: 99px; padding: 2px 10px; font-size: .75rem; }

.q { font-size: 1.15rem; font-weight: 600; margin: 8px 0 12px; }
.opt { display: block; width: 100%; margin: 8px 0; }
.opt:disabled { opacity: 1; cursor: default; color: var(--text); }
.opt.ok { background: var(--ok-bg); border-color: var(--ok); }
.opt.bad { background: var(--bad-bg); border-color: var(--bad); }
.expl { border-left: 4px solid var(--brand); padding: 8px 12px; margin: 12px 0; background: var(--card); border-radius: 0 10px 10px 0; }

.score { font-size: 2.4rem; font-weight: 800; margin: 0; font-variant-numeric: tabular-nums; }
.pass { color: var(--ok); }
.fail { color: var(--bad); }
.err { border-top: 1px solid var(--line); padding: 12px 0; }
.err:first-child { border-top: 0; }
.err p { margin: 4px 0; }

.foot { max-width: 640px; margin: 0 auto; padding-block: 16px; color: var(--muted); font-size: .8rem; }
.foot a { color: var(--link); }
`;

const html = `<title>Código da Estrada</title>
<meta name="claude:viewport-fit-sides" content="cover">
<style>${css}</style>

<header class="top gutter">
  <span class="brand"><img src="${icon}" alt="" width="28" height="28"><span>Código da Estrada</span></span>
</header>

<main id="app" class="gutter" aria-live="polite"></main>

<footer class="foot gutter">
  <p>Conteúdo informativo e de treino. Não substitui o manual oficial nem a legislação em vigor: confirma sempre no <a href="https://www.imt-ip.pt" target="_blank" rel="noopener">IMT</a>.</p>
  <p>Sem registo e sem anúncios nesta versão. O teu progresso fica guardado apenas neste dispositivo.</p>
</footer>

<script>
${read("config.js")}
</script>
<script>
${read("questions.js")}
</script>
<script>
${app}
</script>
`;

fs.mkdirSync(path.join(ROOT, "artifact"), { recursive: true });
fs.writeFileSync(path.join(ROOT, "artifact", "index.html"), html);
console.log("artifact/index.html:", Math.round(html.length / 1024), "KB");
