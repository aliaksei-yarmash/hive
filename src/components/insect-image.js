import Konva from 'konva';

export default class InsectImage {
  constructor({
    imageSrc,
    color,
    group
  }) {
    this.group = group;
    this.color = color;
    Konva.Image.fromURL(imageSrc, this.onImageLoad.bind(this));
  }

  onImageLoad(image) {
    image.cache();
    image.filters(this.color === 'dark' ? [Konva.Filters.Invert] : []);
    image.scale({ x: 0.2, y: 0.2 });
    image.position({ x: -50, y: -50 });
    this.group.add(image);
    this.group.draw();
  }
}
