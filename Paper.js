
class Paper  {
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            fiction:0.5,
            density:1.2
    }  
    this.body=Bodies.circle(x,y,r,options)
    this.w=width
    this.h=height
    this.r=r
 }

    
    display() {
        //var pos=this.body.position
      var pos=this.body.position
      
      
        push()
        translate(pos.x,pos.y)
        fill(255,0,255)
        ellipseMode(RADIUS)
        ellipse(0,0,this.r,this.r)
        pop();

    }
   
}