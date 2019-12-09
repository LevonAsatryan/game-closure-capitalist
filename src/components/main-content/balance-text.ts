import {IBalanceTextConfigs} from '../../data/interfaces/balance-text-configs.interface';
import {CapitalManager} from '../../managers/capital-manager';
import {convertNumberToFixed} from '../../helpers/convert-number-to-fixed-precision';

export class BalanceText extends Phaser.Group {
    private balanceText: Phaser.Text;

    constructor(game: Phaser.Game, parent: Phaser.Group, private configs: IBalanceTextConfigs) {
        super(game, parent);
        this.initText();
        CapitalManager.instance.onBalanceUpdate.add(this.updateText, this);
        this.updateText();
        this.position.set(
            configs.x,
            configs.y
        );
    }

    public updateText(): void {
        this.balanceText.text = `$${convertNumberToFixed(CapitalManager.instance.balance, 2)}`;
    }

    private initText(): void {
        this.balanceText = this.game.add.text(
            0,
            0,
            this.configs.text,
            this.configs.style,
            this
        );
    }
}
