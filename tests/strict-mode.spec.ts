import { test } from '@playwright/test';

test('Demonstrate strict mode', async ({ page }) => {
  await page.setContent(`
    <button>Save</button>
    <button>Save</button>
  `);

  // Uncomment this line to see strict mode error
  // await page.getByRole('button', { name: 'Save' }).click();

  // Correct approach
  await page.getByRole('button', { name: 'Save' }).first().click();
});