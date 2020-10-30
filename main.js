function preload() {
  console.log("PRELOAD");
  bgImage = loadImage("./assets/wide.jpg");
  character = loadImage("./assets/character-right.png");
}

const game = new Game();

function setup() {
  console.log("SETUP");

  createCanvas(500, 300);
  game.setup();
}

function draw() {
  clear();
  background("cyan");
  game.draw();
}

function keyPressed() {
  if (keyCode === 32) {
    game.player.jump(10);
  }
}
