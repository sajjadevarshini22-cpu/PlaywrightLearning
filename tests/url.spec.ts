import{test,expect} from '@playwright/test';

test('Verify playwright url',async({page}) =>{

    await page.goto('https://playwright.dev/');
    await expect(page).toHaveURL('https://playwright.dev/');

});