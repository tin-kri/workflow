// write a test that
// 1. navigates to the homepage

// 2. waits for the venue list to load

// 3 clicks the first venue

// 4. Verifies that when the venue details page loads
//    there are the words “Venue details” in the heading

import { test, expect } from "@playwright/test";

test.describe("venue navigation", () => {
  test("user can navigate to venue details page", async ({ page }) => {
    // 1. Navigates to the home page
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    // 2. Waits for the venue list to load
    await page.waitForSelector(
      "#venue-container:not(:has-text('Loading...'))",
      {
        timeout: 10000,
      },
    );
    await page.waitForSelector("#venue-container > *", {
      state: "visible",
      timeout: 10000,
    });

    // 3. Clicks the first venue
    const firstVenue = await page.locator("#venue-container > *").first();
    await firstVenue.click();
    await page.waitForLoadState("networkidle");

    // 4. Verifies that when the venue details page loads there are the words "Venue details" in the heading
    await page.waitForTimeout(10000); // Wait for any dynamic content to load

    // Specifically check the heading (h1) for "Venue details" text
    const heading = await page.locator("h1").textContent();
    expect(heading).toContain("Venue details");
  });
});
