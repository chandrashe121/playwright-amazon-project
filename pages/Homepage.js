class HomePage {
    constructor(page) {
      this.page = page;
      this.searchBox = '#twotabsearchtextbox';
      this.searchButton = '#nav-search-submit-button';
    }
  
    async openAmazon() {
      await this.page.goto('https://www.amazon.in');
    }
  
    async searchProduct(product) {
      await this.page.fill(this.searchBox, product);
      await this.page.click(this.searchButton);
    }
  }
  
  module.exports = { HomePage };