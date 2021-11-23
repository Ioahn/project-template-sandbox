import Phaser from 'phaser';

import { inject, injectable } from "inversify";
import { MAIN_TYPES } from '@constants';

@injectable()
export class GameService implements IGameService {
    @inject(MAIN_TYPES.gameConfig) config!: IGameConfig;

    game!: Phaser.Game;

    addScene = (sceneName: string, scene: IGameScene) => {
        console.log(this);
        
        // this.game.scene.add(sceneName, scene, true, { x: 400, y: 300 })
    }

    removeScene(sceneName: string) {
        console.log(this);
        
        // this.game.scene.remove(sceneName)
    }

    init() {
        this.game = new Phaser.Game(this.config);
    }
}