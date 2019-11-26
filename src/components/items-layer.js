import Konva from 'konva';

import Insect from './insect';
import { insects } from '../data';

const layer = new Konva.Layer();
insects.forEach(({ quantity, imageSrc }) => {
  for (let i = 0; i < quantity; i++) {
    layer.add(new Insect({ imageSrc }));
  }
});

export default layer;
