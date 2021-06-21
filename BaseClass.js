class BaseClass{
  constructor(x, y, width, height, angle) {
    var options = {
        restitution:0,
        friction:8,
        density:0.5
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visibility = 255;
   // this.image = loadImage("sprites/base.png");
    World.add(world, this.body);
  }  
      
  display(){
    if (this.body.speed < 3) {
    var angle = this.body.angle;
    fill("white")
    //console.log("angle=" + angle + " pos x=" + this.body.position.x + " pos y=" + this.body.position.y);
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
    }
    //console.log("speed=" + this.body.speed);

    else {
      //console.log("visibility=" + this.visibility);
      World.remove(world,this.body);
      push ();
      this.visibility = this.visibility-5;
      tint(255,this.visibility);
      pop ();
      }
  }

  score(){

    if(this.visibility<0 && this.visibility >-105){
      Score++
    }
  };
  
}


