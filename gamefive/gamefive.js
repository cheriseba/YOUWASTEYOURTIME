let mode;
let w=1000;
let h=1000;



function setup() {
mode = 0;
createCanvas(1000,1000);
}

function draw() {
clear();

if(mode==0) {


fill(128);
textSize(60);
text("INTRODUCTION",300,50);

textSize(25);
text("hi.. my name don't need to mind your business.",300,100);
text("i think you dont have friends or any hobbies,",300,130);
text("otherwise I really don't know what you're doing",300,160);
text("here. If I had a choice, I would tell you to f******",300,190);
text("go away. But I don't have a choice...",300,220);
text("You wan't to know what you should do here? ",300,250);
text("HAHAH I'm not Your mum. Go and find",300,280);
text("out by yourself, Looser.",300,310);

textSize(35);
text("--- Press ENTER to start ---",300,500);
}


///alles an Code kommt in diese Funktion

if(mode==1) {
    textSize(35);
    text("hier erste Frage formulieren",300,220);

    textSize(25);
    text("<- YES",300,400);

    text("",700,400);
    text("NO ->",700,400);



}

if(mode==2) {

    circle(30,20,100);
 
    
    }
}

function keyPressed() {

if(keyCode===ENTER) {mode=1;}

}

function mousePressed() {

if (mouseX<


}