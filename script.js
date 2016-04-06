var canvas = document.getElementById("myCanvas"); // gets the html canvas element
var ctx = canvas.getContext("2d"); // tool we can use to paint on the canvas

var x = canvas.width/2;
var y = canvas.height-30;

var ballRadius = 10;

var dx = 2;
var dy = -2;
function drawBall(){
    ctx.beginPath(); // begins method to draw
    ctx.arc(x, ballRadius, 10, 0, Math.PI*2); // creates a cirle
    ctx.fillStyle = "#0095DD"; // sets the style to fill the circle
    ctx.fill(); // fills the circle
    ctx.closePath(); // stops method
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) { // if the ball is more than the width or less than 0 bounce it
        dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) { // bounces the ball off the top and bottom wall
        dy = -dy; // if the ball is less than zero or more than the height reverse it
    }
}
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); //clears the whole canvas
    drawBall();
    x += dx;
    y += dy;
}
setInterval(draw, 10); // runs the first argument every second argument
