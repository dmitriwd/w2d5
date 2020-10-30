class Character {
  constructor() {
    this.x = 100;
    this.y = 200;
    this.width = 40;
    this.height = 40;
  }

  draw() {
    image(character, this.x, this.y, this.width, this.height);
  }
}
