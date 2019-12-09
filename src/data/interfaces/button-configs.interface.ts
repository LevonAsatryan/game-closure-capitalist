import PhaserTextStyle = Phaser.PhaserTextStyle;

export interface IButtonConfig {
    x: number;
    y: number;
    width: number;
    height: number;
    color: number;
}

export interface IButtonTextConfig {
    text: string;
    style: PhaserTextStyle;
}
