import{test,expect} from '@playwright/test';

test('practice multiple locator strategies',async({page})=>{

    await page.goto('https://playwright.dev/');

    await page.getByText('Get started').click();

    await expect(page).toHaveURL(/.*intro/);

    await expect(page.getByRole('heading',{ name: 'Playwright enables reliable' })).toBeVisible();

    await expect(page.locator('h1')).toBeVisible();

    await page.screenshot({
        path:'screenshots/locator-practice.png',
        fullPage:true    });
});