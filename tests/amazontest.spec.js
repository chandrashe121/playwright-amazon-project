const { test, expect } = require('@playwright/test');
const { AmazonPage } = require('../pages/amazonPage');

test('Amazon POM Test', async ({ page }) => {

  const amazon = new AmazonPage(page);

  await amazon.openAmazon();
  await amazon.searchProduct('mobile');

  await page.waitForSelector('div.s-main-slot');

  await amazon.clickFirstProduct();

  // Handle new tab
  const newPage = await page.context().waitForEvent('page');
  await newPage.waitForLoadState();

  const title = await newPage.locator('#productTitle').textContent();
  await expect(title).not.toBeNull();

  await newPage.click('#add-to-cart-button');

});