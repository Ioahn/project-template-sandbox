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

type ISceneOptions = {
  autoStart?: boolean;
  size: {
    x: number;
    y: number;
  };
};

interface IGameService {
  getScene(sceneName: string): IGameScene;
  addScene(sceneName: string, scene: IGameScene, options: ISceneOptions);
  removeScene(sceneName: string);
  getGame: () => IGame;
}

interface IGameView<Props extends PrimitiveObject> {
  props: Partial<Props>;

  public shouldUpdate(
    newProps: Partial<Props>,
    pastProps: Partial<Props>
  ): boolean;

  private setProps(newProps: Partial<Props>): void;
}

interface IGridService {
  getGrid(): Grid.HexMap;
}

declare namespace Grid {
  import("honeycomb-grid");

  import { Grid, Hex } from "honeycomb-grid";

  type GridMap = Grid<GridCell>;
  type GridCell = Hex;
}

type ISceneConfig = Phaser.Types.Scenes.SettingsConfig;
