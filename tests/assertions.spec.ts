import{expect,test} from '@playwright/test';

test('Practice Playwright assertions', async({page})=>{

    await page.goto('https://playwright.dev/');

    await expect(page).toHaveTitle(/Playwright/);

    await expect(page).toHaveURL('https://playwright.dev/');
    await expect(page.locator('h1')).toBeVisible();

    await expect(page.locator('h1')).toContainText('Playwright');

    await page.getByRole('link',{name:'Get started'}).click();

    await expect(page).toHaveURL(/.*intro/);

    await expect(page.locator('h1')).toHaveText('Installation');
});