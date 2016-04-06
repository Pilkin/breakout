var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d"); // tool we can use to paint on the canvas

ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

console.log("hello sir!");
