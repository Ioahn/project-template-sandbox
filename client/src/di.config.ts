import { Container } from "inversify";

import { DI_TYPES, EXTRENAL_TYPES, FABRIC_TYPES } from "@constants";
import { GameService } from "@services/game";

import { GameBaseConfig } from "./game.config";
import { GridService } from "@services/grid";

const appContainer = new Container();

appContainer
  .bind<IGameConfig>(DI_TYPES.gameConfig)
  .toConstantValue(GameBaseConfig);

appContainer.bind<IGameService>(DI_TYPES.services.GameService).to(GameService);

appContainer
  .bind<() => MaybeNull<IGame>>(FABRIC_TYPES.Game)
  .toFactory(
    (context: DI.IContext) => () =>
      context.container.isBound(EXTRENAL_TYPES.GameEngiene)
        ? context.container.get<IGame>(EXTRENAL_TYPES.GameEngiene)
        : null
  );

appContainer.bind(DI_TYPES.services.GridService).to(GridService);

export { appContainer };
