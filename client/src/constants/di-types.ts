
export const DI_TYPES = {
    repos: {
        ResourceLoader: Symbol.for('ResourceLoader')
    },
    services: {
        GameService: Symbol.for('GameService'),
        GridService: Symbol.for('GridService')
    },
    gameConfig: Symbol.for('GameConfig')
}

export const FABRIC_TYPES = {
    GameService: {
        Game: Symbol.for('Fabric<IGame>')
    }
}