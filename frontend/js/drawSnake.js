const { text } = require("express");

function drawSnake(){
    this.x=0;
    this.y=0;
    this.draw=function() {
        ctx.fillStyle = "#FFFFFF"
        ctx.fillRect(this.x,this.y,scale,scale);
    }
}