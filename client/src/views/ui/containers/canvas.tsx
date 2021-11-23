import React from "react";
import { useGameInit } from "@utils/hooks";

export const CanvasVC = () => {
  const $game = useGameInit();

  return <canvas ref={$game}/>;
};
