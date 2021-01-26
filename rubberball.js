class rubberball {
    constructor(x,y,r){
        var option = {
            restitution: 0.1,
            density: 0.5,
            friction: 0.3,
        }
        this.body = Bodies.circle(x,y,r,option)
        World.add(world,this.body)
        this.radius = r;
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle)
        ellipseMode(CENTER);
        fill('Yellow');
        ellipse(0,0,this.radius,this.radius)
        pop();

    }
}