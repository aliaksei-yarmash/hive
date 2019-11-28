import Konva from 'konva';

export default class Hexagon extends Konva.RegularPolygon {
  constructor({
    color
  }) {
    super({
      sides: 6,
      radius: 70,
      stroke: color === 'dark' ? 'white' : 'black',
      fill: color === 'dark' ? '#6a73aa' : '#addbd9',
      strokeWidth: 4,
    });
  }
}
