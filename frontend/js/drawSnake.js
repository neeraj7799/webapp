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