
export const MAIN_TYPES = {
    repos: {
        ResourceLoader: Symbol.for('ResourceLoader')
    },
    services: {
        GameService: Symbol.for('GameService'),
        GridService: Symbol.for('GridService')
    },
    gameConfig: Symbol.for('GameConfig')
}