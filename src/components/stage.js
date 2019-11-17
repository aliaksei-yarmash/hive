import Konva from 'konva';

import {
  CONTAINER_ID,
  STAGE_WIDTH,
  STAGE_HEIGHT,
} from '../constants';

const stage = new Konva.Stage({
  container: CONTAINER_ID,
  width: STAGE_WIDTH,
  height: STAGE_HEIGHT,
});

export default stage;
