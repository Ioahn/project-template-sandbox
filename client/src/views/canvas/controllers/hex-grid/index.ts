import { DI_TYPES } from "@constants";
import { lazyInject } from "@utils/di";
import { GameScene } from "@utils/scene";
import { GridView } from "@views/canvas/view/grid";
import { Background } from "@views/canvas/view/bg";

import map from "@assets/map.jpeg";

export class GridController extends GameScene {
  @lazyInject(DI_TYPES.services.GridService) gridService!: IGridService;
  @lazyInject(DI_TYPES.services.GameService) gameService!: IGameService;

  views: Map<string, any> = new Map();

  preload() {
    this.load.image("map", map);
  }

  create(data: { x: number; y: number }) {
    this.createBackground();
    this.createGrid();
  }

  createGrid() {
    this.views.set(
      "grid",
      new GridView(this, {
        x: 0,
        y: 0,
        grid: this.gridService.getGrid(),
      })
    );
  }

  createBackground = () => {
    this.views.set(
      "bg",
      new Background(this, {
        x: this.cameras.main.width / 2,
        y: this.cameras.main.height / 2,
        image: "map",
      })
    );
  };
}
