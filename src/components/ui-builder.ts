import {PieProgress} from './main-content/pie-progress';
import {IPieProgressConfigs} from '../data/interfaces/pie-progress-configs.interface';
import {Constants} from '../data/constants';
import {IButtonConfig, IButtonTextConfig} from '../data/interfaces/button-configs.interface';
import {CapitalManager} from '../managers/capital-manager';
import {TabButton} from './left-side/tab-button';
import {BalanceText} from './main-content/balance-text';
import {IBalanceTextConfigs} from '../data/interfaces/balance-text-configs.interface';
import {ManagersPopup} from './popups/managers-popup';
import {GenericButton} from './generic-button';
import {ITabButtonMetadata} from '../data/interfaces/tab-button-metadata.interface';
import {ManagerProfile} from './popups/components/manager-profile';

export class UIBuilder {
    private static game: Phaser.Game;

    public static initialize(game: Phaser.Game) {
        UIBuilder.game = game;
    }

    public static createBalanceText(parent: Phaser.Group): BalanceText {
        const configs: IBalanceTextConfigs = Constants.mainContent.balanceText;
        return new BalanceText(UIBuilder.game, parent, configs);
    }

    public static createRectangle(
        x: number, y: number, width: number, height: number, color: number, parent: Phaser.Group
    ): Phaser.Graphics {
        const rectangle = this.game.add.graphics(x, y, parent);
        rectangle.beginFill(color);
        rectangle.drawRect(0, 0, width, height);
        rectangle.endFill();
        return rectangle;
    }

    public static createUnlocksButton(parent: Phaser.Group): TabButton {
        const buttonMetadata = Constants.leftSide.tabButtons.unlocks;
        return UIBuilder.createTabButton(parent, buttonMetadata);
    }

    public static createUpgradesButton(parent: Phaser.Group): TabButton {
        const buttonMetadata = Constants.leftSide.tabButtons.upgrades;
        return UIBuilder.createTabButton(parent, buttonMetadata);
    }

    public static createManagersButton(parent: Phaser.Group): TabButton {
        const buttonMetadata = Constants.leftSide.tabButtons.managers;
        return UIBuilder.createTabButton(parent, buttonMetadata);
    }

    public static createInvestorsButton(parent: Phaser.Group): TabButton {
        const buttonMetadata = Constants.leftSide.tabButtons.investors;
        return UIBuilder.createTabButton(parent, buttonMetadata);
    }

    public static createProgressBar(x: number, y: number, parent: Phaser.Group, progressTime: number): PieProgress {
        const configs: IPieProgressConfigs = Constants.mainContent.shopMetrics.progressBar.configs,
            bmp = UIBuilder.game.add.bitmapData(
                (configs.radius * 2) + (configs.weight * (configs.radius * 0.6)),
                (configs.radius * 2) + (configs.weight * (configs.radius * 0.6))
            ),
            sprite = new PieProgress(UIBuilder.game, x, y, bmp, parent, progressTime, configs);
        sprite.anchor.set(0.5);

        return sprite;
    }

    public static createUpdateButton(parent: Phaser.Group, upgradeCost: number, isUnlocked: boolean): GenericButton {
        const buttonConfig: IButtonConfig = {
            x: 0,
            y: Constants.mainContent.shopMetrics.assetAndButtonGap,
            color: Constants.mainContent.shopMetrics.upgradeButton.color,
            width: Constants.mainContent.shopMetrics.upgradeButton.width,
            height: Constants.mainContent.shopMetrics.upgradeButton.height
        };
        const buttonText = isUnlocked ? `Upgrade!!! $${upgradeCost}` : `Buy $${upgradeCost}`;
        const buttonTextConfig: IButtonTextConfig = {
            text: buttonText,
            style: Constants.mainContent.shopMetrics.upgradeButton.textStyle
        };

        const button = new GenericButton(UIBuilder.game, parent, buttonConfig, buttonTextConfig);
        button.x = buttonConfig.x;
        button.y = buttonConfig.y;
        // Disable the button if not enough money to upgrade
        if (upgradeCost > CapitalManager.instance.balance) {
            button.disable();
        }
        return button;
    }

    public static createManagersPopup(): ManagersPopup {
        return new ManagersPopup(UIBuilder.game, UIBuilder.game.world);
    }

    public static createManagers(parent: Phaser.Group): ManagerProfile[] {
        const managers: ManagerProfile[] = [];
        const managersConfigs = Constants.popups.managersConfigs;
        managersConfigs.forEach(managerConfig =>
            managers.push(new ManagerProfile(UIBuilder.game, parent, managerConfig))
        );
        return managers;
    }

    public static createHireButton(parent: Phaser.Group, cost: number): GenericButton {
        const buttonConfig: IButtonConfig = Constants.popups.hireMeButton.buttonConfig;
        const textConfig: IButtonTextConfig = {
            ...Constants.popups.hireMeButton.textConfig,
            text: Constants.popups.hireMeButton.textConfig.text + cost
        };
        const button = new GenericButton(UIBuilder.game, parent, buttonConfig, textConfig);
        button.x = buttonConfig.x;
        button.y = buttonConfig.y;
        return button;
    }

    private static createTabButton(parent: Phaser.Group, buttonMetadata: ITabButtonMetadata): TabButton {
        const button = new TabButton(
            UIBuilder.game, parent, buttonMetadata.buttonConfig, buttonMetadata.textConfig, buttonMetadata.isComingSoon
        );
        button.position.set(buttonMetadata.buttonConfig.x, buttonMetadata.buttonConfig.y);
        return button;
    }
}
