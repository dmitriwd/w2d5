class Character {
  constructor() {
    this.x = 100;
    this.y = 210;
    this.width = 40;
    this.height = 40;
  }

  jump(steps) {
    if (this.y <= 0) {
      return;
    }
    this.y -= steps;
  }

  draw() {
    image(character, this.x, this.y, this.width, this.height);
  }
}
