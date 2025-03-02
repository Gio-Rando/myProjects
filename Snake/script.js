const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const restartButton = document.getElementById("restartButton");

const cellSize = 40;
const cellNum = 20;
const screenSize = cellSize * cellNum;

canvas.width = screenSize;
canvas.height = screenSize;

let snake, fruit, game, gameInterval;

// Initialize game objects
function initializeGame() {
  snake = {
    body: [{ x: 5, y: 10 }, { x: 4, y: 10 }, { x: 3, y: 10 }],
    direction: { x: 1, y: 0 },
    newBlock: false,
    draw() {
      ctx.fillStyle = "rgb(128,0,255)";
      this.body.forEach(block => {
        ctx.fillRect(block.x * cellSize, block.y * cellSize, cellSize, cellSize);
      });
    },
    move() {
      const newHead = {
        x: this.body[0].x + this.direction.x,
        y: this.body[0].y + this.direction.y,
      };

      if (this.newBlock) {
        this.body.unshift(newHead);
        this.newBlock = false;
      } else {
        this.body.pop();
        this.body.unshift(newHead);
      }
    },
    grow() {
      this.newBlock = true;
    },
  };

  fruit = {
    position: randomFruitPosition(),
    draw() {
      ctx.fillStyle = "rgb(255, 0, 128)";
      ctx.fillRect(
        this.position.x * cellSize,
        this.position.y * cellSize,
        cellSize,
        cellSize
      );
    },
    randomize() {
      this.position = randomFruitPosition();
    },
  };

  game = {
    score: 0,
    checkCollision() {
      if (
        snake.body[0].x === fruit.position.x &&
        snake.body[0].y === fruit.position.y
      ) {
        fruit.randomize();
        snake.grow();
        this.score++;
      }
    },
    checkFail() {
      const head = snake.body[0];

      // Check wall collision
      if (head.x < 0 || head.x >= cellNum || head.y < 0 || head.y >= cellNum) {
        this.gameOver();
      }

      // Check self-collision
      for (let i = 1; i < snake.body.length; i++) {
        if (snake.body[i].x === head.x && snake.body[i].y === head.y) {
          this.gameOver();
        }
      }
    },
    gameOver() {
      clearInterval(gameInterval);
      alert(`Game Over! Your score: ${this.score}`);
      restartButton.style.display = "block";
    },
    drawScore() {
      ctx.fillStyle = "white";
      ctx.font = "20px Arial";
      ctx.fillText(`Score: ${this.score}`, screenSize - 100, screenSize - 20);
    },
  };
}

// Randomize fruit position
function randomFruitPosition() {
  return {
    x: Math.floor(Math.random() * cellNum),
    y: Math.floor(Math.random() * cellNum),
  };
}

// Game loop
function update() {
  snake.move();
  game.checkCollision();
  game.checkFail();
}

function draw() {
  ctx.fillStyle = "rgb(0, 255, 0)";
  ctx.fillRect(0, 0, screenSize, screenSize);
  fruit.draw();
  snake.draw();
  game.drawScore();
}

function loop() {
  update();
  draw();
}

// Restart button functionality
restartButton.addEventListener("click", () => {
  restartButton.style.display = "none";
  initializeGame();
  gameInterval = setInterval(loop, 150);
});

// Start the game
initializeGame();
gameInterval = setInterval(loop, 150);

// Handle keyboard input
// Handle keyboard input (WASD)
document.addEventListener("keydown", event => {
  const key = event.key.toLowerCase(); // Convert to lowercase for consistency

  if (key === "w" && snake.direction.y !== 1) {
    snake.direction = { x: 0, y: -1 }; // Move up
  } else if (key === "s" && snake.direction.y !== -1) {
    snake.direction = { x: 0, y: 1 }; // Move down
  } else if (key === "d" && snake.direction.x !== -1) {
    snake.direction = { x: 1, y: 0 }; // Move right
  } else if (key === "a" && snake.direction.x !== 1) {
    snake.direction = { x: -1, y: 0 }; // Move left
  }
});
