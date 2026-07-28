import {test,expect} from '@playwright/test';

test("Click get started and verify the navigation",async({page})=>{

    await page.goto('https://playwright.dev/'); 

    await page.getByRole('link', { name: 'Get started' }).click();

    await expect(page)
.toHaveURL(/.*intro/);

await expect(page.locator('h1')).toBeVisible();
await page.screenshot({
        path: 'screenshots/get-started-page.png',
        fullPage: true
});
});