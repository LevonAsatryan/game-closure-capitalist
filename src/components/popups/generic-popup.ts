import {UIBuilder} from '../ui-builder';

export class GenericPopup extends Phaser.Group {
    protected backDrop: Phaser.Graphics;
    private openTween: Phaser.Tween;
    private closeTween: Phaser.Tween;

    constructor(game: Phaser.Game, parent: PIXI.DisplayObjectContainer) {
        super(game, parent);
        this.position.set(
            -this.game.width,
            0
        );
        this.initializeTweens();
        this.initBackDrop();
    }

    public open(): void {
        this.openTween.start();
    }

    public close(): void {
        this.closeTween.start();
    }

    private initializeTweens(): void {
        this.initOpenTween();
        this.initCloseTween();
    }

    private initOpenTween(): void {
        this.openTween = this.game.add.tween(this.position);
        this.openTween.to(
            {x: 0}, 500
        );
    }

    private initCloseTween(): void {
        this.closeTween = this.game.add.tween(this.position);
        this.closeTween.to(
            {x: -this.game.width}, 500
        );
    }

    private initBackDrop(): void {
        this.backDrop = UIBuilder.createRectangle(
            0, 0, this.game.width, this.game.height, 0x000000, this
        );
        this.backDrop.alpha = 0;
        this.backDrop.inputEnabled = true;
        this.backDrop.events.onInputUp.add(this.close, this);
    }
}
