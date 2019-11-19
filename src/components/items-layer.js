import Konva from 'konva';

import Hexagon from './hexagon';
import antImage from '../images/insects/ant.png'

const layer = new Konva.Layer();
layer.add(new Hexagon({ image: antImage }));
layer.add(new Hexagon({ image: antImage }));

export default layer;
