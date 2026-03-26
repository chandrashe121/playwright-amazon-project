class CartPage {
    constructor(page) {
      this.page = page;
      this.cartCount = '#nav-cart-count';
    }
  
    async getCartCount() {
      await this.page.waitForSelector(this.cartCount);
      return await this.page.textContent(this.cartCount);
    }
  }
  
  module.exports = { CartPage };