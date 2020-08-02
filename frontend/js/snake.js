var canvas=document.getElementById("snake");
var ctx=canvas.getContext("2d");
var scale=10;
var rows=canvas.height/scale;
var columns=canvas.width/scale;

var snake;

(function setup() {
    snake=new drawSnake();
    fruit=new Fruit();
    fruit.pickLocation();

    window.setInterval(() => {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        fruit.draw();
        snake.update();
        snake.draw();
        if (snake.eat()){
            fruit.pickLocation();
        }

    }, 250 );
}());
window.addEventListener('keydown',((evt) => {
    var direction=evt.key.replace('Arrow','');
    snake.changeDirection(direction);
}))

function drawSnake(){
    this.x=0;
    this.y=0;
    this.xspeed= scale*1;
    this.yspeed=0;
    this.total=0;
    this.tail=[];
    this.draw=function() {
        ctx.fillStyle = "#FFFFFF";
        for (let i=0; i<this.tail.length-1;i--){
            ctx.fillRect(this.tail[i].x,this.tail[i].y,scale,scale);
            this.tail[i]=this.tail[i+1];
            this.tail[this.total-1]={x:this.x,y:this.y};
        }
        
    }
    this.update=function() {
        for (let i=0; i<this.tail.length-1;i--){
            this.tail[i]=this.tail[i+1];
            this.tail[this.total-1]={x:this.x,y:this.y};
        }
        this.x+=this.xspeed;
        this.y+=this.yspeed;
        if (this.x>canvas.width){
            this.x=0
        }
        if (this.x>canvas.height){
            this.y=0
        }
        if (this.x>canvas.width){
            this.x=0
        }
        if (this.x>canvas.height){
            this.y=0
        }
    }
    this.changeDirection= function(){
        switch(direction) {
            case 'Up':
                this.xspeed=0;
                this.yspeed=-scale*1;
                break;
            case 'Down':
                this.xspeed=0;
                this.yspeed=scale*1;
                break;
            case 'Left':
                this.xspeed=-scale*1;
                this.yspeed=0;
                break;
            case 'Right':
                this.xspeed=scale*1;
                this.yspeed=0;
                break;
        }
    }
    this.eat=function(fruit){
        console.log(fruit);
        if (this.x===fruit.x && this.y===fruit.y) {
            this.total++;
            return True;

        }
        return False;
    }
}

function Fruit() {
    this.x;
    this.y;

    this.pickLocation= function() {
        this.x=(Math.floor(Math.random()*rows-1)+1)* scale
        this.y=(Math.floor(Math.random()*columns-1)+1)* scale
    }
    this.draw=function() {
        ctx.fillStyle = "#4ca4ab";
        ctx.fillRect(this.x,this.y,scale,scale);
    }
}

// const { text } = require("express");

