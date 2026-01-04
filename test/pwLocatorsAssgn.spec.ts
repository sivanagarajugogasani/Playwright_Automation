import {test,expect} from "@playwright/test"
test('Verify PW-built in locators assgn', async({page})=>
{
    await page.goto("http://127.0.0.1:5500/test/app.html");
    
    // 1) page.getByRole():

    // Entering user name
    await page.getByRole("textbox",{name:'username'}).fill("SN185141");
   
    // Checking the check box
    await page.getByRole("checkbox",{name:'Accept Terms'}).check();
  
    // Verifying text is visible or not
    await expect(page.getByRole("heading",{name:"Navigation"})).toBeVisible();

    //**************************************************************************

    // 2) page.getByText()

    // checking string is prasent or not
    await expect(page.getByText("List item 1")).toBeVisible();
   
    //**************************************************************************

    // 3) page.getByLabel()

    // Filling form details
   // await page.waitForTimeout(2000);
    await page.getByLabel('Email Address:').fill("Test@gmail.com");
    await page.getByLabel('Password:').fill("abc@123");
    await page.getByLabel("Your Age:").fill("32");
    await page.getByRole("radio",{name:'Standard'}).check();
   
   // await page.waitForTimeout(2000);

    //**************************************************************************

    // 4) page.getByPlaceholder()

    // filling input box
    await page.getByPlaceholder('Enter your full name').fill("Siva Nagaraju Gogasani");
    await page.getByPlaceholder('Phone number (xxx-xxx-xxxx)').fill("8179719773");
    await page.getByPlaceholder('Type your message here...').fill("I will write something here");
   // await page.waitForTimeout(2000);

//**************************************************************************

    // 5) page.getByAltText()

    // Chekcing logo is present or not
    await expect(page.getByAltText('logo image')).toBeVisible();

//**************************************************************************

    // 6) page.getByTitle()
    await expect(page.getByTitle('Home page link')).toBeVisible();

    //**************************************************************************   

    // 7. page.getByTestId()

    await expect(page.getByTestId('profile-name')).toBeVisible();
    await expect(page.getByTestId('profile-email')).toBeVisible();


})