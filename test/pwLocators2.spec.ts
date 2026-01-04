// locator : identifies the web element
// DOM : Document object model

 // page.getByAltText()
 // page.getByAltText()
 //  page.getByText()
 
import {test,expect,Locator} from "@playwright/test"

test("verify PW built-in locators", async({page})=>{

    await page.goto("https://demo.nopcommerce.com/");


    // 1. page.getByAltText() - identifies images (and similar elements) based on the alt attribute.
    // use this locator when your element supports alt text such as img and area elements

    const logo:Locator =  page.getByAltText("nopCommerce demo store");
    await expect(logo).toBeVisible();
    // Note: Alt is an attribute of the element in DOM.

    // ************************************************************************

    // 2. page.getByText() - Find an element by the text it contains. 
    //                       You can match by sub string and exact string
    //                       Locate by visible text
    // Use this locator to find non interactive elements like div, span, p and h etc
    // For interactive elements like button, a, input, etc use role locator.

    // <p> welcome </p>  --> Here welcome is inner text/text
    // <div> hello </div> -->  
    // Note: Text is not an attribute of the element in DOM
   
   // const text:Locator = page.getByText("Welcome to our store")
   //  await expect(text).toBeVisible();
   
   //  combine the above two statements in to a single line
             
    //   await expect(page.getByText("Welcome to our store")).toBeVisible(); // exact string

    //   await expect(page.getByText("Welcome to")).toBeVisible(); // sub string

    //  Regular expression: start / and end with / forward slash
    //  Regular expression = /Welcome\s+to\s+our\s+store/i
    //    await expect(page.getByText(/Welcome\s+To\s+Our\s+Store/i)).toBeVisible();

//  ***************************************************************************************

    // 3. page.getByRole() - locating by role (role is not an attribute)
    
    /* 
        Role locators include buttons, check box, heading, links, list, tables
        and many more follow W3C specifications for ARIA role
        perfer for interactive element buttons, check box, heading, links, list, tables etc
    */

    // clicking on register button
    await page.getByRole("link", {name:'Register'}).click();

    // checking register heading is visible or not
    await expect(page.getByRole("heading", {name:'Register'})).toBeVisible(); // we can also use getByText()
    
// ****************************************************************************

    // 4. page.getByLabel() - Locate form control by label's text
    // when to use : Ideal for form fileds with visible labels
    await page.getByLabel('First name:').fill('Siva Nagaraju');
    await page.getByLabel('Last name:').fill('Gogasani');
    await page.getByLabel('Email:').fill('abc@gamil.com');
// ****************************************************************************

    // 5. page.getByPlaceholder() - 

    await page.getByPlaceholder('Search store').fill("Apple MacBook pro")

// ****************************************************************************
    // page.getByTitle() - To locate an elemet by its title attribute
    // when to use : when your element has meaningful title attribute.
    
    
    













    
   //  page.getByTestId() - 
})
