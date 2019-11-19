import Konva from 'konva';

import {
  CONTAINER_ID,
} from '../constants';

const container = document.querySelector('#container');
const stage = new Konva.Stage({
  container: CONTAINER_ID,
  width: container.offsetWidth,
  height: container.offsetHeight,
  draggable: true
});

function fitStageIntoParentContainer() {
  stage.width(container.offsetWidth);
  stage.height(container.offsetHeight);
  stage.draw();
}

window.addEventListener('resize', fitStageIntoParentContainer);

export default stage;
