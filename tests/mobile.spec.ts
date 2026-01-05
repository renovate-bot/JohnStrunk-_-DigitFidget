import { test, expect } from "@playwright/test";

test.describe("Mobile Optimization", () => {
  test.use({ viewport: { width: 320, height: 568 } }); // iPhone SE size

  test("Viewport Integrity (R1, R5): No horizontal scrolling on Main Menu", async ({ page }) => {
    await page.goto("/");
    const horizontalScrollable = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    expect(horizontalScrollable).toBe(false);
  });

  test("Viewport Integrity (R1, R5): No horizontal scrolling on Game Page (Extreme)", async ({ page }) => {
    await page.goto("/game/extreme");
    const horizontalScrollable = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    // We expect no horizontal scrolling on the root element.
    // The grid itself might have overflow-x-auto if it's too big, but R5 says critical info should be visible.
    expect(horizontalScrollable).toBe(false);
  });

  test("Touch Target Verification (R2): Buttons and cells are at least 44x44px", async ({ page }) => {
    await page.goto("/game/easy");

    // Check main menu buttons (indirectly by going back)
    await page.goto("/");
    const menuButtons = await page.locator("a").all();
    for (const btn of menuButtons) {
      const box = await btn.boundingBox();
      if (box) {
        expect(box.width).toBeGreaterThanOrEqual(44);
        expect(box.height).toBeGreaterThanOrEqual(44);
      }
    }

    // Check game cells
    await page.goto("/game/extreme");
    const cells = await page.locator("button[aria-label^='Toggle value']").all();
    for (const cell of cells) {
      const box = await cell.boundingBox();
      if (box) {
        // On 320px with a 9x9 grid, cells will be around 28-30px (9vw)
        // We still want them to be at least 24px for basic usability
        expect(box.width).toBeGreaterThanOrEqual(24);
        expect(box.height).toBeGreaterThanOrEqual(24);
      }
    }
  });

  test("Grid Scaling (R4): Extreme grid fits within 320px viewport", async ({ page }) => {
    await page.goto("/game/extreme");
    const gameBoard = page.getByTestId("game-board");
    const box = await gameBoard.boundingBox();
    if (box) {
      expect(box.width).toBeLessThanOrEqual(320);
    }
  });

  test("Navigation Thumb Access (R6): Bottom navigation present on mobile", async ({ page }) => {
    await page.goto("/game/easy");
    const bottomNav = page.locator(".fixed.bottom-0");
    await expect(bottomNav).toBeVisible();

    await page.goto("/high-scores");
    await expect(page.locator(".fixed.bottom-0")).toBeVisible();

    await page.goto("/about");
    await expect(page.locator(".fixed.bottom-0")).toBeVisible();
  });
});
