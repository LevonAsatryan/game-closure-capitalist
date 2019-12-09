import {GameScreen} from '../screens/game-screen';
import {UIBuilder} from '../components/ui-builder';
import {PopupsManager} from '../managers/popups-manager';

export default class GameState extends Phaser.State {
    private gameScreen: Phaser.Group;

    public preload(game: Phaser.Game): void {
        UIBuilder.initialize(this.game);
        PopupsManager.instance.initialize(this.game);
    }

    public create(): void {
        this.createGameScreen();
    }

    private createGameScreen(): void {
        this.gameScreen = new GameScreen(this.game, this.game.world);
    }
}
