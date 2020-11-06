class Boy {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;

      this.image = loadImage("Images/boy.png");
      World.add(world, this.body);
    }
    display(){

      //push();
      //transla
      imageMode(CENTER);
      image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
      //pop();
    }
  }