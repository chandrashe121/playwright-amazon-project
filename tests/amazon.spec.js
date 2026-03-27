const { test, expect } = require('@playwright/test');

test('Amazon Test', async ({ page }) => {

  await page.goto('https://www.amazon.in/');

  // search product
  await page.fill('#twotabsearchtextbox', 'mobile');
  await page.click('#nav-search-submit-button');

  // click first product
  await page.locator('div.s-main-slot div[data-component-type="s-search-result"]').first().click();

});

 