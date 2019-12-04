import * as Utils from '../utils/utils';

export default class BootState extends Phaser.State {
    public preload(): void {
        // Load any assets you need for your preloader state here.
    }

    public create(): void {
        this.game.scale.scaleMode = (Phaser.ScaleManager as any)[SCALE_MODE];
        if (SCALE_MODE === 'USER_SCALE') {
            let screenMetrics: Utils.ScreenMetrics = Utils.ScreenUtils.screenMetrics;
            this.game.scale.setUserScale(screenMetrics.scaleX, screenMetrics.scaleY);
        }
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        console.log(
            `DEBUG....................... ${DEBUG}
           \nSCALE_MODE.................. ${SCALE_MODE}
           \nDEFAULT_GAME_WIDTH.......... ${DEFAULT_GAME_WIDTH}
           \nDEFAULT_GAME_HEIGHT......... ${DEFAULT_GAME_HEIGHT}
           \nMAX_GAME_WIDTH.............. ${MAX_GAME_WIDTH}
           \nMAX_GAME_HEIGHT............. ${MAX_GAME_HEIGHT}
           \ngame.width.................. ${this.game.width}
           \ngame.height................. ${this.game.height}
           \nGOOGLE_WEB_FONTS............ ${GOOGLE_WEB_FONTS}
           \nSOUND_EXTENSIONS_PREFERENCE. ${SOUND_EXTENSIONS_PREFERENCE}`
        );

        this.game.state.start('preloaderState');
    }
}
