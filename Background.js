class Background {
  constructor() {
    //  this.height = height;
    //  this.width = width;
    this.x = 0;
  }

  setup() {
    this.height = height;
    this.width = width;
  }

  draw() {
    this.x -= 3;

    image(bgImage, this.x, 0, this.width, this.height);
    image(bgImage, this.x + this.width, 0, this.width, this.height);

    if (this.x <= -this.width) {
      this.x = 0;
    }
  }
}
