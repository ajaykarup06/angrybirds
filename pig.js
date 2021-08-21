class Pig {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(myworld, this.body);
    }
    display(){
      push();
      translate(this.body.position.x,this.body.position.y)
      rotate(this.body.angle)
      //translate shifts the origin on where the object is not the top left corner while rotate rotates the squares when in contact
      rectMode(CENTER);
      stroke("red")
      strokeWeight(5)
      fill("lightpink");
      rect(0, 0, this.width, this.height);
      pop();
      //to stop codes from interacting with other objects for example fill and colour we use push and pop 
    }
  };
  