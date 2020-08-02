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


function drawSnake(){
    this.x=0;
    this.y=0;
    this.xspeed= scale=1;
    this.yspeed=0;
    this.draw=function() {
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(this.x,this.y,scale,scale);
    }
    this.update=function() {
        this.x+=this.xspeed;
        this.y+=this.yspeed;
    }
}

// const { text } = require("express");

