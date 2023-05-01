/**
 * Page object class for Site Navigation component in the website
 * 
 */
class SiteNavigationComponent {

     constructor(page) {
        this.page = page;
        this.shopLink = page.locator("#nav-shop");
        this.contactLink = page.locator("#nav-contact");
        this.cartLink = page.locator("#nav-cart");
     }
  
     async goToShopPage() {
        await this.shopLink.click();
        await this.page.waitForURL('**/#/shop');
     }
  
     async goToContactPage() {
        await this.contactLink.click();
        await this.page.waitForURL('**/contact');
     }
  
     async goToCartPage() {
        await this.cartLink.click();
        await this.page.waitForURL('**/#/cart');
     }
  
  }
  module.exports = {
     SiteNavigationComponent
  };