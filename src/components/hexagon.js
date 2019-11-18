import Konva from 'konva';

import { STAGE_WIDTH, STAGE_HEIGHT } from '../constants';
import stage from './stage';

export default class Hexagon extends Konva.RegularPolygon {
  constructor() {
    super({
      x: STAGE_WIDTH / 2,
      y: STAGE_HEIGHT / 2,
      sides: 6,
      radius: 70,
      fill: 'red',
      stroke: 'black',
      strokeWidth: 4,
      draggable: true,
    });
    this.setCursorStyle();
  }

  setCursorStyle() {
    this.on('mouseenter', () => {
      stage.container().style.cursor = 'move';
    });
    this.on('mouseleave', () => {
      stage.container().style.cursor = 'default';
    });
  }
}
