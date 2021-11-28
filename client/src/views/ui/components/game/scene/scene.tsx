import React, { useEffect } from "react";

type Props = {
  name: string;
  autoStart?: boolean;
  options?: Record<any, string>;
  config?: ISceneConfig | string;
  scene: IGameSceneConstructor;
  connectSceneToGame?: (
    sceneName: string,
    scene: IGameScene,
    autoStart?: boolean,
    options?: Record<any, string>
  ) => void;
  removeSceneFromGame?: (sceneName?: string) => void;
};

export const Scene: React.FC<Props> = ({
  name,
  autoStart = true,
  options = {},
  config,
  connectSceneToGame,
  removeSceneFromGame,
  scene,
}) => {
  useEffect(() => {
    connectSceneToGame?.(name, new scene(config || name), autoStart, options);

    return () => removeSceneFromGame?.(name);
  }, [config, scene, connectSceneToGame, removeSceneFromGame, name]);

  return null;
};
