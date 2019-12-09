import Konva from 'konva';

import {
  CONTAINER_ID,
} from '../constants';
import { startDragListener, removeDragListener } from './drag-background';

const container = document.querySelector('#container');
const stage = new Konva.Stage({
  container: CONTAINER_ID,
  width: container.offsetWidth,
  height: container.offsetHeight,
  draggable: true
});

window.stage = stage;
stage.on('dragstart', ({ target, evt }) => {
  target === stage && startDragListener(evt)
})
stage.on('dragend', ({ target, evt }) => {
  target === stage && removeDragListener(evt)
})

function fitStageIntoParentContainer() {
  stage.width(container.offsetWidth);
  stage.height(container.offsetHeight);
  stage.draw();
}

window.addEventListener('resize', fitStageIntoParentContainer);

export default stage;
