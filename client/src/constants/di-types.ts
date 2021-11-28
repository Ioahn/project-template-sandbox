export const DI_TYPES = {
  repos: {
    ResourceLoader: Symbol.for("ResourceLoader"),
  },
  services: {
    GameService: Symbol.for("GameService"),
    GridService: Symbol.for("GridService"),
  },
  gameConfig: Symbol.for("GameConfig"),
};

export const EXTRENAL_TYPES = {
  GameEngiene: Symbol.for("Phaser"),
};

export const FABRIC_TYPES = {
  Game: Symbol.for("Fabric<IGame>"),
};
