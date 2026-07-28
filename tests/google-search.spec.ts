import{test,expect} from '@playwright/test';

test('verify google search',async({page})=>{

    await page.goto('https://www.google.com');

    const acceptButton = page.getByRole('button', { name: /accept all|i agree/i });

  if (await acceptButton.isVisible().catch(() => false)) {
    await acceptButton.click();
  }
await page.locator('textarea[name="q"]').fill('Playwright testing');
await page.keyboard.press('Enter');

await expect(page).toHaveURL(/.*search/);
})