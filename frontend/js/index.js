var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
console.log(radius);
ctx.translate(radius, radius);
console.log(radius);
radius = radius * 0.90
drawClock();
function drawClock() {
    ctx.arc(0, 0, radius, 0 , 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
}