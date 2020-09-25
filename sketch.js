let slider;
let angle=0;
let tree=[];
function setup() {
    createCanvas(1300,700);
    slider = createSlider(0, PI/2, PI/10, 0.01)
    angle = PI/10;
    Callme(8);
}

function drawnew(angle){
    tree = [];
    let a = createVector(width/2, height);
    let b = createVector(width/2, height-100);
    for(let i=0;i<Math.floor(l)-1;i++){
        tree[i].show();
        if(i==Math.floor(l)-2){
            let b1 = new Bubble(tree[i].end.x, tree[i].end.y);
            b1.show();
        }
    }
}

function Callme(recursions){
    tree = [];
    let a = createVector(width/2, height);
    let b = createVector(width/2, height-100);
    var root = new Branch(a,b,0);
    tree[0] = root;
    fractal(tree[0], 0, recursions);
}
let chk = true;
function fractal(curr, level_start, level_end){
    if(level_start == level_end) return;
    else{
        let r = curr.createRight(angle);
        let l = curr.createLeft(angle);
        // setCol(r);
        // setCol(l);
        if(chk){
            tree.push(l);
            fractal(l, curr.level, level_end);
            chk=false;
        }else{
            chk = true;
        }
        tree.push(r);
        fractal(r, curr.level, level_end);
    }
}

function setCol(branch){    //redundant function
    branch.col.r = (branch.col.r+15)%256;
    branch.col.g = (branch.col.g)%256;
    branch.col.b = (branch.col.b)%256;
    branch.col.a = (branch.col.a-200);
}

let l = 0;
function draw() {
    background(255);
    angle = slider.value();
    // //Callme here for lower recursion values and use the slider
    // for(let i=0;i<tree.length;i++){
    //     tree[i].show();
    // }


    for(let i=0;i<Math.floor(l)-1;i++){
        tree[i].show();
        if(i==Math.floor(l)-2){
            let b1 = new Bubble(tree[i].end.x, tree[i].end.y);
            b1.show();
        }
    }

    


    if(l<=tree.length){
        l+=50;
    }
}

function mousePressed(){
    
}
