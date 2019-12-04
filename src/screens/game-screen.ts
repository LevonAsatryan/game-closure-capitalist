import {Images} from '../assets';

export class GameScreen extends Phaser.Group {
    private background: Phaser.Sprite;

    constructor(game: Phaser.Game, parent: PIXI.DisplayObjectContainer) {
        super(game, parent);
        this.initialize();
    }

    private initialize(): void {
        this.initBackground();
    }

    private initBackground(): void {
        this.background = this.game.add.sprite(0, 0, Images.ImagesBackground.getName(), null, this);
    }
}
