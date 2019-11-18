import Konva from 'konva';

import Hexagon from './hexagon';

const layer = new Konva.Layer();
layer.add(new Hexagon({ image: './3.jpg' }));

export default layer;
