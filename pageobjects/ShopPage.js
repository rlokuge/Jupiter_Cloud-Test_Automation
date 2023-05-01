import {
    SiteNavigationComponent
 } from './SiteNavigationComponent';
 
 /**
  * Page object class for the Shop page and extends the Site Navigation Class
  * 
  */
 class ShopPage extends SiteNavigationComponent {
 
    constructor(page) {
       super(page);
       this.itemImages = page.locator(".products.ng-scope img");
       this.allItemsInShop = page.locator(".product.ng-scope");
    }
    async addItemsToCart(shoppingList) {
       await this.itemImages.last().waitFor();
       let itemCount = await this.allItemsInShop.count();
       let itemList = Object.keys(shoppingList);
       let itemPriceList = {};
       let itemQuantity;
       let itemPrice;
 
       for (let j = 0; j < itemList.length; j++) {
          for (let i = 0; i < itemCount; i++) {
             if (await this.allItemsInShop.nth(i).locator(".product-title.ng-binding").textContent() === itemList[j]) {
                itemQuantity = Number(await shoppingList[itemList[j]]);
                itemPrice = await this.allItemsInShop.nth(i).locator("span").textContent();
                itemPriceList[itemList[j]] = itemPrice;
                for (let k = 0; k < itemQuantity; k++) {
                   await this.allItemsInShop.nth(i).locator(".btn.btn-success").click();
                }
                break;
             }
          }
       }
       return itemPriceList;
    }
 }
 module.exports = {
    ShopPage
 };