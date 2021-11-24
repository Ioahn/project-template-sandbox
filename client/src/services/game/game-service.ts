import Phaser from "phaser";

import { inject, injectable } from "inversify";
import { DI_TYPES, FABRIC_TYPES } from "@constants";

@injectable()
export class GameService implements IGameService {
  @inject(DI_TYPES.gameConfig) config!: IGameConfig;
  _game!: (game?: IGame) => IGame;

  get game() {
    return this._game();
  }

  constructor(
    @inject(FABRIC_TYPES.GameService.Game)
    factoryGame: () => (value?: IGame) => IGame
  ) {
    this._game = factoryGame();
  }

  addScene = (sceneName: string, scene: IGameScene) => {
    console.log(this);
      
    this.game.scene.add(sceneName, scene, true, { x: 400, y: 300 });
  };

  removeScene(sceneName: string) {
    this.game.scene.remove(sceneName);
  }

  init() {
    this._game(new Phaser.Game(this.config));
  }
}
