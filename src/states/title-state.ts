import {GameScreen} from '../screens/game-screen';

export default class GameState extends Phaser.State {
    private gameScreen: Phaser.Group;

    public create(): void {
        this.createGameScreen();
    }

    private createGameScreen(): void {
        this.gameScreen = new GameScreen(this.game, this.game.world);
    }
}
