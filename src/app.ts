import 'p2';
import 'pixi';
import 'phaser';

import * as WebFontLoader from 'webfontloader';

import * as Utils from './utils/utils';
import * as Assets from './assets';
import BootState from './states/boot-state';
import PreloaderState from './states/preloader-state';
import GameState from './states/title-state';

class App extends Phaser.Game {
    constructor(config: Phaser.IGameConfig) {
        super(config);

        this.state.add('bootState', BootState);
        this.state.add('preloaderState', PreloaderState);
        this.state.add('game', GameState);

        this.state.start('bootState');
    }
}

function startApp(): void {
    let gameWidth: number = DEFAULT_GAME_WIDTH;
    let gameHeight: number = DEFAULT_GAME_HEIGHT;

    if (SCALE_MODE === 'USER_SCALE') {
        let screenMetrics: Utils.ScreenMetrics = Utils.ScreenUtils.calculateScreenMetrics(gameWidth, gameHeight, MAX_GAME_WIDTH, MAX_GAME_HEIGHT);

        gameWidth = screenMetrics.gameWidth;
        gameHeight = screenMetrics.gameHeight;
    }

    // There are a few more options you can set if needed, just take a look at Phaser.IGameConfig
    let gameConfig: Phaser.IGameConfig = {
        width: gameWidth,
        height: gameHeight,
        renderer: Phaser.AUTO,
        parent: '',
        resolution: 1
    };

    let app = new App(gameConfig);
}

window.onload = () => {
    let webFontLoaderOptions: any = null;
    let webFontsToLoad: string[] = GOOGLE_WEB_FONTS;

    if (webFontsToLoad.length > 0) {
        webFontLoaderOptions = (webFontLoaderOptions || {});

        webFontLoaderOptions.google = {
            families: webFontsToLoad
        };
    }

    if (Object.keys(Assets.CustomWebFonts).length > 0) {
        webFontLoaderOptions = (webFontLoaderOptions || {});

        webFontLoaderOptions.custom = {
            families: [],
            urls: []
        };

        let allCustomWebFonts = (Assets.CustomWebFonts as any);

        for (let font in allCustomWebFonts) {
            webFontLoaderOptions.custom.families.push(allCustomWebFonts[font].getFamily());
            webFontLoaderOptions.custom.urls.push(allCustomWebFonts[font].getCSS());
        }
    }

    if (webFontLoaderOptions === null) {
        // Just start the game, we don't need any additional fonts
        startApp();
    } else {
        // Load the fonts defined in webFontsToLoad from Google Web Fonts, and/or any Local Fonts then start the game knowing the fonts are available
        webFontLoaderOptions.active = startApp;

        WebFontLoader.load(webFontLoaderOptions);
    }
};
