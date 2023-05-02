// const { test, expect } = require("@playwright/test");
import {test,expect} from '@playwright/test';

test("Demo Login Test 1", async ({ page }) => {
  await page.goto("https://demo.applitools.com/");

  await expect(page).toHaveTitle("ACME demo app");
  await page.pause(); // we stop the execution and open the playwright inspector
  await page.getByPlaceholder("Enter your username").fill("Yev")
  await page.getByPlaceholder("Enter your password").fill('123456')

  
  await page.getByRole("link", { name: "Sign in" }).click('')
});
