/*
  ____        _ _   ____                                  
 |  _ \      | | | |  _ \                                 
 | |_) | __ _| | | | |_) | ___  _   _ _ __   ___ ___ _ __ 
 |  _ < / _` | | | |  _ < / _ \| | | | '_ \ / __/ _ \ '__|
 | |_) | (_| | | | | |_) | (_) | |_| | | | | (_|  __/ |   
 |____/ \__,_|_|_| |____/ \___/ \__,_|_| |_|\___\___|_|   
                                                          
*/

// DOM elements
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Ball properties
const ballRadius = 10;
let x = canvas.width/2;
let y = canvas.height-30;
let dx = 2;
let dy = -2;

// Paddle properties
const paddleHeight = 10;
const paddleWidth = 75;
let paddleX = (canvas.width-paddleWidth)/2;

// Input properties
let rightPressed = false;
let leftPressed = false;

// Game properties
let score = 0;
let gameOver = false;


// Add event listeners for keydown and keyup events
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

// This function is called when a key is pressed down
function keyDownHandler(e) {
    // If the right arrow or "D" key is pressed, set the rightPressed flag to true
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    // If the left arrow or "A" key is pressed, set the leftPressed flag to true
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

// This function is called when a key is released
function keyUpHandler(e) {
    // If the right arrow or "D" key is released, set the rightPressed flag to false
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    // If the left arrow or "A" key is released, set the leftPressed flag to false
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

// This function draws the ball on the canvas
function drawBall() {
    ctx.beginPath(); // Start a new drawing path
    ctx.arc(x, y, ballRadius, 0, Math.PI*2); // Define a circle at the current x and y coordinates with the specified radius and start and end angles
    ctx.fillStyle = "#FF0000"; // Set the fill color of the circle
    ctx.fill(); // Fill the circle with the current fill color
    ctx.closePath(); // Close the current drawing path
}

// This function draws the paddle on the canvas
function drawPaddle() {
    ctx.beginPath(); // Start a new drawing path
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight); // Define a rectangle with the current paddle coordinates and dimensions
    ctx.fillStyle = "#FF0000"; // Set the fill color of the rectangle
    ctx.fill(); // Fill the rectangle with the current fill color
    ctx.closePath(); // Close the current drawing path
}

// This function draws the player's score on the canvas
function drawScore() {
    ctx.font = "16px Arial"; // Set the font size and family for the text
    ctx.fillStyle = "#000000"; // Set the color of the text to black
    ctx.fillText("Score: " + score, 8, 20); // Draw the text at the specified coordinates
}

// This function displays the game over screen when the player loses
function drawGameOverScreen() {
    const gameOverScreen = document.getElementById("gameOverScreen"); // Get the HTML element for the game over screen
    const scoreElement = document.getElementById("score"); // Get the HTML element for the player's score
    scoreElement.innerHTML = score; // Set the text of the score element to the player's score
    gameOverScreen.style.display = "block"; // Display the game over screen by setting its CSS display property to "block"

    clearInterval(interval); // Stop the game loop by clearing the interval set by setInterval()
}

// This function restarts the game by reloading the page
function restartGame() {
    location.reload(); // Reload the page, effectively resetting the game
}


function draw() {
    // Check if game is over, if so, return
    if (gameOver) {
        return;
    }
    
    // Clear canvas, then draw score, ball, and paddle
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawScore();
    drawBall();
    drawPaddle();
    
    // Check if ball hits left or right wall, change direction if so
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    
    // Check if ball hits top wall, change direction if so
    if(y + dy < ballRadius) {
        dy = -dy;
    }
    else if(y + dy > canvas.height-ballRadius) {
        // Check if ball hits paddle, change direction and increase speed if so, update score
        if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
            dx *= 1.1;
            score+=1;
        }
        // If ball hits bottom wall and misses paddle, game over
        else {
            drawGameOverScreen();
        }
    }
    
    // Move paddle to the right if right arrow key is pressed and paddle is not at the right wall
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    // Move paddle to the left if left arrow key is pressed and paddle is not at the left wall
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
    
    // Update ball position based on direction
    x += dx;
    y += dy;
}

// This line sets up a JavaScript interval that repeatedly calls the draw 
//  function every 10 milliseconds, which updates the canvas and animates the 
//  ball and paddle. The interval ID is stored in the variable "interval", 
//  which can be later used to stop the interval.
var interval = setInterval(draw, 10);