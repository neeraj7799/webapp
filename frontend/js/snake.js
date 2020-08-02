var canvas=document.getElementById("snake");
var ctx=canvas.getContext("2d");
var scale=10;
var rows=canvas.height/scale;
var columns=canvas.width/scale;

var snake;

(function setup() {
    snake=new drawSnake();
    snake.draw();
}());


// const { text } = require("express");

function drawSnake(){
    this.x=0;
    this.y=0;
    this.draw=function() {
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(this.x,this.y,scale,scale);
    }
}