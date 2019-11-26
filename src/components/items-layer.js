import Konva from 'konva';

import Insect from './insect';
import antImageSrc from '../images/insects/ant.png';

const layer = new Konva.Layer();
layer.add(new Insect({ imageSrc: antImageSrc }));

export default layer;
