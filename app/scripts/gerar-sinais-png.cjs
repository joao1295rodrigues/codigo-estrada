// Converte os SVG de ../imagens/sinais em PNG (app/assets/sinais) para a app os mostrar sem bibliotecas extra.
// Uso (precisa do Playwright e do Chromium): node scripts/gerar-sinais-png.cjs
const fs = require('fs');
const path = require('path');
const { chromium } = require(process.env.PLAYWRIGHT_PATH || 'playwright');

const SRC = path.join(__dirname, '..', '..', 'imagens', 'sinais');
const OUT = path.join(__dirname, '..', 'assets', 'sinais');
const used = require('./sinais-usados.json');

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch({ args: ['--disable-gpu', '--no-sandbox'] });
  const page = await browser.newPage({ viewport: { width: 400, height: 400 }, deviceScaleFactor: 1 });
  for (const key of used) {
    const svg = fs.readFileSync(path.join(SRC, `${key}.svg`), 'utf8');
    await page.setContent(`<!doctype html><body style="margin:0;background:transparent"><div style="width:400px;height:400px">${svg.replace('width="200" height="200"', 'width="400" height="400"')}</div></body>`);
    await page.locator('div').screenshot({ path: path.join(OUT, `${key}.png`), omitBackground: true });
  }
  await browser.close();
  console.log(`${used.length} PNG gerados em ${OUT}`);
})();
