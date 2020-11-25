class SS{
    constructor(a,b){
        var options={
            bodyA : a,
            pointB : b,
            length : 5,
            stiffness : 0.05
        }

        this.body = Constraint.create(options);
        this.pointB = b;

        World.add(world, this.body);

    }

    fly(){
        this.body.bodyA = null
    }





    display(){
        if(this.body.bodyA){
        var posA = this.body.bodyA.position;
        var posB = this.pointB;
        strokeWeight(5);
        line(posA.x, posA.y, posB.x, posB.y);
        }


    }








}