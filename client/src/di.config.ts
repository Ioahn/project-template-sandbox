import { Container } from "inversify";

import { DI_TYPES, FABRIC_TYPES } from "@constants";
import { GameService } from "@services/game";
import { memo } from "@utils/common";

import { GameBaseConfig } from "./game.config";

const appContainer = new Container();

appContainer
  .bind<IGameConfig>(DI_TYPES.gameConfig)
  .toConstantValue(GameBaseConfig);

appContainer.bind<IGameService>(DI_TYPES.services.GameService).to(GameService);

appContainer
  .bind<DI.Factory<IGame>>(FABRIC_TYPES.GameService.Game)
  .toFactory<IGame, [], [IGame]>(() => () => memo((game: IGame) => game));

export { appContainer };
