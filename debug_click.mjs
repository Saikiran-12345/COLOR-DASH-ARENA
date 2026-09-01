import puppeteer from 'puppeteer';
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  console.log('Initial URL:', page.url());
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('div[role="button"]'));
    const classicBtn = btns.find(b => b.textContent.includes('Play Classic'));
    if (classicBtn) classicBtn.click();
  });
  await new Promise(r => setTimeout(r, 1000));
  console.log('After click URL:', page.url());
  console.log('Body text:', await page.evaluate(() => document.body.innerText.substring(0, 100).replace(/\n/g, ' ')));
  await browser.close();
})();
