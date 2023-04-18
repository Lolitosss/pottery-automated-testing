import Page from './page.js';
class ShopPage extends Page {
    get shopAccessBtn () {
        return $('a=SHOP');
    }

    get addToCartBtn () {
        return $('button=Add to card');
    }
    get categoryTitle () {
        return $('span=Coffee Set');
    }

    async accessCategories () {
        await this.shopAccessBtn.click();
    }

    async addToCart () {
        await this.categoryTitle.click();
        await this.addToCartBtn.click();
    }

    open () {
        return super.open('shop');
    }
}

export default new ShopPage();