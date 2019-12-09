import {IButtonConfig, IButtonTextConfig} from '../data/interfaces/button-configs.interface';
import {UIBuilder} from './ui-builder';

export class GenericButton extends Phaser.Group {
    public onClick: Phaser.Signal = new Phaser.Signal();
    private button: Phaser.Graphics;
    private buttonText: Phaser.Text;
    private canUpgrade: boolean = false;

    constructor(
        game: Phaser.Game,
        parent: Phaser.Group,
        protected buttonConfigs: IButtonConfig,
        protected textConfigs: IButtonTextConfig
    ) {
        super(game, parent);
        this.initialize();
    }

    public enable(): void {
        this.canUpgrade = true;
        this.button.input.useHandCursor = true;
        this.button.inputEnabled = true;
        this.button.alpha = 1;
    }

    public disable(): void {
        this.canUpgrade = false;
        this.button.inputEnabled = false;
        this.button.alpha = 0.7;
        this.button.input.useHandCursor = false;
    }

    public updateText(text: string): void {
        this.buttonText.text = text;
        this.positionButtonText();
    }

    private initialize(): void {
        this.initButton();
        this.initButtonText();
        this.enable();
    }

    private initButton(): void {
        this.button = UIBuilder.createRectangle(
            0, 0, this.buttonConfigs.width, this.buttonConfigs.height, this.buttonConfigs.color, this
        );
        this.initButtonInputs();
    }

    private initButtonText(): void {
        this.buttonText = this.game.add.text(0, 0, this.textConfigs.text, this.textConfigs.style, this);
        this.positionButtonText();
    }

    private initButtonInputs(): void {
        this.button.inputEnabled = true;
        this.button.input.useHandCursor = true;
        this.button.alpha = 1;
        this.button.events.onInputOver.add(() => {
            this.button.alpha = 0.7;
        }, this);
        this.button.events.onInputOut.add(() => {
            this.button.alpha = 1;
        }, this);
        this.button.events.onInputUp.add(() => {
            if (!this.canUpgrade) return;
            this.onClick.dispatch();
        }, this);
    }

    private positionButtonText(): void {
        this.buttonText.position.set(
            (this.button.width - this.buttonText.width) / 2,
            (this.button.height - this.buttonText.height) / 2
        );
    }
}
