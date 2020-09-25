let factor = 0.85;
class Branch{
    constructor(begin, end, level=0){
        this.begin = begin;
        this.end = end;
        this.level = level;
        this.col = {
            r: 150,
            g: 52,
            b: 235,
            a: 500,
        }
        this.colleaf = {
            r: 150,
            g: 52,
            b: 235,
            a: 500,
        }
        // this.col = {
        //     r: 51,
        //     g: 31,
        //     b: 0,
        //     a: 200,
        // }

        // this.colleaf = {
        //     r: 42,
        //     g: 110,
        //     b: 3,
        //     a: 300,
        // }
    }

    show(){
        if(this.level >= 8){
            stroke(this.colleaf.r, this.colleaf.g, this.colleaf.b, this.colleaf.a);
            if(this.level==8+1){
                circle(this.end.x, this.end.y, 5);
            }
        }else{
            stroke(this.col.r, this.col.g, this.col.b, this.col.a);
        }
        // strokeWeight(2.6-this.level*0.25);
        line(this.begin.x, this.begin.y, this.end.x, this.end.y);
    }
    
    createRight(angle){
        let dir = p5.Vector.sub(this.end, this.begin);
        dir.rotate(angle);
        dir.mult(factor);
        let newEnd = p5.Vector.add(this.end, dir);
        let right = new Branch(this.end, newEnd, this.level+1);
        return right;
    }
    createLeft(angle){
        let dir = p5.Vector.sub(this.end, this.begin);
        dir.rotate((-1)*angle);
        dir.mult(factor);
        let newEnd = p5.Vector.add(this.end, dir);
        let left = new Branch(this.end, newEnd, this.level+1);
        return left;
    }
  
}
  
class Bubble{
    constructor(st,en){
        this.st = st;
        this.en = en;
        this.col = {
            r: 51,
            g: 31,
            b: 0,
            a: 200,
        };
    }

    show(){
        stroke(this.col.r, this.col.g, this.col.b, this.col.a);
        circle(this.st, this.en, 5);
    }
}