import {GenericPopup} from '../components/popups/generic-popup';
import {ManagersPopup} from '../components/popups/managers-popup';
import {UIBuilder} from '../components/ui-builder';
import {ShopType} from '../data/interfaces/shop-metadata.interface';

export class PopupsManager {
    public onManagerHired: Phaser.Signal = new Phaser.Signal();
    private currentPopup: GenericPopup;
    private game: Phaser.Game;
    private managersPopup: ManagersPopup;

    private constructor() {
    }

    private static _instance: PopupsManager;

    public static get instance(): PopupsManager {
        if (!PopupsManager._instance) {
            PopupsManager._instance = new PopupsManager();
        }
        return PopupsManager._instance;
    }

    public initialize(game: Phaser.Game): void {
        this.game = game;
        this.managersPopup = UIBuilder.createManagersPopup();
        this.managersPopup.onManagerHired.add(this.handleManagerHired, this);
    }

    public openManagersPopup(): void {
        this.currentPopup = this.managersPopup;
        this.game.world.bringToTop(this.currentPopup);
        this.currentPopup.open();
    }

    private handleManagerHired(type: ShopType): void {
        this.onManagerHired.dispatch(type);
    }

}
