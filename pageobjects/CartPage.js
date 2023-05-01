import {
    SiteNavigationComponent
 } from './SiteNavigationComponent';
 
 /**
  * Page object class for the Cart page and extends the Site Navigation Class
  * 
  */
 class CartPage extends SiteNavigationComponent {
 
    constructor(page) {
       super(page);
       this.allItemsInShop = page.locator("tbody tr");
       this.cartTotal = page.locator(".total.ng-binding");
    }
 
    async getItemDetailsFromCart(itemName) {
       await this.waitForCartToLoad();
       let itemCount = await this.allItemsInShop.count();
       let itemDetails = {};
 
       for (let i = 0; i < itemCount; i++) {
          if ((await this.allItemsInShop.nth(i).locator("td:nth-child(1)").textContent()).trim() === itemName) {
             itemDetails["Price"] = await this.allItemsInShop.nth(i).locator("td:nth-child(2)").textContent();
             itemDetails["Quantity"] = await this.allItemsInShop.nth(i).locator("td:nth-child(3) input").getAttribute('value');
             itemDetails["Subtotal"] = await this.allItemsInShop.nth(i).locator("td:nth-child(4)").textContent();
             break;
          }
       }
       return itemDetails;
    }
 
    async getCartTotal() {
       let cartTotalText = await this.cartTotal.textContent();
       return await cartTotalText.split(":")[1].trim();
    }
 
    async waitForCartToLoad() {
       await this.allItemsInShop.last().waitFor();
    }
 
    async getNumberOfItems() {
       await this.waitForCartToLoad();
       return await this.allItemsInShop.count();
    }
 }
 module.exports = {
    CartPage
 };