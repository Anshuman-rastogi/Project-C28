class Mango {

    constructor(x, y, r){

        var options = {
            isStatic:true,
            restitution:0,
            friction:1
        }
        
        this.x = x;
        this.y = y;
        this.r = r;

        this.body = Bodies.circle(x, y, r,options);
        World.add(world, this.body);

        this.image = loadImage("Images/mango.png");

    }

    display(){

        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop();
    }
}