import { SiteNavigationComponent } from './SiteNavigationComponent';

/**
 * Page object class for the Contact page and extends the Site Navigation Class
 * 
 */
class ContactPage extends SiteNavigationComponent {

    constructor(page)
    {
        super(page);
        this.forename = page.locator("#forename");
        this.surname = page.locator("#surname");
        this.email = page.locator("#email");
        this.phone = page.locator("#telephone");
        this.message = page.locator("#message");
        this.submitButton = page.locator(".btn-contact.btn.btn-primary");
        this.headerMessage = page.locator("#header-message");
        this.forenameError = page.locator("#forename-err");
        this.emailError = page.locator("#email-err");
        this.messageError = page.locator("#message-err");
        this.successMessage = page.locator(".alert.alert-success");
    }
    
    async completeContactForm(forename, surname, email, phone, message)
    {
        await this.forename.type(forename);
        await this.surname.type(surname);
        await this.email.type(email);
        await this.phone.type(phone);
        await this.message.type(message);    
    }

    async clickSubmit()
    {
        await this.submitButton.click(); 
    }

    async getSuccessMessage()
    {
        let successMessage = await this.successMessage.textContent();
        return successMessage; 
    }

    async getForenameError()
    {
        let forenameError = await this.forenameError.textContent();
        return forenameError; 
    }

    async getEmailError()
    {
        let emailError = await this.emailError.textContent();
        return emailError; 
    }

    async getMessageError()
    {
        let messageError = await this.messageError.textContent();
        return messageError; 
    }

    async getHeaderMessage()
    {
        return await this.headerMessage.textContent(); 
    }

    async getForenameErrorElement()
    {
        return await this.forenameError;   
    }

    async getEmailErrorElement()
    {
        return await this.emailError; 
    }

    async getMessageErrorElement()
    {
        return await this.messageError; 
    }
    
    }
    module.exports = {ContactPage};