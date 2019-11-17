import Konva from 'konva';

import { STAGE_WIDTH, STAGE_HEIGHT } from '../constants';

const circle = new Konva.RegularPolygon({
  x: STAGE_WIDTH / 2,
  y: STAGE_HEIGHT / 2,
  sides: 6,
  radius: 70,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 4,
  draggable: true,
});

export default circle;
