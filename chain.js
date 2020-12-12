class Chain {
    constructor(bodyA, bodyB) {

        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            length: 10,
            stiffness: 0.05
        }

        this.chain = Matter.Constraint.create(options);
        World.add(world, this.chain)
    }
    display() {
        push()
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(3)
        line(pointA.x-30, pointA.y, pointB.x, pointB.y)
        pop()
    }
}