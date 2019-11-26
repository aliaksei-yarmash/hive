import Konva from 'konva';

import stage from './stage';
import Hexagon from './hexagon';
import InsectImage from './insect-image';

export default class Insect extends Konva.Group {
  constructor({ imageSrc }) {
    super();
    this.add(new Hexagon());
    new InsectImage({ imageSrc, group: this }); // eslint-disable-line
    this.draggable(true);
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
