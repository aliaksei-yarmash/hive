import Konva from 'konva';

import stage from './stage';
import Hexagon from './hexagon';
import InsectImage from './insect-image';

export default class Insect extends Konva.Group {
  constructor({ imageSrc, color, position }) {
    super();
    this.add(new Hexagon({ color }));
    new InsectImage({ imageSrc, color, group: this }); // eslint-disable-line
    this.draggable(true);
    this.position(position);
    this.setCursorStyle();
  }

  setCursorStyle() {
    this.on('mouseenter', () => {
      stage.container().style.cursor = 'move';
    });

    this.on('mouseleave', () => {
      stage.container().style.cursor = null;
    });
  }
}
