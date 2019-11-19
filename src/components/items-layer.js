import Konva from 'konva';

import Hexagon from './hexagon';

const layer = new Konva.Layer();
layer.add(new Hexagon({ image: './ant.png' }));
layer.add(new Hexagon({ image: './bee.png' }));

export default layer;
