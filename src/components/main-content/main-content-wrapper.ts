import {ShopsFactory} from '../../helpers/shops-factory';
import {BalanceText} from './balance-text';
import {UIBuilder} from '../ui-builder';
import {GenericShop} from './generic-shop';

export class MainContentWrapper extends Phaser.Group {
    private shops: GenericShop[] = [];
    private balanceText: BalanceText;

    constructor(game: Phaser.Game, parent: PIXI.DisplayObjectContainer) {
        super(game, parent);
        this.initialize();
    }

    private initialize(): void {
        this.initBalance();
        this.initShops();
    }

    private initBalance(): void {
        this.balanceText = UIBuilder.createBalanceText(this);
    }

    private initShops(): void {
        this.shops.push(
            ShopsFactory.instance.createHotDogStand(this.game, this),
            ShopsFactory.instance.createNewspaperDelivery(this.game, this),
            ShopsFactory.instance.createFoodChaing(this.game, this),
            ShopsFactory.instance.createOilCompany(this.game, this),
        );
    }
}
