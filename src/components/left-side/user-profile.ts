import {Constants} from '../../data/constants';
import {Images} from '../../assets';
import {UIBuilder} from '../ui-builder';

export class UserProfile extends Phaser.Group {
    private outerBorder: Phaser.Graphics;
    private constants = Constants.leftSide.userProfile;
    private innerBorder: Phaser.Graphics;
    private avatar: Phaser.Sprite;

    constructor(game: Phaser.Game, parent: PIXI.DisplayObjectContainer) {
        super(game, parent);
        this.initialize();
    }

    private initialize(): void {
        this.initBorders();
        this.initAvatar();
    }

    private initBorders(): void {
        this.initOuterBorder();
        this.initInnerBorder();
    }

    private initAvatar(): void {
        const avatarPadding = this.constants.borderThickness;
        this.avatar = this.game.add.sprite(
            avatarPadding, avatarPadding, Images.ImagesAvatar.getName(), null, this
        );
        this.avatar.scale.set(0.47);
    }

    private initOuterBorder(): void {
        this.outerBorder = UIBuilder.createRectangle(
            0, 0, this.constants.avatarWidth, this.constants.avatarHeight, this.constants.outerBorderColor, this
        );
    }

    private initInnerBorder(): void {
        this.innerBorder = UIBuilder.createRectangle(
            this.constants.borderThickness,
            this.constants.borderThickness,
            this.constants.avatarWidth - 2 * this.constants.borderThickness,
            this.constants.avatarHeight - 2 * this.constants.borderThickness,
            this.constants.innerBorderColor,
            this
        );
        this.innerBorder.inputEnabled = true;
    }
}
