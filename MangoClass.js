class Mango {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          restitution:0,
          friction:1
      }
      this.mango = loadImage ("Plucking mangoes/mango.png")
    }
    display(){
      var position = this.body.position
      var angle = this.body.angle
      push() 
      translate(position.x, position.y)
      rotate(angle)
      imageMode(CENTER)
      rectMode()
      image(this.mango,0,0)
      pop() 
    }
  }

