import { SiteNavigationComponent } from './SiteNavigationComponent';

/**
 * Page object class for the Home page and extends the Site Navigation Class
 * 
 */
class HomePage extends SiteNavigationComponent {

    constructor(page)
    {
        super(page);
        this.shopLink = page.locator("#nav-shop");
        this.contactLink = page.locator("#nav-contact");   
    }
    
    async goToHomePage()
    {
        await this.page.goto('/');
    }
    
    }
    module.exports = {HomePage};