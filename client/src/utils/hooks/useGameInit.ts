import { MAIN_TYPES } from "@constants";
import { useInjection } from "inversify-react";
import { useEffect, useRef } from "react"

export const useGameInit = () => {
    const $game = useRef<HTMLCanvasElement>(null);
    const gameService = useInjection<IGameService>(MAIN_TYPES.services.GameService);
    const gameConfig = useInjection<IGameConfig>(MAIN_TYPES.gameConfig);
    
    useEffect(() => {
        gameConfig.canvas = $game.current!;

        gameService.init();
    }, [gameService, gameConfig])

    return $game;
}