class Paper {
    constructor (x,y,) {
        var options = {
            isStatic:false,
            restitution = 0.3,
            friction = 0,
            density = 1.2,
        }
        this.body=Matter.Bodies.circle(x,y,20,options);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        fill("red")
        eclipseMode(CENTER)
        eclipse(x,y,r);
        pop();
    }
}