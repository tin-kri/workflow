import { test, expect } from "@playwright/test";

test.describe("login", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/login");
    // Added this to help with the timeout issues
    await page.waitForLoadState("networkidle");
  });

  test("user can successfully log in with valid credentials", async ({
    page,
  }) => {
    // Fill and submit login form
    await page.locator("input[name='email']").fill(process.env.TEST_USER_EMAIL);
    await page
      .locator("input[name='password']")
      .fill(process.env.TEST_USER_PASSWORD);
    await page.getByRole("button", { name: "Login" }).click();

    // Wait for any navigation or UI changes
    await page.waitForTimeout(5000);

    //Success if logout button is visible
    await expect(page.getByRole("button", { name: "Logout" })).toBeVisible();
  });

  test("user sees an error message with invalid credentials", async ({
    page,
  }) => {
    // Fill and submit login form with invalid password
    await page.locator("input[name='email']").fill(process.env.TEST_USER_EMAIL);
    await page.locator("input[name='password']").fill("wrongpassword");
    await page.getByRole("button", { name: "Login" }).click();

    // Wait for the message container to be populated with content
    await page.waitForSelector("#message-container:not(:empty)", {
      timeout: 30000,
    });

    // Verify we're still on login page
    expect(page.url()).toContain("/login");

    // Check for error message content
    const messageContent = await page.locator("#message-container").innerText();
    expect(messageContent).toContain("Invalid email or password");

    // Also verify the form is still visible (login failed)
    await expect(page.locator("input[name='email']")).toBeVisible();
  });
});
