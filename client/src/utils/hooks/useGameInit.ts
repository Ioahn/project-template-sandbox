import { DI_TYPES } from "@constants";
import { useInjection } from "inversify-react";
import { useEffect, useRef } from "react"

export const useGameInit = () => {
    const $game = useRef<HTMLCanvasElement>(null);
    const gameService = useInjection<IGameService>(DI_TYPES.services.GameService);
    const gameConfig = useInjection<IGameConfig>(DI_TYPES.gameConfig);
    
    useEffect(() => {
        gameConfig.canvas = $game.current!;

        gameService.init();
    }, [gameService, gameConfig])

    return $game;
}