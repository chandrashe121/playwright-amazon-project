const { test, expect } = require('@playwright/test');

test('Amazon E2E Test - Search and Add to Cart', async ({ page }) => {

  // Open Amazon
  await page.goto('https://www.amazon.in/');

  // Search product
  await page.fill('#twotabsearchtextbox', 'mobile');
  await page.click('#nav-search-submit-button');

  // Wait for results
  await page.waitForSelector('div.s-main-slot');

  // Click first product
  const firstProduct = page.locator('div.s-main-slot div[data-component-type="s-search-result"]').first();
  await firstProduct.click();

  // Handle new tab
  const newPage = await page.context().waitForEvent('page');
  await newPage.waitForLoadState();

  // Validate product title exists
  const title = await newPage.locator('#productTitle').textContent();
  await expect(title).not.toBeNull();

  // Add to cart
  await newPage.click('#add-to-cart-button');

  // Validate cart message
  await expect(newPage.locator('#sw-atc-details-single-container')).toBeVisible();

});