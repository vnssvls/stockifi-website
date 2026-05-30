/**
 * Full-page screenshots of competitor homepages using the installed Google Chrome.
 * Setup (one-time):  npm install puppeteer-core --prefix <this scripts dir>
 * Run:               node capture-competitor-shots.js <output-dir>
 */
const puppeteer = require('puppeteer-core');
const path = require('path');

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const OUT = process.argv[2] || '.';

const sites = [
  ['apicbase', 'https://get.apicbase.com/'],
  ['supy', 'https://supy.io/'],
  ['tenzo', 'https://www.gotenzo.com/'],
  ['marginedge', 'https://www.marginedge.com/'],
  ['foodnotify', 'https://www.foodnotify.com/en/'],
  ['nory', 'https://www.nory.ai/'],
  ['marketman', 'https://www.marketman.com/'],
  ['wisk', 'https://www.wisk.ai/'],
  ['craftable', 'https://craftable.com/'],
  ['restaurant365', 'https://www.restaurant365.com/'],
  ['meez', 'https://www.getmeez.com/'],
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: 'new',
    args: ['--no-sandbox', '--hide-scrollbars', '--disable-dev-shm-usage'],
  });
  for (const [name, url] of sites) {
    const page = await browser.newPage();
    try {
      await page.setViewport({ width: 1440, height: 1000, deviceScaleFactor: 1 });
      await page.setUserAgent(
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36'
      );
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
      // best-effort cookie/consent dismiss
      await page.evaluate(() => {
        const rx = /^(accept|agree|got it|allow all|i understand|ok|accept all)/i;
        for (const b of Array.from(document.querySelectorAll('button, a'))) {
          if (rx.test((b.textContent || '').trim())) { try { b.click(); } catch (e) {} }
        }
      });
      await sleep(2000);
      // scroll through to trigger lazy-loaded images, then back to top
      await page.evaluate(async () => {
        await new Promise((res) => {
          let y = 0; const t = setInterval(() => {
            window.scrollBy(0, 800); y += 800;
            if (y >= document.body.scrollHeight) { clearInterval(t); res(); }
          }, 80);
        });
        window.scrollTo(0, 0);
      });
      await sleep(1500);
      await page.screenshot({ path: path.join(OUT, name + '.png'), fullPage: true });
      console.log('OK   ', name);
    } catch (e) {
      console.log('FAIL ', name, e.message);
    }
    await page.close();
  }
  await browser.close();
})();
