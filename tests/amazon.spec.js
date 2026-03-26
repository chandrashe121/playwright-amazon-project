const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { SearchPage } = require('../pages/SearchPage');
const { ProductPage } = require('../pages/ProductPage');
const { CartPage } = require('../pages/CartPage');

test('Amazon POM Add to Cart Test', async ({ page }) => {

  const home = new HomePage(page);
  const search = new SearchPage(page);

  // Step 1: Open Amazon
  await home.openAmazon();

  // Step 2: Search product
  await home.searchProduct('laptop');

  // Step 3: Validate results
  const count = await search.getProductCount();
  console.log('Products:', count);
  await expect(count).toBeGreaterThan(0);

  // Step 4: Click first product (new tab)
  const [newPage] = await Promise.all([
    page.context().waitForEvent('page'),
    search.clickFirstProduct()
  ]);

  const product = new ProductPage(newPage);

  // Step 5: Validate title
  const title = await product.getTitle();
  console.log('Title:', title);
  await expect(title.toLowerCase()).toContain('laptop');

  // Step 6: Add to cart
  await product.addToCart();

  // Step 7: Verify cart
  const cart = new CartPage(newPage);
  const cartCount = await cart.getCartCount();

  console.log('Cart Count:', cartCount);
  await expect(parseInt(cartCount)).toBeGreaterThan(0);

  // Step 8: Wait (see browser)
  await newPage.waitForTimeout(5000);
});