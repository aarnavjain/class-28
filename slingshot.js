class Slingshot{
    constructor(bodyA,pointB){
        var option={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.06,
            length:10
        }
        this.sling=Constraint.create(option);
        World.add(world,this.sling);
    }
    fly(){
        //bodyA gets changed to nothing/empty - null
        this.sling.bodyA=null;

    }
    display(){
        //Only if bodyA exists
        if(this.sling.bodyA){
            var pointA=this.sling.bodyA.position;
            var pointB=this.sling.pointB;
            strokeWeight(3);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }    
}
