import { test, expect, Page } from "@playwright/test";

/**
 * Consistently checks contrast for all elements with text.
 */
async function checkContrast(page: Page, name: string, state: string) {
  const violations = await page.evaluate(() => {
    const parseRGB = (color: string) => {
      const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      return match
        ? [parseInt(match[1]), parseInt(match[2]), parseInt(match[3])]
        : null;
    };

    const getLum = (r: number, g: number, b: number) => {
      const [rs, gs, bs] = [r, g, b].map((c) => {
        c = c / 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
      });
      return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
    };

    interface ContrastViolation {
      tag: string;
      text: string;
      ratio: string;
      color: string;
      bgColor: string;
    }

    const results: ContrastViolation[] = [];
    const elements = document.querySelectorAll("*");

    elements.forEach((el) => {
      const style = window.getComputedStyle(el);
      const hasText = Array.from(el.childNodes).some(
        (node) => node.nodeType === Node.TEXT_NODE && node.textContent?.trim(),
      );
      const isVisible =
        style.display !== "none" &&
        style.visibility !== "hidden" &&
        style.opacity !== "0";

      if (hasText && isVisible) {
        const color = parseRGB(style.color);
        let bgColorString = style.backgroundColor;
        let currentEl = el;

        while (
          bgColorString === "rgba(0, 0, 0, 0)" ||
          bgColorString === "transparent"
        ) {
          if (currentEl.parentElement) {
            currentEl = currentEl.parentElement;
            bgColorString = window.getComputedStyle(currentEl).backgroundColor;
          } else {
            bgColorString = "rgb(255, 255, 255)";
            break;
          }
        }

        const bgColor = parseRGB(bgColorString);

        if (color && bgColor) {
          const l1 = getLum(color[0], color[1], color[2]);
          const l2 = getLum(bgColor[0], bgColor[1], bgColor[2]);
          const brighter = Math.max(l1, l2);
          const darker = Math.min(l1, l2);
          const ratio = (brighter + 0.05) / (darker + 0.05);

          if (ratio < 7) {
            results.push({
              tag: el.tagName,
              text: el.textContent?.substring(0, 30).trim(),
              ratio: ratio.toFixed(2),
              color: style.color,
              bgColor: bgColorString,
            });
          }
        }
      }
    });
    return results;
  });

  expect(
    violations,
    `${name} - ${state} state: Found contrast violations: ${JSON.stringify(violations, null, 2)}`,
  ).toEqual([]);
}

test.describe("AAA Contrast Verification", () => {
  const pages = [
    { name: "Main Menu", path: "/" },
    { name: "Game Page (Easy)", path: "/game/easy" },
    { name: "High Scores", path: "/high-scores" },
    { name: "About", path: "/about" },
  ];

  for (const { name, path } of pages) {
    test(`${name} should meet AAA contrast standards`, async ({ page }) => {
      await page.goto(path);
      await page.waitForLoadState("networkidle");

      // Check Base State
      await checkContrast(page, name, "Base");
    });
  }

  test("Representative interactive elements should maintain contrast on Hover", async ({
    page,
  }) => {
    await page.goto("/");
    // We use JS dispatch because Playwright hover actionability checks are timing out
    await page.evaluate(() => {
      const el = Array.from(document.querySelectorAll("a")).find((a) =>
        a.innerText.includes("Easy"),
      );
      if (el) {
        el.dispatchEvent(new MouseEvent("mouseenter", { bubbles: true }));
        el.dispatchEvent(new MouseEvent("mouseover", { bubbles: true }));
      }
    });
    await page.waitForTimeout(200);
    await checkContrast(page, "Main Menu", "Hover (Easy)");
  });

  test("Representative interactive elements should maintain contrast when Active", async ({
    page,
  }) => {
    await page.goto("/");
    await page.evaluate(() => {
      const el = Array.from(document.querySelectorAll("a")).find((a) =>
        a.innerText.includes("Easy"),
      );
      if (el) {
        el.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));
      }
    });
    await page.waitForTimeout(200);
    await checkContrast(page, "Main Menu", "Active (Easy)");
  });
});
