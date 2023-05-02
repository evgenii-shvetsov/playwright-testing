// const { test, expect } = require("@playwright/test");
import { test, expect } from "@playwright/test";

test("Demo Login Test 1", async ({ page }) => {
  await page.goto("https://demo.applitools.com/");

  await expect(page).toHaveTitle("ACME demo app");
  await page.pause(); // we stop the execution and open the playwright inspector
  await page.getByPlaceholder("Enter your username").fill("Yev");
  await page.getByPlaceholder("Enter your password").fill("123456");

  await page.getByRole("link", { name: "Sign in" }).click("");
});

test.only("Demo Login Test 2", async ({ page }) => {
    // this is "recorded test"
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  await page.pause(); // we stop the execution and open the playwright inspector

  await page.getByPlaceholder("Username").click();
  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").click();
  await page.getByPlaceholder("Password").fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("banner").getByText("Alex Popoescu").click();
  await page.getByRole("menuitem", { name: "Logout" }).click();
});
