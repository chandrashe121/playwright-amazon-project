class ProductPage {
    constructor(page) {
      this.page = page;
      this.productTitle = '#productTitle';
    }
  
    async getTitle() {
      await this.page.waitForSelector(this.productTitle);
      return await this.page.textContent(this.productTitle);
    }
  }
  
  module.exports = { ProductPage };