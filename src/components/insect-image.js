import Konva from 'konva';

export default class InsectImage {
  constructor({
    imageSrc,
    group
  }) {
    this.group = group;
    Konva.Image.fromURL(imageSrc, this.onImageLoad.bind(this));
  }

  onImageLoad(image) {
    image.cache();
    image.filters([
      Konva.Filters.Invert
    ]);
    this.group.add(image);
    this.group.draw();
  }
}
