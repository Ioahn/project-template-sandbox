import React, { useCallback } from 'react';
import { useInjection } from 'inversify-react';

import { Scene } from '@views/ui/components/game/scene';

import { MAIN_TYPES } from '@constants';


type Props = {
    children: React.ReactElement<typeof Scene>
}

export const SceneManager: React.FC<Props> = ({ children }) => {
    const gameService = useInjection<IGameService>(MAIN_TYPES.services.GameService);

    const connectSceneToGame = useCallback((sceneName: string, scene: IGameScene) => {
        gameService.addScene(sceneName, scene);      
    }, [gameService]);

    const removeSceneFromGame = useCallback((sceneName: string) => {
        gameService.removeScene(sceneName)      
    }, [gameService])
    
    return <>
        {
            React.Children.map(children, child => {
            
                if (child.type === Scene) {
                    return React.cloneElement(child, { 
                        connectSceneToGame,
                        removeSceneFromGame  
                    })
                }

                return null
            })
        }
    </>
}