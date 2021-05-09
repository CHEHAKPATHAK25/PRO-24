class Ground{
    constructor(x,y,width,height){
        var options ={
            isStatic : true
        }
        this.w = width;
        this.h = height;
        this.body = Bodies.rectangle(400,600,200,150,options);
        World.add(myworld, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill("brown");
        rect(pos.x,pos.y,this.w,this.h);
        pop();
    }
}