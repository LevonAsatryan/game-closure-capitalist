import {Images} from '../../assets';
import {GenericButton} from '../generic-button';
import {IButtonConfig, IButtonTextConfig} from '../../data/interfaces/button-configs.interface';

export class TabButton extends GenericButton {
    private background: Phaser.Graphics;
    private text: Phaser.Text;

    constructor(
        game: Phaser.Game,
        parent: Phaser.Group,
        protected buttonConfig: IButtonConfig,
        protected textConfig: IButtonTextConfig,
        private isComingSoon: boolean
    ) {
        super(game, parent, buttonConfig, textConfig);
        if (this.isComingSoon) {
            this.initComingSoonSprite();
            this.disable();
        }
    }


    private initComingSoonSprite(): void {
        const comingSoonSprite = this.game.add.sprite(
            25, 22, Images.ImagesComingSoon.getName(), null, this
        );
        comingSoonSprite.scale.set(0.2);
        comingSoonSprite.anchor.set(0.5);
        comingSoonSprite.angle = -45;
    }
}
