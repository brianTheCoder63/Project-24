class iron {
    constructor(x,y,width,height){
        var option = {
            restitution: 0.1,
            density: 10,
            friction: 0.3,
        }
        this.body = Bodies.rectangle(x,y,width,height,option)
        World.add(world,this.body)
        this.width = width;
        this.height = height;
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        // pos.x = mouseX
        // pos.y = mouseY
        push();
        translate(pos.x,pos.y);
        rotate(angle)
        rect(CENTER);
        fill('Black');
        rect(0,0,this.width,this.height)
        pop();

    }
}