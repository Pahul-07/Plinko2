class Particle {
    constructor(x, y,r) {

        var options ={
            restitution:0.4
        }
        this.r=r;
      
        this.body = Bodies.circle(x, y, this.r,options);       
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);
this.remove= true
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
        
       if(this.remove===true){ 
        if(this.body.position.x>10 && pos.x<80 && pos.y>510){
            score=score+300
            this.remove=false
        }
        if(this.body.position.x>94 && pos.x<164 && pos.y>510){
            score=score+250
            this.remove=false
        }
        if(this.body.position.x>170 && pos.x<240 && pos.y>510){
            score=score+200
            this.remove=false
        }
        if(this.body.position.x>250 && pos.x<325 && pos.y>510){
            score=score+150
            this.remove=false
        }
        if(this.body.position.x>330 && pos.x<403 && pos.y>510){
            score=score+100
            this.remove=false
        }
        if(this.body.position.x>413 && pos.x<485 && pos.y>510){
            score=score+100
            this.remove=false
        }
        if(this.body.position.x>492 && pos.x<560 && pos.y>510){
            score=score+150
            this.remove=false
        }
        if(this.body.position.x>573 && pos.x<643 && pos.y>510){
            score=score+200
            this.remove=false
        }
        if(this.body.position.x>650 && pos.x<623 && pos.y>510){
            score=score+250
            this.remove=false
        }
        if(this.body.position.x>730 && pos.x<803 && pos.y>510){
            score=score+300
            this.remove=false
        }
    }
}

};