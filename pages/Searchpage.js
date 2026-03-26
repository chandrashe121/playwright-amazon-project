class SearchPage {
    constructor(page) {
      this.page = page;
      this.products = 'div[data-component-type="s-search-result"]';
    }
  
    async getProductCount() {
      await this.page.waitForSelector(this.products);
      return await this.page.locator(this.products).count();
    }
  
    async clickFirstProduct() {
      return await this.page.locator(this.products).first().click();
    }
  }
  
  module.exports = { SearchPage };