import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Digit Fidget/);
});

test("has landing page text", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Digit Fidget", { exact: true })).toBeVisible();
});
