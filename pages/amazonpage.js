class AmazonPage {

    constructor(page) {
      this.page = page;
  
      // Locators
      this.searchBox = '#twotabsearchtextbox';
      this.searchButton = '#nav-search-submit-button';
      this.firstProduct = 'div.s-main-slot div[data-component-type="s-search-result"]';
      this.addToCartBtn = '#add-to-cart-button';
      this.productTitle = '#productTitle';
    }
  
    async openAmazon() {
      await this.page.goto('https://www.amazon.in/');
    }
  
    async searchProduct(product) {
      await this.page.fill(this.searchBox, product);
      await this.page.click(this.searchButton);
    }
  
    async clickFirstProduct() {
      await this.page.locator(this.firstProduct).first().click();
    }
  
    async addToCart() {
      await this.page.click(this.addToCartBtn);
    }
  
  }
  
  module.exports = { AmazonPage };