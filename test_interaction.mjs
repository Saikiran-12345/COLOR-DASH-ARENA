import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
  page.on('pageerror', err => console.log('BROWSER ERROR:', err.message));
  
  console.log("Navigating to localhost...");
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  
  console.log("Waiting for Play Classic button...");
  // Find a button that contains "Play Classic"
  const elements = await page.$$('div[role="button"]');
  let classicBtn = null;
  for (let el of elements) {
      const text = await page.evaluate(el => el.textContent, el);
      if (text.includes("Play Classic")) {
          classicBtn = el;
          break;
      }
  }
  
  if (!classicBtn) {
      console.log("Could not find Play Classic button! Page HTML:");
      console.log(await page.content());
      await browser.close();
      return;
  }
  
  console.log("Clicking Play Classic...");
  await classicBtn.click();
  await new Promise(r => setTimeout(r, 1000));
  
  console.log("Looking for color options in Classic mode...");
  const boxes = await page.$$('div.grid > div');
  console.log(`Found ${boxes.length} color boxes.`);
  
  if (boxes.length > 0) {
      console.log("Clicking the first box...");
      await boxes[0].click();
      await new Promise(r => setTimeout(r, 500));
      
      const text = await page.evaluate(() => document.body.innerText);
      console.log("Body text after click:");
      console.log(text.substring(0, 500));
  } else {
      console.log("No color boxes found! Page HTML:");
      console.log(await page.content());
  }
  
  await browser.close();
})();
