import PhaserTextStyle = Phaser.PhaserTextStyle;
import {ShopType} from './shop-metadata.interface';

export interface IManagerProfileConfig {
    name: string;
    cost: number;
    asset: string;
    width: number;
    height: number;
    color: number;
    textStyle: PhaserTextStyle;
    type: ShopType;
}
