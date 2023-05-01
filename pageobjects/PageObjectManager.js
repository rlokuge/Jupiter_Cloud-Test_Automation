import {
    HomePage
 } from './HomePage';
 import {
    ContactPage
 } from './ContactPage';
 import {
    ShopPage
 } from './ShopPage';
 import {
    CartPage
 } from './CartPage';
 
 /**
  * Page object manager for all the page object classes
  * 
  */
 
 class PageObjectManager {
    constructor(page) {
       this.page = page;
       this.homePage = new HomePage(this.page);
       this.contactPage = new ContactPage(this.page);
       this.shopPage = new ShopPage(this.page);
       this.cartPage = new CartPage(this.page);
    }
 
    getHomePage() {
       return this.homePage;
    }
 
    getContactPage() {
       return this.contactPage;
    }
 
    getShopPage() {
       return this.shopPage;
    }
 
    getCartPage() {
       return this.cartPage;
    }
 
 }
 export default PageObjectManager;