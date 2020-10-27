class Rubber {
    constructor(bodyA,bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.3  ,
            length: 1
        }

        this.rubber = Constraint.create(options);
        World.add(world,this.rubber);
    }

    display(){
        var pointA = this.rubber.bodyA.position;
        var pointB = this.rubber.bodyB.position;
        
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}