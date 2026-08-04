import {expect,test} from '@playwright/test';

test('Use page fixture', async({page})=>
{
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
});

test('Use context fixture',async({context})=>
{
    const page= await context.newPage();

    await page.goto('https://playwright.dev/');

    await expect(page.locator('h1')).toBeVisible();
})