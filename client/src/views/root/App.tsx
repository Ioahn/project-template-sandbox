import React from "react";
import { Provider as DIProvider } from "inversify-react";

import { appContainer } from "src/di.config";

import { CanvasVC, SceneManager } from "@views/ui/containers";
import { Scene } from "@views/ui/components/game/scene";

import { GridController } from "@views/canvas/controllers/hex-grid";

export const App = () => {
  return (
    <DIProvider container={appContainer}>
      <CanvasVC />
      <SceneManager>
        <Scene name="Grid" scene={GridController} />
      </SceneManager>
    </DIProvider>
  );
};
