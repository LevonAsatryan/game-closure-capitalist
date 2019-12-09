import {IManagerProfileConfig} from '../../../data/interfaces/manager-profile-config.interface';
import {UIBuilder} from '../../ui-builder';
import {GenericButton} from '../../generic-button';
import {CapitalManager} from '../../../managers/capital-manager';
import {ShopType} from '../../../data/interfaces/shop-metadata.interface';

export class ManagerProfile extends Phaser.Group {
    public onHire: Phaser.Signal = new Phaser.Signal();
    public type: ShopType;
    private background: Phaser.Graphics;
    private asset: Phaser.Sprite;
    private managerNameText: Phaser.Text;
    private hireButton: GenericButton;

    constructor(game: Phaser.Game, parent: Phaser.Group, private managerConfig: IManagerProfileConfig) {
        super(game, parent);
        this.initialize();
    }

    public destroy() {
        this.detachListeners();
        super.destroy();
    }

    private initialize(): void {
        this.type = this.managerConfig.type;
        this.initBackground();
        this.initAsset();
        this.initName();
        this.initHireButton();
        this.attachListeners();
    }

    private initBackground(): void {
        this.background = UIBuilder.createRectangle(
            0, 0, this.managerConfig.width, this.managerConfig.height, this.managerConfig.color, this
        );
    }

    private initAsset(): void {
        this.asset = this.game.add.sprite(
            0, 0, this.managerConfig.asset, null, this
        );
        this.scaleAsset();
    }

    private initName(): void {
        this.managerNameText = this.game.add.text(
            0, 0, this.managerConfig.name, this.managerConfig.textStyle, this
        );
        this.positionManagerNameText();
    }

    private initHireButton(): void {
        this.hireButton = UIBuilder.createHireButton(this, this.managerConfig.cost);
        this.hireButton.onClick.add(this.handleHire, this);
        if (CapitalManager.instance.balance < this.managerConfig.cost) {
            this.hireButton.disable();
        }
    }

    private scaleAsset(): void {
        const previousHeight = this.asset.height;
        this.asset.height = this.managerConfig.height;
        this.asset.width *= this.managerConfig.height / previousHeight;
    }

    private positionManagerNameText(): void {
        this.managerNameText.position.set(
            (this.managerConfig.width - this.managerNameText.width) / 2,
            (this.managerConfig.height - this.managerNameText.height) / 2
        );
    }

    private handleHire(): void {
        this.onHire.dispatch(this.managerConfig.cost, this.managerConfig.type);
        this.destroy();
    }

    private attachListeners(): void {
        CapitalManager.instance.onBalanceUpdate.add(this.handleBalanceUpdate, this);
    }

    private detachListeners(): void {
        CapitalManager.instance.onBalanceUpdate.remove(this.handleBalanceUpdate, this);
    }

    private handleBalanceUpdate(): void {
        if (CapitalManager.instance.balance > this.managerConfig.cost) {
            this.hireButton.enable();
        } else {
            this.hireButton.disable();
        }
    }
}
