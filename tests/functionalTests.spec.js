import { test, expect } from '@playwright/test';
import PageObjectManager from '../pageobjects/PageObjectManager';

const contactFormData =  JSON.parse(JSON.stringify(require("../utils/contactFormTestData.json"))); //Retrieve test data from given file and convert it into JavaScript object 
const shoppingListData =  JSON.parse(JSON.stringify(require("../utils/shoppingListTestData.json")));
let pageObjectManager; 
let homePage; 

test.describe.configure({mode:'parallel'}); //Default behaviour for the parallel or serial execution

test.beforeEach( async({page})=>
{
  pageObjectManager = new PageObjectManager(page);
  homePage = pageObjectManager.getHomePage();
  await homePage.goToHomePage(); 

})

for(const data of contactFormData) 
{
  let i =+ 1;
test(`Testcase 1 - Validate error messages in the Contact form with dataset ${i}`, async ({page})=>
{
    await homePage.goToContactPage();
    const contactPage = pageObjectManager.getContactPage(); 
    await contactPage.completeContactForm("", "", "", "", ""); //Pass empty values into Contact form
    await contactPage.clickSubmit(); 
    expect((await contactPage.getHeaderMessage()).includes("but we won't get it unless you complete the form correctly.")).toBeTruthy(); //Verify the error message in the header
    expect((await contactPage.getForenameError()).includes("Forename is required")).toBeTruthy();  //Verify the error message with forename field  
    expect((await contactPage.getEmailError()).includes("Email is required")).toBeTruthy();  //Verify the error message with email field 
    expect((await contactPage.getMessageError()).includes("Message is required")).toBeTruthy(); //Verify the error message with message field 

    await contactPage.completeContactForm(data.forename, data.surname, data.email, data.phone, data.message); 
    expect((await contactPage.getHeaderMessage()).includes("tell it how it is.")).toBeTruthy(); //Verify that the header message is changed 
    expect(await contactPage.getForenameErrorElement()).toBeHidden(); //Verify the error messages are hidden for foreane field
    expect(await contactPage.getEmailErrorElement()).toBeHidden(); //Verify the error messages are hidden for email field
    expect(await contactPage.getMessageErrorElement()).toBeHidden(); //Verify the error messages are hidden for message field
});
}

for(const data of contactFormData)
{
  let i =+ 1;
test(`Testcase 2 - Verify the successful submission of the Contact form with dataset ${i}`, async ({page})=>
{ 
  let successMessage = "Thanks " + data.forename + ", we appreciate your feedback."; //Success message after submit the contact form 

    await homePage.goToContactPage();
    const contactPage = pageObjectManager.getContactPage(); 
    await contactPage.completeContactForm(data.forename, data.surname, data.email, data.phone, data.message); //Pass valid inputs into the contact form 
    await contactPage.clickSubmit(); 
    expect((await contactPage.getSuccessMessage()).includes(successMessage)).toBeTruthy(); //Verify that the success message is displayed after submit the form with valid values 
});
}

for(const shoppingList of shoppingListData)
{
  let i =+ 1;
test(`Testcase 3 - Verify the cart details with dataset ${i}`, async ({page})=>
{
  const shopPage = pageObjectManager.getShopPage(); 
  await homePage.goToShopPage();
  let itemPrices = await shopPage.addItemsToCart(shoppingList); //Send the shopping list with items and quantity to add the items to the cart and get list of pricess 
  let cartTotalCal = 0; 
  let itemNamesList = Object.keys(itemPrices);

  const cartPage = pageObjectManager.getCartPage(); 
  await shopPage.goToCartPage(); 
  expect(itemNamesList.length == await cartPage.getNumberOfItems()).toBeTruthy(); //Verify that the number of items provided in the Shopping list is equal to the number of items in the cart 

  for(let j = 0; j < itemNamesList.length; j++)
  {
    let itemDetails = await cartPage.getItemDetailsFromCart(itemNamesList[j]);
    expect(await itemDetails.Price == await itemPrices[itemNamesList[j]]).toBeTruthy();  //Verify the item price is correct in the cart
    expect(itemDetails.Quantity == await shoppingList[itemNamesList[j]]).toBeTruthy();  //Verify the item quantity is correct in the cart
    let itemSubotalCal = parseFloat(itemPrices[itemNamesList[j]].match(/\d+\.\d+/)[0]) * parseFloat(shoppingList[itemNamesList[j]]);  
    expect(parseFloat(itemDetails.Subtotal.match(/\d+\.\d+/)[0]) == itemSubotalCal).toBeTruthy(); //Verify the subtotal is calculated correctly for the given item in the cart
    cartTotalCal += itemSubotalCal; 
  }
  expect(await cartPage.getCartTotal() == cartTotalCal).toBeTruthy(); //Verify that the total amount is calculated correctly for the whole cart 
});
}
