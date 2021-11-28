type Props = {
  grid: Grid.GridMap;
  x?: number;
  y?: number;
};

export class GridView extends Phaser.GameObjects.Graphics {
  grid: Grid.GridMap;

  constructor(scene: IGameScene, props: Props) {
    super(scene, {
      x: props.x,
      y: props.y,
      lineStyle: { color: 0xffffff, width: 3 },
    });

    this.grid = props.grid;

    this.create();
  }

  create() {
    this.grid!.each(this.renderGrid).run();

    const constraintsX =
      (this.scene.cameras.main.width - this.grid.hexPrototype.width * 14.5) / 2;

    const constraintsY =
      (this.scene.cameras.main.height - this.grid.hexPrototype.height * 7) / 2;

    this.setPosition(constraintsX, constraintsY);
  }

  renderGrid = (hex: Grid.GridCell) => {
    this.scene.add.existing(this);
    const [firstCorner, ...otherCorners] = hex.corners;

    this.beginPath();

    this.moveTo(firstCorner.x, firstCorner.y);
    otherCorners.forEach(({ x, y }) => this.lineTo(x, y));
    this.lineTo(firstCorner.x, firstCorner.y);

    this.closePath();
    this.strokePath();
  };
}
