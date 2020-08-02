var canvas=document.getElementById("snake");
var ctx=canvas.getContext("2d");
var scale=10;
var rows=canvas.height/scale;
var columns=canvas.width/scale;

var snake;

(function setup() {
    snake=new drawSnake();
    window.setInterval(() => {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        snake.update();
        snake.draw();
    }, 250 );
}());




// const { text } = require("express");

