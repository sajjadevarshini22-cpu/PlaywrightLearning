import{Page,Locator} from  '@playwright/test';

export class InventoryPage{

    readonly page: Page;
    readonly productsTitle:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.productsTitle= page.locator('.title');

    }

    async verifyProductsPage()
    {
        await this.productsTitle.waitFor();
    }
}