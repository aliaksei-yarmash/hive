import Konva from 'konva';

import { STAGE_WIDTH, STAGE_HEIGHT } from '../constants';
import stage from './stage';
import itemsLayer from './items-layer'

export default class Hexagon extends Konva.RegularPolygon {
  constructor({ image }) {
    super({
      x: STAGE_WIDTH / 2,
      y: STAGE_HEIGHT / 2,
      sides: 6,
      radius: 60,
      // fill: 'red',
      fillPatternScale: {x: 0.14, y: 0.14},
      fillPatternRepeat: 'no-repeat',
      fillPatternOffsetX: 250,
      fillPatternOffsetY: 250,
      stroke: 'black',
      strokeWidth: 30,
      draggable: true,
      filters: [
        Konva.Filters.Invert
      ]
    });
    this.setCursorStyle();
    this.setImage(image);
  }

  setCursorStyle() {
    this.on('mouseenter', () => {
      stage.container().style.cursor = 'move';
    });
    this.on('mouseleave', () => {
      stage.container().style.cursor = 'default';
    });
  }

  setImage(imageSrc) {
    const image = new Image();

    image.onload = () => {
      image.style.filter = 'invert(100%)'
      this.fillPatternImage(image);
      this.filters([Konva.Filters.Blur]);
      itemsLayer.draw();
    };
    image.src = imageSrc;
  }
}
