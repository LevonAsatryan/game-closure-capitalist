import {IShopMetadata, ShopType} from '../../../data/interfaces/shop-metadata.interface';
import {GenericShop} from '../generic-shop';

export class FoodChain extends GenericShop {
    protected shopType = ShopType.FoodChain;

    constructor(game: Phaser.Game, parent: PIXI.DisplayObjectContainer, metadata: IShopMetadata) {
        super(game, parent, metadata);
    }
}
