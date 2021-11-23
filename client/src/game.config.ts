const GAME_WIDTH = 1000;
const GAME_RATIO = '21:9';


const getRatioCanvas = (width: number, ratio: '4:3' | '16:9' | '1:1' | '21:9') => {

    const [$1, $2] = ratio.split(':');
    const aspectRatio = +$1 / +$2;

    return {
        width, 
        height: width * aspectRatio
}}

export const GameBaseConfig: IGameConfig = {
    type: Phaser.WEBGL,
    customEnvironment: false,
    scale: {
        mode: Phaser.Scale.RESIZE,
        width: getRatioCanvas(GAME_WIDTH, GAME_RATIO).width,
        height: getRatioCanvas(GAME_WIDTH, GAME_RATIO).height,
        min: {
            width: getRatioCanvas(640, GAME_RATIO).width,
            height: getRatioCanvas(640, GAME_RATIO).width
        },
        max: {
            width: getRatioCanvas(window.innerWidth, GAME_RATIO).width,
            height: getRatioCanvas(window.innerWidth, GAME_RATIO).width
        }
    },
    grid: {
        width: 15,
        height: 9,
        cell: {
            size: 30
        }
    }
}

