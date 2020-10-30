class Character {
  constructor() {
    this.x = 100;
    //  this.y = 210;
    this.y = 0;
    this.width = 40;
    this.height = 40;
    this.gravity = 0.2;
    this.velocity = 0;
    this.floor = 210;
    this.jumpCounts = 0;
  }

  jump(steps) {
    if (this.y <= 0 || this.jumpCounts === 2) {
      console.log("HERE?");
      return;
    }

    this.jumpCounts++;
    this.y -= 10;
    this.velocity -= 5;
  }

  draw() {
    this.velocity += this.gravity;
    this.y += this.velocity;
    //  WE ARE ON THE FLOOR
    if (this.y > this.floor) {
      this.y = this.floor;
      this.jumpCounts = 0;
      this.velocity = 0;
    }
    //  DRAW CHARACTER
    image(character, this.x, this.y, this.width, this.height);
  }
}
