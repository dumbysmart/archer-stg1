class archerC{
    constructor(x,y,w,h,angle){
        var options = {
            isStatic:true
        }
    this.body= Bodies.rectangle(x,y,w,h,options)
    this.w=w
    this.h=h
    this.x=x
    this.y=y
    this.angle=angle
    this.image=loadImage("assets/playerArcher.png")
    Matter.Body.setAngle(this.body,angle)
    World.add(world,this.body)
    }

show(){
    var pos=this.body.position
    push()
    rectMode(CENTER)
    image(this.image,this.body.position.x,this.body.position.y,this.w,this.h)
    pop()
   

}
}