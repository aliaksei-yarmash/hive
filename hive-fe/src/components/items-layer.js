import Konva from 'konva';

import Insect from './insect';
import { insects } from '../data';

const layer = new Konva.Layer();
const widthInterval = 80;

insects.forEach(({ imageSrc }, i) => {
  layer.add(new Insect({ imageSrc, color: 'dark', position: { x: 90 + widthInterval * i, y: 60 } }));
});

insects.forEach(({ imageSrc }, i) => {
  layer.add(new Insect({ imageSrc, color: 'light', position: { x: 50 + widthInterval * i, y: 150 } }));
});

export default layer;
