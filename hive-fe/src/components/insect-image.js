import Konva from 'konva';

export default class InsectImage {
  constructor({
    imageSrc,
    color,
    group
  }) {
    this.group = group;
    this.color = color;
    Konva.Image.fromURL(`/hive/${imageSrc}`, this.onImageLoad.bind(this));
  }

  onImageLoad(image) {
    image.cache();
    image.filters(this.color === 'dark' ? [Konva.Filters.Invert] : []);
    image.scale({ x: 0.12, y: 0.12 });
    image.position({ x: -30, y: -32 });
    this.group.add(image);
    this.group.draw();
  }
}
