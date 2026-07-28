import { test, expect } from '@playwright/test';

test("Verify Playwright heading", async ({ page }) => {
    await page.goto('https://playwright.dev/');

    await expect(
    page.locator('h1')
).toBeVisible();
});