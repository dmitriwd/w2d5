class Background {
  constructor() {
    //  this.height = height;
    //  this.width = width;
  }

  setup() {
    this.height = height;
    this.width = width;
  }

  draw() {
    image(bgImage, 0, 0, this.width + 10, this.height + 20);
  }
}
