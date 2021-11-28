import Phaser from "phaser";
import { useInjection } from "inversify-react";

import { DI_TYPES, EXTRENAL_TYPES } from "@constants";
import { appContainer } from "@di";
import { useEffect, useRef } from "react";

export const useGameInit = () => {
  const $game = useRef<HTMLCanvasElement>(null);
  const gameService = useInjection<IGameService>(DI_TYPES.services.GameService);
  const gameConfig = useInjection<IGameConfig>(DI_TYPES.gameConfig);

  useEffect(() => {
    gameConfig.canvas = $game.current!;

    appContainer
      .bind<IGame>(EXTRENAL_TYPES.GameEngiene)
      .toConstantValue(new Phaser.Game(gameConfig));
  }, [gameService, gameConfig]);

  return $game;
};
