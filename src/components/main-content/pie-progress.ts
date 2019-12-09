import BitmapData = Phaser.BitmapData;
import {IPieProgressConfigs} from '../../data/interfaces/pie-progress-configs.interface';

export class PieProgress extends Phaser.Sprite {
    private progressTween: Phaser.Tween;

    constructor(
        game: Phaser.Game,
        x: number,
        y: number,
        private bmp: BitmapData,
        parent: Phaser.Group,
        private progressTime: number,
        private configs: IPieProgressConfigs) {
        super(game, x, y, bmp, null);
        parent.addChild(this);
        this.initialize();
    }

    private _canEarn: boolean = true;

    public get canEarn(): boolean {
        return this._canEarn;
    }

    public get onComplete(): Phaser.Signal {
        return this.progressTween.onComplete;
    }

    public get onLoop(): Phaser.Signal {
        return this.progressTween.onLoop;
    }

    public startProgress(): void {
        this.progressTween.start();
        this._canEarn = false;
    }

    public loop(): void {
        this.progressTween.loop(true);
        this.progressTween.start();
    }

    private initialize(): void {
        this.initProgressTween();
    }

    private initProgressTween(): void {
        this.progressTween = this.game.add.tween({progress: 0})
            .to({progress: 1}, this.progressTime * 1000);
        this.progressTween.onUpdateCallback((tween: Phaser.Tween, progress: number) => {
            this.updateProgress(progress);
        }, this);
        this.progressTween.onComplete.add(this.resetProgressBar, this);
    }

    private updateProgress(progress: number): void {
        this.bmp.clear();
        this.bmp.ctx.strokeStyle = this.configs.color;
        this.bmp.ctx.lineWidth = this.configs.weight * this.configs.radius;
        this.bmp.ctx.beginPath();
        this.bmp.ctx.arc(
            this.bmp.width * 0.5, this.bmp.height * 0.5,
            this.configs.radius - 15,
            0,
            (Math.PI * 2) * progress,
            false
        );
        this.bmp.ctx.stroke();
        this.bmp.dirty = true;
    }

    private resetProgressBar(): void {
        this.updateProgress(0);
        this._canEarn = true;
    }
}
