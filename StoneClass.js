class Stone {
    constructor(x,y,r) {
      var options = {
          isStatic: false,
          restitution:0,
          friction:1,
          density:1.2
      }
      this.x = x
      this.y = y
      this.r = r
      this.body=Bodies.circle(this.x,this.y,this.r/2,options)
      this.stone = loadImage("Plucking mangoes/stone.png") 
      World.add(world.this.body)
    }
   
    fly(){
      this.sling.bodyA = null;
  }

  display(){
    var position = this.body.position
    var angle = this.body.angle
    push() 
    translate(position.x,position.y)
    rotate(angle)
    imageMode(CENTER)
    ellipseMode(RADIUS)
    image(this.stone,0,0,this.r*2)
    pop() 
  }
}
