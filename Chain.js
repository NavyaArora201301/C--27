class Chain{
    constructor(bodyT, bodyN){
        var options={
            bodyA:bodyT,
            bodyB:bodyN,
            length:9,
            stiffness:0.09
        }
         this.bodyA=bodyT;
         this.bodyB=bodyN;
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    }

    display(){
      stroke("black");
      line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
    }
}