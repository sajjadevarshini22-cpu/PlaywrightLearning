import{test,expect} from '@playwright/test';
import{login} from '../utils/login';

test('Login using reusable function',async({page})=>
{
    await login(page);

    await expect(page).toHaveURL(/inventory/);

    await expect(page.locator('.title')).toHaveText('Products');
})