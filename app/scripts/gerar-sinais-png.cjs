// Converte os SVG de ../imagens/sinais em PNG (app/assets/sinais) para a app os mostrar sem bibliotecas extra.
// Uso (precisa do Playwright e do Chromium): node scripts/gerar-sinais-png.cjs
const fs = require('fs');
const path = require('path');
const { chromium } = require(process.env.PLAYWRIGHT_PATH || 'playwright');

const IMG = path.join(__dirname, '..', '..', 'imagens');
const OUT = path.join(__dirname, '..', 'assets', 'sinais');
const used = require('./sinais-usados.json');

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch({ args: ['--disable-gpu', '--no-sandbox'] });
  const page = await browser.newPage({ viewport: { width: 400, height: 400 }, deviceScaleFactor: 1 });
  for (const key of used) {
    // 'terceiros/A14' vem de imagens/terceiros/A14.svg; o resto vem de imagens/sinais/
    const svg = fs.readFileSync(path.join(IMG, key.startsWith('terceiros/') ? `${key}.svg` : `sinais/${key}.svg`), 'utf8');
    const open = svg.match(/<svg[^>]*>/)[0];
    const num = (n) => { const m = open.match(new RegExp(`\\s${n}="([\\d.]+)`)); return m ? m[1] : null; };
    let fixed = open.replace(/\swidth="[^"]*"/, '').replace(/\sheight="[^"]*"/, '');
    if (!/viewBox=/.test(open) && num('width') && num('height')) fixed = fixed.replace('<svg', `<svg viewBox="0 0 ${num('width')} ${num('height')}"`);
    fixed = fixed.replace('<svg', '<svg width="400" height="400"');
    await page.setContent(`<!doctype html><body style="margin:0;background:transparent"><div style="width:400px;height:400px">${svg.replace(open, fixed)}</div></body>`);
    await page.locator('div').screenshot({ path: path.join(OUT, `${key.replace('/', '-')}.png`), omitBackground: true });
  }
  await browser.close();
  console.log(`${used.length} PNG gerados em ${OUT}`);
})();
