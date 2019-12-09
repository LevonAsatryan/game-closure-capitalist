import {GenericPopup} from './generic-popup';
import {Constants} from '../../data/constants';
import {UIBuilder} from '../ui-builder';
import {ManagerProfile} from './components/manager-profile';
import {CapitalManager} from '../../managers/capital-manager';
import {ShopType} from '../../data/interfaces/shop-metadata.interface';

export class ManagersPopup extends GenericPopup {
    public onManagerHired: Phaser.Signal = new Phaser.Signal();
    private constants = Constants.popups.managers;
    private background: Phaser.Graphics;
    private managersText: Phaser.Text;
    private managers: ManagerProfile[];

    constructor(game: Phaser.Game, parent: PIXI.DisplayObjectContainer) {
        super(game, parent);
        this.initialize();
    }

    private initialize(): void {
        this.initBackground();
        this.initManagersText();
        this.initManagers();
        this.attachListeners();
    }

    private initBackground(): void {
        this.background = UIBuilder.createRectangle(
            (this.game.width - this.constants.width) / 2,
            (this.game.height - this.constants.height) / 2,
            this.constants.width,
            this.constants.height,
            this.constants.color,
            this
        );
        this.background.inputEnabled = true;
    }

    private initManagersText(): void {
        this.managersText = this.game.add.text(
            0, 0, this.constants.title.text, this.constants.title.style, this
        );
        this.managersText.position.set(
            (this.game.width - this.managersText.width) / 2,
            (this.game.height - this.constants.height) / 2
        );
    }

    private initManagers(): void {
        this.managers = UIBuilder.createManagers(this);
        this.positionManagers();
    }

    private positionManagers(): void {
        const gap = this.managersText.y + this.managersText.height + 20;
        this.managers.forEach((manager, index) => {
            manager.position.set(
                (this.game.width - manager.width) / 2,
                gap + (index * (manager.height + 20))
            );
        });
    }

    private attachListeners(): void {
        this.managers.forEach(manager => manager.onHire.add(this.handleManagerHire, this));
    }

    private handleManagerHire(cost: number, shopType: ShopType): void {
        CapitalManager.instance.reduceBalance(cost);
        this.managers = this.managers.filter(manager => manager.type !== shopType);
        this.positionManagers();
        this.onManagerHired.dispatch(shopType);
    }
}
