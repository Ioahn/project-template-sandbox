import {
  createHexPrototype,
  Grid as HexGrid,
  rectangle,
  hexToOffset,
} from "honeycomb-grid";
import { inject, injectable } from "inversify";

import { DI_TYPES } from "@constants";

@injectable()
export class GridService implements IGridService {
  config: IGameConfig;
  grid!: Grid.GridMap;
  hex!: Grid.GridCell;

  constructor(@inject(DI_TYPES.gameConfig) config: IGameConfig) {
    this.config = config;

    //**  TODO load/save grid from domain model   */
    //**  TODO create/update grid when window resize resize */
    this.initGrid();
  }

  private initGrid() {
    const gridWidth =
      (this.config.scale?.width as number) / (this.config.grid.width * 2);

    this.hex = createHexPrototype({
      offset: 1,
      dimensions: gridWidth / Math.cos(Math.PI / 6),
      origin: "topLeft",
    });

    this.grid = new HexGrid(
      this.hex,
      rectangle({
        start: [0, 0],
        width: this.config.grid.width,
        height: this.config.grid.height,
      })
    ).filter((hex) => {
      const { col, row } = hexToOffset(hex);

      const ruleForLastRow = col !== this.config.grid.width - 1 || !!(row & 1);

      const ruleForMiddleLine = !(
        [3, 5].includes(row) && [0, this.config.grid.width - 1].includes(col)
      );

      return ruleForLastRow && ruleForMiddleLine;
    });
  }

  getGrid() {
    return this.grid;
  }
}
