import {Constants} from '../data/constants';
import {IShopMetadata, ShopType} from '../data/interfaces/shop-metadata.interface';
import {HotDogShop} from '../components/main-content/shops/hot-dog-shop';
import {GenericShop} from '../components/main-content/generic-shop';
import {NewspaperDelivery} from '../components/main-content/shops/newspaper-delivery';
import {FoodChain} from '../components/main-content/shops/food-chain';
import {OilCompany} from '../components/main-content/shops/oil-company';

export class ShopsFactory {
    private shopsData: IShopMetadata[] = Constants.mainContent.shops;
    private shopsCount: number = 0;

    private constructor() {
    }

    private static _instance: ShopsFactory;

    public static get instance() {
        if (!ShopsFactory._instance) {
            ShopsFactory._instance = new ShopsFactory();
        }
        return ShopsFactory._instance;
    }

    public createHotDogStand(game: Phaser.Game, parent: PIXI.DisplayObjectContainer): GenericShop {
        const shop = new HotDogShop(game, parent, this.getShopMetadata(ShopType.HotDogStand));
        this.positionShop(shop);
        return shop;
    }

    public createNewspaperDelivery(game: Phaser.Game, parent: PIXI.DisplayObjectContainer): GenericShop {
        const shop = new NewspaperDelivery(game, parent, this.getShopMetadata(ShopType.Newspaper));
        this.positionShop(shop);
        return shop;
    }

    public createFoodChaing(game: Phaser.Game, parent: PIXI.DisplayObjectContainer): GenericShop {
        const shop = new FoodChain(game, parent, this.getShopMetadata(ShopType.FoodChain));
        this.positionShop(shop);
        return shop;
    }

    public createOilCompany(game: Phaser.Game, parent: PIXI.DisplayObjectContainer): GenericShop {
        const shop = new OilCompany(game, parent, this.getShopMetadata(ShopType.OilCompany));
        this.positionShop(shop);
        return shop;
    }

    private getShopMetadata(shopType: ShopType): IShopMetadata {
        return this.shopsData.find(sd => sd.name === shopType);
    }

    private positionShop(shop: GenericShop): void {
        shop.y = Constants.mainContent.shopsMarginTop + this.shopsCount * Constants.mainContent.shopsGap;
        ++this.shopsCount;
    }
}
