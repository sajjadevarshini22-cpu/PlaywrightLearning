import { test, expect} from '@playwright/test';

test.beforeAll(async()=>{
    console.log('Test suite started');
});

test.beforeEach(async({page})=>{
    await page.goto('https://playwright.dev/');
});

test.afterEach(async({page})=>{
    await page.screenshot({
        path:'screenshots/after-each.png',
        fullPage:true
    });
});

test.afterAll(async()=>{
    console.log('Test suite completed');
});

test('Verify title',async({page})=>
{
    await expect(page).toHaveTitle(/Playwright/);
});

test('Verify heading is visible',async({page})=>{
    await expect(page.locator('h1')).toBeVisible();
});
test('Verify Get Started link', async ({ page }) => {
  await expect(
    page.getByRole('link', { name: 'Get started' })
  ).toBeVisible();
});
