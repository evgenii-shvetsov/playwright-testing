import {test, expect} from '@playwright/test'

test("Selectors Demo", async({page})=>{
  await page.goto("https://www.saucedemo.com/");

  // invoke PAUSE to run the Playwright inspector
  await page.pause();

  // using any object property
  // await page.click("id=user-name")

  // clicking on the locator
  await page.locator("id=user-name").click();

  //filling the locator with information
  await page.locator("id=user-name").fill("Edison");

  // there is an option to copy a selector from DOM
  // but in this case we need to use square brackets
  // be carefull with double and single quotes
   await page.locator('[id="user-name"]').fill("Thomas")


   // using css selector
   // in the DOM right click on the element and "copy/copy Selector"
   //#login-button
   await page.locator("#login-button").click()
})