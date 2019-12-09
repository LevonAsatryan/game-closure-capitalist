import {IShopMetadata, ShopType} from '../../../data/interfaces/shop-metadata.interface';
import {GenericShop} from '../generic-shop';

export class HotDogShop extends GenericShop {
    protected shopType = ShopType.HotDogStand;

    constructor(game: Phaser.Game, parent: PIXI.DisplayObjectContainer, metadata: IShopMetadata) {
        super(game, parent, metadata);
    }
}
