import Konva from 'konva';

import { STAGE_WIDTH, STAGE_HEIGHT } from '../constants';

export default class Hexagon extends Konva.RegularPolygon {
  constructor() {
    super({
      x: STAGE_WIDTH / 2,
      y: STAGE_HEIGHT / 2,
      sides: 6,
      radius: 70,
      stroke: 'black',
      strokeWidth: 6,
    });
  }
}
