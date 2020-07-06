class Ground{
    constructor(x,y,w,h) {
      var options = {
        'stiffness':0.4,
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width; 
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
    rect(pos.x, pos.y, this.w,this.h);
    }
  };