import {UserProfile} from './user-profile';
import {Constants} from '../../data/constants';
import {TabButton} from './tab-button';
import {UIBuilder} from '../ui-builder';
import {PopupsManager} from '../../managers/popups-manager';

export class LeftSideWrapper extends Phaser.Group {
    private userProfile: UserProfile;
    private constants = Constants.leftSide;
    private background: Phaser.Graphics;
    private unlocksButton: TabButton;
    private upgradesButton: TabButton;
    private managersButton: TabButton;
    private investorsButton: TabButton;

    constructor(game: Phaser.Game, parent: PIXI.DisplayObjectContainer) {
        super(game, parent);
        this.initialize();
    }

    private initialize(): void {
        this.initBackground();
        this.initUserProfile();
        this.initButtons();
        this.attachListeners();
    }

    private initBackground(): void {
        this.background = UIBuilder.createRectangle(
            0, 0, this.constants.width, this.constants.height, this.constants.backgroundColor, this
        );
    }

    private initUserProfile(): void {
        this.userProfile = new UserProfile(this.game, this);
        this.userProfile.position.set(this.constants.paddingLeft, this.constants.paddingTop);
    }

    private initButtons(): void {
        this.unlocksButton = UIBuilder.createUnlocksButton(this);
        this.upgradesButton = UIBuilder.createUpgradesButton(this);
        this.managersButton = UIBuilder.createManagersButton(this);
        this.investorsButton = UIBuilder.createInvestorsButton(this);
    }

    private attachListeners(): void {
        this.managersButton.onClick.add(PopupsManager.instance.openManagersPopup, PopupsManager.instance);
    }
}
