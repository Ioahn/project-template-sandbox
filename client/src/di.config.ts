import { Container } from 'inversify';

import { MAIN_TYPES } from '@constants';
import { GameService } from '@services/game';

import { GameBaseConfig } from './game.config';

const appContainer = new Container();

appContainer.bind<IGameConfig>(MAIN_TYPES.gameConfig).toConstantValue(GameBaseConfig);

appContainer
    .bind<IGameService>(MAIN_TYPES.services.GameService)
    .to(GameService)

appContainer.bind<Factory<IGameService>>(MAIN_TYPES.services.GameService)
.toFactory<IGameService>((context) => () => (game: Phaser.Game) => {
    const gameService = context.container.get<IGameService>(MAIN_TYPES.services.GameService);

    gameService.game = game;

    return gameService;
})

export { appContainer }; 