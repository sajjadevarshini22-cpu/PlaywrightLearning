import {test, expect}  from '@playwright/test';

test('Practice waits and synchronization', async({page})=>{


    await page.goto('https://playwright.dev/');


    await page.waitForLoadState('load');

    await expect(page).toHaveTitle(/Playwright/);

    await page.getByRole('link', { name: 'Get started' }).click();

    await page.waitForURL(/.*intro/);

    await expect(page.locator('h1')).toHaveText('Installation');

    await page.screenshot({
        path:'screenshots/waits-page.png',
        fullPage:true
    });


});