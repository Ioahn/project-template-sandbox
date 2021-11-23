import React from 'react';
import { Provider as DIProvider } from 'inversify-react';

import { appContainer } from '@di';

import { CanvasVC, SceneManager } from '@views/ui/containers';
import { Scene } from '@views/ui/components/game/scene';

import { Grid } from '@views/canvas/controllers/hex-grid';

export const App = () => {
    
    return ( 
        <DIProvider container={appContainer}>
            <CanvasVC />
            <SceneManager>
                <Scene name="Grid" scene={Grid} />
            </SceneManager>               
        </DIProvider>
    )
}