import Konva from 'konva';

import Insect from './insect';
// import stage form './stage';
import { insects } from '../data';

const container = document.querySelector('#container');
const layer = new Konva.Layer();
const heightInterval = container.offsetHeight / insects.length + 1;

insects.forEach(({ imageSrc }, i) => {
  layer.add(new Insect({ imageSrc, color: 'dark', position: { y: heightInterval * (i + 1), x: 100 } }));
});

insects.forEach(({ imageSrc }, i) => {
  layer.add(new Insect({ imageSrc, color: 'light', position: { y: heightInterval * (i + 1), x: 300 } }));
});

export default layer;
