class Bird {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(myworld, this.body);
    }
    display(){
      this.body.position.x=mouseX
      this.body.position.y=mouseY
      push();
      translate(this.body.position.x,this.body.position.y)
      rotate(this.body.angle)
      //translate shifts the origin on where the object is not the top left corner while rotate rotates the squares when in contact
      rectMode(CENTER);
      stroke("green")
      strokeWeight(5)
      fill("purple");
      rect(0, 0, this.width, this.height);
      pop();
      //to stop codes from interacting with other objects for example fill and colour we use push and pop 
    }
  };
  