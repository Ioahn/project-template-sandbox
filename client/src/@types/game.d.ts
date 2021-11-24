interface IGameConfig extends Phaser.Types.Core.GameConfig {
  grid: {
    width: number;
    height: number;
    cell: {
      size: number;
    };
  };
}

type IGameScene = Phaser.Scene;

type IGame = Phaser.Game;

interface IGameSceneConstructor {
  new (config: string | ISceneConfig): IGameScene;
}

interface ILazyInit {
  public init();
}

interface IGameService extends ILazyInit {
  addScene(sceneName: string, scene: IGameScene);
  removeScene(sceneName: string);
  get game(): IGame;
  _game: (value: IGame) => IGame;
}

interface IGridService {}

interface IGridCell {}

type ISceneConfig = Phaser.Types.Scenes.SettingsConfig;
