import React, { useEffect } from 'react';

type Props = {
    name: string,
    config?: ISceneConfig | string,
    scene: IGameSceneConstructor,
    connectSceneToGame?: (sceneName: string, scene: IGameScene) => void,
    removeSceneFromGame?: (sceneName?: string) => void
}

export const Scene: React.FC<Props> = ({
    name,
    config,
    connectSceneToGame,
    removeSceneFromGame,
    scene
}) => {
    useEffect(() => {
        connectSceneToGame?.(name, new scene(config || name));

        return () => removeSceneFromGame?.(name)
    }, [config, scene, connectSceneToGame, removeSceneFromGame, name])

    return null;
}