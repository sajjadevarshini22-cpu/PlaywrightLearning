import{test,expect} from '@playwright/test';

test('Click get started', async({page})=>{
    await page.goto('https://playwright.dev');

    await page.getByRole('link',{name:'Get started'}).click();

    await expect(page).toHaveURL('Playwright');

    await page.getByRole
});