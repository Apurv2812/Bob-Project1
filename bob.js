class Bob {

    constructor(x,y,r){
   
  
   var options={
      
    "restitution":0.3,
    "friction":1,
    "density":1.2
   }
   this.body = Bodies.circle(this.x,this.y,r,options)
   this.x=x;
   this.y=y;
   this.r=r;
   World.add(world, this.body);
    }
    
   display(){
     
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    ellipse(this.x,this.y,this.r,this.r);
    pop();
   }

    
}


















