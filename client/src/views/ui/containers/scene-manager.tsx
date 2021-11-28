import React, { useCallback } from "react";
import { useInjection } from "inversify-react";

import { Scene } from "@views/ui/components/game/scene";

import { DI_TYPES } from "@constants";

type Props = {
  children: React.ReactElement<typeof Scene>;
};

export const SceneManager: React.FC<Props> = ({ children }) => {
  const gameService = useInjection<IGameService>(DI_TYPES.services.GameService);

  const connectSceneToGame = useCallback(
    (
      sceneName: string,
      scene: IGameScene,
      autoStart: boolean,
      option: Record<any, string>
    ) => {
      const options = { autoStart, ...option } as ISceneOptions;

      gameService.addScene(sceneName, scene, options);
    },
    [gameService]
  );

  const removeSceneFromGame = useCallback(
    (sceneName: string) => {
      gameService.removeScene(sceneName);
    },
    [gameService]
  );

  return (
    <>
      {React.Children.map(children, (child) => {
        if (child.type === Scene) {
          return React.cloneElement(child, {
            connectSceneToGame,
            removeSceneFromGame,
          });
        }

        return null;
      })}
    </>
  );
};
