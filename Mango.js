class Mango{
    constructor(x,y,r){
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1
        }

        //this.body = Bodies.circle(x,y,width,height,options);
        //this.width = width;
        //this.height = height;
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        this.scale = 0.1;
        this.image = loadImage("images/mango.png");
        World.add(world,this.body);
    }

    display(){
        imageMode(CENTER);
        //image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        image(this.image,this.body.position.x,this.body.position.y,this.r);
    }
}