let w = 400;
let h = 600;
let mic;
var r, g, b;


function setup() {
    createCanvas(400, 400);
    background(0);
    noStroke();

    mic = new p5.AudioIn();
    mic.start();

}

function draw() {
    r = random(0, 255);
    g = random(70, 255);
    b = random(100, 200);

    micLevel = mic.getLevel();
    mov = map(micLevel, 0, 1, 10, 5000);
    mov2 = map(micLevel, 0, 1, 10, 450);


    let boca_w = width / 1.75;
    noStroke();

    //trasllat al centre
    push();
    translate(width / 2, height / 2);
    rectMode(CENTER);

    //fons de la boca
    fill(r, g, b);
    rect(0, 100, boca_w, boca_w);

    //llengua
    fill(255);
    rect(0, 150, boca_w, 100, 10);

    //dents
    fill(255);
    rect(0, 20, boca_w, 50, 10);


    //barbeta
    fill('blue')
    rect(0, 180, boca_w, 100, mov);
    pop();

    //front
    fill('blue');
    rect(0, 0, width, height / 1.8);


    //ull esquerre
    fill(r,g,b);
    ellipse(width * 0.25, height / 2.5, 40+mov2);
    fill(mov);
    ellipse(width * 0.25, height / 2.5, 10);

    //ull dret
    fill(r,g,b);
    ellipse(width * 0.75, height / 2.5, 40+mov2);
    fill(mov);
    ellipse(width * 0.75, height / 2.5, 10);

    //narisooteeee
    noFill();
    stroke(mov);
    strokeWeight(10);
    arc(width * 0.5, height / 1.85, 60, 60, radians(230), radians(310));

}

//per activar la grabació d'audio
function touchStarted() {
    getAudioContext().resume();
}
