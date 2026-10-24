// Gera a pasta dist/ pronta a publicar (páginas por categoria para o Google, sitemap, robots, ads.txt).
// Uso:  node build.js https://O-TEU-DOMINIO.pt
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = __dirname;
const OUT = path.join(ROOT, process.env.OUT_DIR || "dist");
const SITE = (process.argv[2] || "https://O-TEU-DOMINIO.pt").replace(/\/$/, "");

// ---------- ler config e perguntas ----------
const ctx = vm.createContext({});
vm.runInContext(
  fs.readFileSync(path.join(ROOT, "config.js"), "utf8") +
  fs.readFileSync(path.join(ROOT, "questions.js"), "utf8") +
  fs.readFileSync(path.join(ROOT, "guias.js"), "utf8") +
  ";this.CONFIG = CONFIG; this.QUESTIONS = QUESTIONS; this.GUIAS = GUIAS;",
  ctx
);
const { CONFIG, QUESTIONS, GUIAS } = ctx;

// Baralha as opções (de forma estável, sempre igual entre builds) para a resposta certa
// não ficar quase sempre na mesma posição nas páginas estáticas.
QUESTIONS.forEach((q, idx) => {
  let seed = (idx + 1) * 2654435761;
  const rnd = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296);
  const opts = q.o.map((text, i) => ({ text, ok: i === q.a }));
  for (let i = opts.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [opts[i], opts[j]] = [opts[j], opts[i]];
  }
  q.o = opts.map((o) => o.text);
  q.a = opts.findIndex((o) => o.ok);
});

const esc = (t) => String(t).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const slug = (t) => t.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const categories = [...new Set(QUESTIONS.map((q) => q.c))];
const byCat = (c) => QUESTIONS.filter((q) => q.c === c);
const hasEmail = Boolean(CONFIG.contactEmail);
const email = hasEmail ? esc(CONFIG.contactEmail) : "";
const warnings = [];
if (!CONFIG.contactEmail) warnings.push("contactEmail vazio em config.js (as secções de contacto ficam omitidas nas páginas Sobre/Privacidade).");
if (SITE.includes("O-TEU-DOMINIO")) warnings.push("Sem domínio: o sitemap usa um endereço de exemplo. Volta a correr: node build.js https://teu-dominio.pt");

// ---------- peças comuns ----------
const adScript = CONFIG.adClient
  ? `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${esc(CONFIG.adClient)}" crossorigin="anonymous"></script>`
  : "";

const headExtra = (urlPath) =>
  `<link rel="canonical" href="${SITE}/${urlPath}">\n  ${adScript}`;

const adBlock = (slot) =>
  CONFIG.adClient && slot
    ? `<div class="ad"><small>Publicidade</small><ins class="adsbygoogle" style="display:block" data-ad-client="${esc(CONFIG.adClient)}" data-ad-slot="${esc(slot)}" data-ad-format="auto" data-full-width-responsive="true"></ins><script>(adsbygoogle=window.adsbygoogle||[]).push({});</script></div>`
    : "";

const page = ({ title, desc, urlPath, depth = 0, body }) => {
  const up = "../".repeat(depth);
  return `<!doctype html>
<html lang="pt-PT">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(desc)}">
  <meta name="theme-color" content="#1d4ed8">
  <link rel="icon" href="${up}icon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="${up}style.css">
  ${headExtra(urlPath)}
</head>
<body>
  <header class="top">
    <a class="brand" href="${up}./"><img src="${up}icon.svg" alt="" width="28" height="28"><span>Código da Estrada</span></a>
    <nav class="nav"><a href="${up}perguntas/">Perguntas</a><a href="${up}guias/">Guias</a><a href="${up}sobre.html">Sobre</a></nav>
  </header>
  <main class="page">
${body}
  </main>
  <footer class="foot">
    <p>Conteúdo informativo e de treino. Não substitui o manual oficial nem a legislação em vigor – confirma sempre no <a href="https://www.imt-ip.pt" target="_blank" rel="noopener">IMT</a>.</p>
    <p><a href="${up}sobre.html">Sobre</a> · <a href="${up}privacidade.html">Privacidade e cookies</a></p>
  </footer>
</body>
</html>
`;
};

const write = (rel, content) => {
  const file = path.join(OUT, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
};

// ---------- preparar dist/ ----------
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });
for (const f of ["style.css", "app.js", "questions.js", "config.js", "icon.svg", "manifest.webmanifest", "sw.js"]) {
  fs.copyFileSync(path.join(ROOT, f), path.join(OUT, f));
}

// index.html (a app)
write("index.html", fs.readFileSync(path.join(ROOT, "index.html"), "utf8")
  .replace("<!--HEAD-->", headExtra("")));

// páginas de perguntas por categoria
const urls = ["", "perguntas/", "guias/", "sobre.html", "privacidade.html"];
for (const c of categories) {
  const qs = byCat(c);
  const file = `perguntas/${slug(c)}.html`;
  urls.push(file);
  const articles = qs.map((q, i) => `
    <article class="card">
      <h2 class="q">${i + 1}. ${esc(q.q)}</h2>
      <ol class="qlist">${q.o.map((o) => `<li>${esc(o)}</li>`).join("")}</ol>
      <details><summary>Ver resposta</summary>
        <p><b>Resposta certa:</b> ${esc(q.o[q.a])}</p>
        <p>${esc(q.e)}</p>
      </details>
    </article>`).join("\n");
  write(file, page({
    title: `${c}: perguntas de código da estrada com respostas`,
    desc: `${qs.length} perguntas de ${c.toLowerCase()} para o exame de código da estrada, com resposta e explicação. Treina grátis.`,
    urlPath: file, depth: 1,
    body: `    <h1>${esc(c)} – perguntas do código da estrada</h1>
    <p class="lead">${qs.length} perguntas com resposta e explicação. Para treinar com correção automática, usa o <a href="../index.html#cat=${encodeURIComponent(c)}">treino de ${esc(c)}</a>.</p>
    ${adBlock(CONFIG.adSlotPage)}
${articles}
    <a class="btn primary block" style="text-align:center;text-decoration:none" href="../index.html#cat=${encodeURIComponent(c)}">Treinar ${esc(c)} agora</a>
    <p><a href="./">← Todas as categorias</a></p>`,
  }));
}

// guias (artigos)
const TODAY = new Date().toISOString().slice(0, 10);
const fmtDate = (iso) => new Date(iso + "T00:00:00Z").toLocaleDateString("pt-PT", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
for (const g of GUIAS) {
  const file = `guias/${g.slug}.html`;
  urls.push(file);
  const others = GUIAS.filter((x) => x.slug !== g.slug).map((x) => `<li><a href="${x.slug}.html">${esc(x.title)}</a></li>`).join("");
  write(file, page({
    title: `${g.title} – Código da Estrada`,
    desc: g.desc,
    urlPath: file, depth: 1,
    body: `    <h1>${esc(g.title)}</h1>
    <p class="lead">${esc(g.desc)}</p>
    ${adBlock(CONFIG.adSlotPage)}
${g.body}
    <h2>Treina este tema</h2>
    <p>Põe em prática com perguntas de <b>${esc(g.cat)}</b>, com correção e explicação.</p>
    <a class="btn primary block" style="text-align:center;text-decoration:none" href="../index.html#cat=${encodeURIComponent(g.cat)}">Treinar ${esc(g.cat)}</a>
    <h2>Outros guias</h2>
    <ul>${others}</ul>
    <p class="lead">Atualizado em ${fmtDate(TODAY)}. Conteúdo informativo, baseado no Código da Estrada e em fontes que citam a legislação. Pode estar desatualizado: confirma sempre no <a href="https://www.imt-ip.pt" target="_blank" rel="noopener">IMT</a> ou na <a href="https://www.ansr.pt" target="_blank" rel="noopener">ANSR</a>.</p>`,
  }));
}
write("guias/index.html", page({
  title: "Guias do código da estrada",
  desc: "Guias práticos sobre velocidade, álcool, pontos na carta, estacionamento, luzes, ultrapassagens e muito mais.",
  urlPath: "guias/", depth: 1,
  body: `    <h1>Guias do código da estrada</h1>
    <p class="lead">${GUIAS.length} guias com as regras mais perguntadas no exame, explicadas de forma simples.</p>
    <div class="catgrid">
${GUIAS.map((g) => `      <a href="${g.slug}.html"><b>${esc(g.title)}</b><br><span>${esc(g.desc)}</span></a>`).join("\n")}
    </div>`,
}));

// índice de perguntas
write("perguntas/index.html", page({
  title: "Perguntas do código da estrada por categoria",
  desc: `Consulta ${QUESTIONS.length} perguntas do exame de código da estrada, organizadas por categoria, com resposta e explicação.`,
  urlPath: "perguntas/", depth: 1,
  body: `    <h1>Perguntas do código da estrada</h1>
    <p class="lead">${QUESTIONS.length} perguntas em ${categories.length} categorias. Escolhe um tema para estudar.</p>
    <div class="catgrid">
${categories.map((c) => `      <a href="${slug(c)}.html"><b>${esc(c)}</b> <span>· ${byCat(c).length} perguntas</span></a>`).join("\n")}
    </div>
    <p><a class="btn primary block" style="text-align:center;text-decoration:none" href="../index.html">Fazer um simulacro</a></p>`,
}));

// sobre
write("sobre.html", page({
  title: "Sobre este site – Código da Estrada",
  desc: "Quem somos, como funciona este site de treino para o exame de código da estrada e como corrigir erros.",
  urlPath: "sobre.html",
  body: `    <h1>Sobre este site</h1>
    <p>Este é um site gratuito de treino para o exame teórico de condução em Portugal. Tem simulacros, treino por categoria com explicação e revisão automática dos teus erros. Funciona no telemóvel e também sem internet.</p>
    <h2>Como funciona</h2>
    <p>O teu progresso fica guardado apenas no teu dispositivo. Não é necessário registo. O site pode ser financiado por anúncios.</p>
    <h2>Fiabilidade do conteúdo</h2>
    <p>As perguntas são de treino e foram escritas com base no Código da Estrada. A legislação muda: confirma sempre no <a href="https://www.imt-ip.pt" target="_blank" rel="noopener">IMT</a> e no teu manual de ensino. Este site não substitui as aulas de uma escola de condução.</p>
${hasEmail ? `    <h2>Encontraste um erro?</h2>
    <p>Diz-nos. Escreve para <strong>${email}</strong> com a pergunta e a correção sugerida e atualizamos o site.</p>` : ""}`,
}));

// privacidade
write("privacidade.html", page({
  title: "Privacidade e cookies – Código da Estrada",
  desc: "Como este site trata dados, cookies e publicidade.",
  urlPath: "privacidade.html",
  body: `    <h1>Privacidade e cookies</h1>
    <h2>Que dados guardamos?</h2>
    <p>Este site não tem contas nem registo. O teu progresso (nº de respostas, erros a rever) fica guardado apenas no teu dispositivo, no armazenamento local do navegador. Não o recebemos nem o partilhamos.</p>
    <h2>Publicidade</h2>
    <p>Este site pode apresentar anúncios do Google AdSense. O Google e os seus parceiros podem usar cookies e identificadores para mostrar anúncios, incluindo anúncios personalizados, e para medir o seu desempenho. Nos países do Espaço Económico Europeu, os anúncios personalizados só são apresentados com o teu consentimento, que podes dar ou retirar na mensagem de consentimento do site.</p>
    <p>Mais informação: <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">como o Google utiliza dados de sites parceiros</a> e <a href="https://adssettings.google.com" target="_blank" rel="noopener">definições de anúncios do Google</a>.</p>
    <h2>App Android</h2>
    <p>A app "Código da Estrada" não tem contas nem registo e não nos envia dados pessoais. O teu progresso (respostas, erros a rever) fica guardado apenas no teu telemóvel.</p>
    <p>A app mostra anúncios do Google AdMob. Para isso, o Google Mobile Ads SDK pode recolher e usar identificadores do dispositivo (por exemplo, o identificador de publicidade), o endereço IP e dados sobre a utilização dos anúncios, para os mostrar, medir e prevenir fraude. Nos países do Espaço Económico Europeu, a app pede o teu consentimento ao abrir; podes alterá-lo mais tarde em "Preferências de anúncios", no fundo do ecrã inicial. Nas definições do Android podes repor ou eliminar o identificador de publicidade.</p>
    <p>Mais informação: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener">como o Google usa dados em anúncios</a>.</p>
    <h2>Aviso</h2>
    <p>O conteúdo deste site é informativo e de treino. Pode conter erros ou estar desatualizado face à legislação. Não substitui o manual oficial nem o ensino numa escola de condução.</p>
    <p>Este projeto é independente e não tem qualquer ligação ao IMT, à ANSR ou a outras entidades oficiais. As perguntas e explicações são textos próprios, escritos com base na legislação; não são cópias de exames, manuais ou sites de terceiros.</p>
${hasEmail ? `    <h2>Contacto</h2>
    <p>Para questões sobre privacidade ou correções: <strong>${email}</strong>.</p>` : ""}`,
}));

// .nojekyll: o GitHub Pages não deve processar os ficheiros
write(".nojekyll", "");

// robots, sitemap, ads.txt, 404
write("robots.txt", `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`);
write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${SITE}/${u}</loc></url>`).join("\n")}\n</urlset>\n`);
if (CONFIG.adsTxt) {
  // Linha dada pelo Google. O mesmo conteúdo serve para ads.txt (sites) e app-ads.txt (apps).
  write("ads.txt", `${CONFIG.adsTxt}\n`);
  write("app-ads.txt", `${CONFIG.adsTxt}\n`);
} else if (CONFIG.adClient) {
  write("ads.txt", `google.com, ${CONFIG.adClient.replace(/^ca-/, "")}, DIRECT, f08c47fec0942fa0\n`);
} else {
  warnings.push("adClient vazio: sem anúncios e sem ads.txt (normal até o AdSense aprovar o site).");
}
write("404.html", page({
  title: "Página não encontrada", desc: "Página não encontrada.", urlPath: "404.html",
  body: `    <h1>Página não encontrada</h1><p><a href="${SITE}/">Voltar ao início</a></p>`,
}));

console.log(`dist/ gerado: ${QUESTIONS.length} perguntas, ${categories.length} categorias, ${urls.length} páginas no sitemap.`);
warnings.forEach((w) => console.log("Aviso:", w));
