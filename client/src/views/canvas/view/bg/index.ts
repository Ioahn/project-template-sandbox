type Props = {
  x: number;
  y: number;
  image: string;
};

export class Background extends Phaser.GameObjects.Image {
  constructor(scene: IGameScene, options: Props) {
    super(scene, options.x, options.y, options.image);

    this.normalizeBG();
    scene.add.existing(this);
  }

  normalizeBG() {
    this.setOrigin(0.5, 0.5);

    const scaleX = this.scene.cameras.main.width / this.width;
    const scaleY = this.scene.cameras.main.height / this.height;
    const scale = Math.max(scaleX, scaleY);

    this.setScale(scale).setScrollFactor(0);
  }
}
