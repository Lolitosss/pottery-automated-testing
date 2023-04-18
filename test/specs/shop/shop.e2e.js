import ShopPage from '../../pageobjects/shop.page.js';
import { Credentials } from '../../../helper/credentials.js';

describe('Shop application', () => {
    it('should redirect to shop page', async () => {
        await ShopPage.open();
    });

    it('should redirect to shop page through shop link', async () => {
        await ShopPage.accessCategories();

    });

    it('should add product to a cart', async () => {
        await ShopPage.addToCart()

     
    });
});