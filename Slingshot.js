class Slingshot{

    constructor(body, point)
    {
        var options = {

            bodyA: body,
            pointB: point,
            length: 20, 
            stiffness: 0.3
        }
        //we are assing the argument passed in the constructor to this.pointB
        // so that it can be accessed in the display or accessible in the display function. Not a compulsory to use this.pointB
       // this.pointB = point;
        this.sling = Constraint.create(options);
        World.add(myWorld, this.sling);
        console.log(this.sling);

     }

    fly()
     {
         this.sling.bodyA = null;
     }

    display()
    {
        if(this.sling.bodyA)
        {
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
    
            line(pointA.x, pointA.y,pointB.x, pointB.y)
        }
    
    }

}