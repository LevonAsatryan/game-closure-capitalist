import {Images} from '../assets';
import {LeftSideWrapper} from '../components/left-side/left-side-wrapper';
import {MainContentWrapper} from '../components/main-content/main-content-wrapper';
import {Constants} from '../data/constants';

export class GameScreen extends Phaser.Group {
    private background: Phaser.Sprite;
    private leftSideWrapper: LeftSideWrapper;
    private mainContentWrapper: MainContentWrapper;

    constructor(game: Phaser.Game, parent: PIXI.DisplayObjectContainer) {
        super(game, parent);
        this.initialize();
    }

    private initialize(): void {
        this.initBackground();
        this.initLeftSide();
        this.initMainContent();
    }

    private initBackground(): void {
        this.background = this.game.add.sprite(0, 0, Images.ImagesBackground.getName(), null, this);
    }

    private initLeftSide(): void {
        this.leftSideWrapper = new LeftSideWrapper(this.game, this);
    }

    private initMainContent(): void {
        this.mainContentWrapper = new MainContentWrapper(this.game, this);
        this.mainContentWrapper.position.set(
            Constants.mainContent.wrapper.x,
            Constants.mainContent.wrapper.y
        );
    }
}
