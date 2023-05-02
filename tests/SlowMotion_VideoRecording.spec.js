import { test, expect, chromium } from "@playwright/test";

test("Slow motion and video recording demo", async () => {
  const browser = await chromium.launch({ slowMo: 500, headless: false });

  const context = await browser.newContext({
    recordVideo: {
      dir: "./videos",
      size: { width: 800, height: 600 },
    },
  });

  const page = await context.newPage();

 
  await page.goto("https://admin-demo.nopcommerce.com/login");
  await page.getByLabel("Email:").click();
  await page.getByLabel("Email:").press("Meta+a");
  await page.getByLabel("Email:").press("Meta+c");
  await page.getByLabel("Email:").fill("admin@yourstore.com");
  await page.getByLabel("Password:").click();
  await page.getByLabel("Password:").press("Meta+a");
  await page.getByLabel("Password:").fill("admin");
  await page.getByRole("button", { name: "Log in" }).click();
  await page.getByRole("link", { name: "Logout" }).click();



  await context.close();
});
