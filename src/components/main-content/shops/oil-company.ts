import {IShopMetadata, ShopType} from '../../../data/interfaces/shop-metadata.interface';
import {GenericShop} from '../generic-shop';

export class OilCompany extends GenericShop {
    protected shopType = ShopType.OilCompany;

    constructor(game: Phaser.Game, parent: PIXI.DisplayObjectContainer, metadata: IShopMetadata) {
        super(game, parent, metadata);
    }
}
