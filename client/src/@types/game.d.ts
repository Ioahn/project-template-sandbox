interface IGameConfig extends Phaser.Types.Core.GameConfig {
    grid: {
        width: number,
        height: number,
        cell: {
            size: number
        }
    }
}

interface IGameScene extends Phaser.Scene {
}

interface IGameSceneConstructor {
    new(config: string | ISceneConfig): IGameScene 
}

interface ILazyInit {
    public init();
}

interface IGameService extends ILazyInit {
    addScene(sceneName: string ,scene: IGameScene);
    removeScene(sceneName: string);
    game: Phaser.Game
}

interface IGridService {
        
}

interface Cell implements Hex {
    
}

interface ISceneConfig extends Phaser.Types.Scenes.SettingsConfig {}



