class Drop{
  
constructor(x, y, radius, angle) {
  var maxDrops;
  this.rain;
    var options = {
      
        'restitution':0.8,
        'friction':0.1,
        'density':1.0
    }
    this.body = Bodies.circle(x, y, 5, options);
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    push();
    for(var i = 0; i < maxDrops; i++){
      drops.push(new createDrop(random(0, 400), random(0, 400)));    
      }

    
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.radius);
    pop();
  }
  update(){
   if(this.rain.position.y > height){
     Matter.Body.setPosition(this.rain, {x : random(0, 400), y : random(0, 400)})
   }
  }
}