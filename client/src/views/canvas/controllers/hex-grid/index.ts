import { MAIN_TYPES } from "@constants";
import { lazyInject } from "@utils/di";
import { GameScene } from "@utils/scene";

import pussycat from "@assets/i.jpeg";

export class Grid extends GameScene {
    @lazyInject(MAIN_TYPES.services.GridService) gridService!: IGridService;
    @lazyInject(MAIN_TYPES.services.GameService) gameService!: IGameService;
    pussycat!: Phaser.GameObjects.Image;

    getGrid() {

    }

    createGrid() {

    }

    preload ()
    {
        console.log(pussycat);
        
        this.load.image('pussycat', pussycat);
    }

    create (data: { x: number; y: number; })
    {
        this.pussycat = this.add.image(data.x, data.y, 'face');
    }
}
