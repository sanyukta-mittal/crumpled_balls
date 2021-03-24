class Dustbin{
    constructor(x,y,width,height){
        var options={

            isStatic: true
            
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        console.log(this.body)
        this.w=width
        this.h=height

    }

    display(){
        push();
        translate(this.body.position.x,this.body.position.y)
        rectMode(CENTER);
        fill("white");
        rect(0,0,this.w,this.h);
        pop();
        }
    
    
}