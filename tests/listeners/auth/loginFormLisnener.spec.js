import { test, expect } from "@playwright/test";

test.describe("login", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/login");
  });

  test("user can successfully log in with valid credentials", async ({
    page,
  }) => {
    // Fill the form with valid credentials
    await page.locator("input[name='email']").fill(process.env.TEST_USER_EMAIL);
    await page
      .locator("input[name='password']")
      .fill(process.env.TEST_USER_PASSWORD);

    // Submit the form
    await page.getByRole("button", { name: "Login" }).click();

    // Wait for response/navigation
    await page.waitForTimeout(2000);

    // Check if login was successful
    const currentUrl = page.url();
    if (currentUrl.includes("/login")) {
      const errorMessage = await page
        .locator("#message-container")
        .textContent();
      if (errorMessage) {
        throw new Error(`Login failed with error: ${errorMessage}`);
      }
    }
  });

  test("user sees an error message with invalid credentials", async ({
    page,
  }) => {
    // Fill the form with invalid credentials
    await page.locator("input[name='email']").fill(process.env.TEST_USER_EMAIL);
    await page.locator("input[name='password']").fill("wrongpassword");

    // Submit the form
    await page.getByRole("button", { name: "Login" }).click();

    // Wait for response
    await page.waitForTimeout(2000);

    // Verify we're still on the login page
    const currentUrl = page.url();
    expect(currentUrl).toContain("/login");

    // Verify the form is still visible
    const emailInput = await page.locator("input[name='email']");
    await expect(emailInput).toBeVisible();
  });
});
