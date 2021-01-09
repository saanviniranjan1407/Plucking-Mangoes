class Stone{
    constructor(x,y){
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1,
            density: 1.2
        }

        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        this.x = x;
        this.y = y;
        this.image = loadImage("images/stone.png");

        World.add(world,this.body);
    }

    display(){
        //vb = this.body.position;
        //angle = this.body.angle;

        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}