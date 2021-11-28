import { injectable, inject } from "inversify";
import { DI_TYPES, FABRIC_TYPES } from "@constants";

type SceneOptions = {
  autoStart?: boolean;
  size: {
    x: number;
    y: number;
  };
};

@injectable()
export class GameService implements IGameService {
  @inject(DI_TYPES.gameConfig) config!: IGameConfig;
  @inject(FABRIC_TYPES.Game) getGame!: () => IGame;

  get game() {
    return this.getGame();
  }

  getScene(sceneName: string): Phaser.Scene {
    return this.game?.scene.getScene(sceneName);
  }

  addScene(sceneName: string, scene: IGameScene, options?: SceneOptions) {
    this.game?.scene.add(sceneName, scene, options?.autoStart, options?.size);
  }

  removeScene(sceneName: string) {
    this.game?.scene.remove(sceneName);
  }

  start(sceneName: string) {
    this.game?.scene.start(sceneName);
  }
}
