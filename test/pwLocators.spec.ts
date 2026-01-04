import {test,expect, Locator}  from "@playwright/test";
test('Verify playwright built in locators', async({page})=>{

    // 1. page.getByAltText() - to locate an element, usually image, by its text alternative.
    
    await page.goto("https://demo.nopcommerce.com/");
    const logo:Locator = page.getByAltText("nopCommerce demo store");
    await expect(logo).toBeVisible();

    // 2. page.getByText()  - for non-interactive elements
    
    /*const text:Locator = page.getByText("Welcome to our store");
    await expect(text).toBeVisible();*/
    //await expect(page.getByText("Welcome to our store")).toBeVisible(); // complete string
    //await expect(page.getByText("Welcome to")).toBeVisible(); // sub string
    await expect(page.getByText(/welcome\s+To\s+Our\s+Store/i)).toBeVisible(); // Regular expression
 
    // 3. page.getByRole(); - for interactive elements
    await page.getByRole("link",{name:'Register'}).click();
    await expect(page.getByRole("heading", {name:'Register'})).toBeVisible();

    // 4. page.getByLabel();
    await page.getByLabel('First name:').fill("Siva Nagaraju");
    await page.getByLabel('Last name:').fill("Gogasani");
    await page.getByLabel('Email:').fill("Nagaraju0100@gmail.com");


    // 5. page.getByPlaceholder();
    await page.getByPlaceholder("Search store").fill('Apple Mac Book Pro');

   // 6. page.getByTitle();
   // 7. page.getByTestId();


})