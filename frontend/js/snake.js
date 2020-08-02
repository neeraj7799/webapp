var canvas=document.getElementById("snake");
var ctx=canvas.getContext("2d");
var scale=10;
var rows=canvas.height/scale;
var columns=canvas.width/scale;

var snake;

(function setup() {
    snake=new Snake();
    snake.draw();
}());