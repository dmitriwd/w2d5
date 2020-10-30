class Game {
  constructor() {
    this.player = new Character();
    this.background = new Background();
    this.obstacles = [];
  }

  setup() {
    this.background.setup();
  }

  draw() {
    this.background.draw();
    this.player.draw();

    if (frameCount % 120 === 0) {
      this.obstacles.push(new Obstacle());
    }

    this.obstacles.forEach((obstacle, index) => {
      obstacle.draw();
      if (obstacle.x + obstacle.width <= 0) {
        this.obstacles.splice(index, 1);
      }

      if (this.colisionCheck(obstacle, this.player)) {
        console.log("OOOOOH");
        noLoop();
      }
    });
  }

  colisionCheck(obstacle, player) {
    //   player.left + player.width (players.rightSide)
    //  if player's right side is to the left of the obstacle's left
    if (player.x + player.width < obstacle.x) {
      return false;
    }

    //  obstacle's left and obstacle width (obstacle.rightSide)
    // if obstacle's right side is to the left of player's left
    if (obstacle.x + obstacle.width < player.x) {
      return false;
    }

    // player.topSide > obstacle.TopSide + obstacle.height (obstacle.Bottom)
    // player top side is below obstacle's bottom side
    if (player.y > obstacle.y + obstacle.height) {
      return false;
    }

    //  obstacle.topSide > player.topSide + player.height (player.bottomSide)
    //  obstacle top side is below the player's bottom side
    if (obstacle.y > player.y + player.height) {
      return false;
    }
    return true;
  }
}
