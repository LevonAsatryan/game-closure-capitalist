import {IShopMetadata, ShopType} from '../../data/interfaces/shop-metadata.interface';
import {Constants} from '../../data/constants';
import {UIBuilder} from '../ui-builder';
import {PieProgress} from './pie-progress';
import {CapitalManager} from '../../managers/capital-manager';
import {convertNumberToFixed} from '../../helpers/convert-number-to-fixed-precision';
import {ShopManager} from '../../managers/shop-manager';
import {GenericButton} from '../generic-button';
import {PopupsManager} from '../../managers/popups-manager';

export class GenericShop extends Phaser.Group {
    private static shopMetrics = Constants.mainContent.shopMetrics;
    protected upgradeCost: number;
    protected earningTime: number;
    protected isUnlocked: boolean = false;
    protected shopAsset: Phaser.Sprite;
    protected shopType: ShopType;
    private initialIncome: number;
    private upgradeButton: GenericButton;
    private timeCounter: Phaser.Text;
    private progressBar: PieProgress;
    private manager: ShopManager;

    constructor(
        game: Phaser.Game,
        parent: PIXI.DisplayObjectContainer,
        protected shopMetadata: IShopMetadata
    ) {
        super(game, parent);
        this.initialize();
    }

    public upgrade(): void {
        this.manager.upgradeShop();
        this.updateUpgradeText();
        if (!this.isUnlocked) {
            this.isUnlocked = true;
            this.enableEarning();
        }
    }

    public startEarning(): void {
        if (!this.progressBar.canEarn) return;
        this.progressBar.startProgress();
    }

    public assignManager(): void {
        this.disableClick();
        this.progressBar.loop();
    }

    private initialize(): void {
        this.initInitialData();
        this.initShopAsset();
        this.initUpgradeButton();
        this.initTimeCounter();
        this.initProgressBar();
        this.initManager();
        this.attachListeners();
    }

    private initShopAsset(): void {
        this.shopAsset = this.game.add.sprite(0, 0, this.shopMetadata.asset, null, this);
        this.shopAsset.inputEnabled = this.isUnlocked;
        this.adjustAssetSize();
        if (this.isUnlocked) {
            this.enableEarning();
        }
    }

    private adjustAssetSize(): void {
        const previousHeight = this.shopAsset.height;
        this.shopAsset.height = 150;
        this.shopAsset.width *= this.shopAsset.height / previousHeight;
    }

    private initUpgradeButton(): void {
        this.upgradeButton = UIBuilder.createUpdateButton(this, this.upgradeCost, this.isUnlocked);
        this.upgradeButton.onClick.add(this.upgrade, this);
    }

    private initTimeCounter(): void {
        this.timeCounter = this.game.add.text(
            GenericShop.shopMetrics.timer.x,
            GenericShop.shopMetrics.timer.y,
            `${this.earningTime.toString()}s`,
            GenericShop.shopMetrics.timer.style,
            this
        );
    }

    private initProgressBar(): void {
        this.progressBar = UIBuilder.createProgressBar(
            GenericShop.shopMetrics.progressBar.x,
            GenericShop.shopMetrics.progressBar.y,
            this,
            this.earningTime
        );
    }

    private initManager(): void {
        this.manager = new ShopManager(this.upgradeCost, this.initialIncome);
    }

    private attachListeners(): void {
        CapitalManager.instance.onBalanceUpdate.add(this.handleBalanceUpdate, this);
        this.progressBar.onComplete.add(this.manager.generateIncome, this.manager);
        this.progressBar.onLoop.add(this.manager.generateIncome, this.manager);
        PopupsManager.instance.onManagerHired.add(this.handleManagerHired, this);
    }

    private enableEarning(): void {
        this.shopAsset.inputEnabled = true;
        this.shopAsset.events.onInputDown.add(this.handleClick, this);
    }

    private disableClick(): void {
        this.shopAsset.inputEnabled = false;
    }

    private handleBalanceUpdate(): void {
        if (CapitalManager.instance.balance < this.upgradeCost) {
            this.upgradeButton.disable();
        } else {
            this.upgradeButton.enable();
        }
    }

    private initInitialData(): void {
        this.upgradeCost = this.shopMetadata.upgradeCost;
        this.initialIncome = this.shopMetadata.initialEarning;
        this.earningTime = this.shopMetadata.earningTime;
        this.isUnlocked = this.shopMetadata.isUnlocked;
    }

    private handleClick(): void {
        this.startEarning();
    }

    private handleManagerHired(type: ShopType): void {
        if (type === this.shopType) {
            this.assignManager();
        }
    }

    private updateUpgradeText(): void {
        const upgradeText = convertNumberToFixed(this.manager.upgradeCost, 2);
        this.upgradeButton.updateText(`Upgrade!!! $${upgradeText}`);
    }
}
