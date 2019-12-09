import {GenericShop} from '../generic-shop';
import {IShopMetadata, ShopType} from '../../../data/interfaces/shop-metadata.interface';

export class NewspaperDelivery extends GenericShop {
    protected shopType = ShopType.Newspaper;

    constructor(game: Phaser.Game, parent: PIXI.DisplayObjectContainer, metadata: IShopMetadata) {
        super(game, parent, metadata);
    }
}
