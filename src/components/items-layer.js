import Konva from 'konva';

import Hexagon from './hexagon';

const layer = new Konva.Layer();
layer.add(new Hexagon());

export default layer;
