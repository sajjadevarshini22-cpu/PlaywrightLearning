import{test,expect} from '@playwright/test';

import{LoginPage} from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test('Login using POM',async({page})=>{

    const loginPage =new LoginPage(page);
    const inventoryPage= new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user','secret_sauce');

    await inventoryPage.verifyProductsPage();

    await expect(page).toHaveURL(/inventory/);

    await expect(inventoryPage.productsTitle).toHaveText('Products');


});