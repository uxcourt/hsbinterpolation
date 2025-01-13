//THIS SCRIPT SHOULD BE PASTED INTO https://editor.p5js.org/ TO GENERATE A FULL COLOR PALETTE

function setup() {
  createCanvas(4000, 4000);
  colorMode(HSB);
  background(18, 0, 0)
  textSize(20);
}
//ANCHORS FOR MinSat, MaxSat, MaxBright, MinBright, and the number of steps between baseline and anchor.
  const MinSat=4;
  const MaxSat=60;
  const MaxBright=99;
  const MinBright=12;
  const sTeps=8;


function draw() {


//BRAND BASELINES 
let DARK_BLUE_450=color('#00689e');
let TEAL_450=color('#00b0ad');
let DARK_ORANGE_450=color('#f0642f');
let LIGHT_BLUE_450=color('#009edb');
let GREEN_450=color('#5dba61');
let PURPLE_450=color('#b368a9');
let LIGHT_ORANGE_450=color('#f7a41a');
let MAGENTA_450=color('#EB0b6c');

//DARK_BLUE
let DARK_BLUE_050=color(lighTen(DARK_BLUE_450,8)[0],lighTen(DARK_BLUE_450,8)[1],lighTen(DARK_BLUE_450,8)[2]);
let DARK_BLUE_100=color(lighTen(DARK_BLUE_450,7)[0],lighTen(DARK_BLUE_450,7)[1],lighTen(DARK_BLUE_450,7)[2]);
let DARK_BLUE_150=color(lighTen(DARK_BLUE_450,6)[0],lighTen(DARK_BLUE_450,6)[1],lighTen(DARK_BLUE_450,6)[2]);
let DARK_BLUE_200=color(lighTen(DARK_BLUE_450,5)[0],lighTen(DARK_BLUE_450,5)[1],lighTen(DARK_BLUE_450,5)[2]);
let DARK_BLUE_250=color(lighTen(DARK_BLUE_450,4)[0],lighTen(DARK_BLUE_450,4)[1],lighTen(DARK_BLUE_450,4)[2]);
let DARK_BLUE_300=color(lighTen(DARK_BLUE_450,3)[0],lighTen(DARK_BLUE_450,3)[1],lighTen(DARK_BLUE_450,3)[2]);
let DARK_BLUE_350=color(lighTen(DARK_BLUE_450,2)[0],lighTen(DARK_BLUE_450,2)[1],lighTen(DARK_BLUE_450,2)[2]);
let DARK_BLUE_400=color(lighTen(DARK_BLUE_450,1)[0],lighTen(DARK_BLUE_450,1)[1],lighTen(DARK_BLUE_450,1)[2]);

let DARK_BLUE_500=color(darKen(DARK_BLUE_450,1)[0],darKen(DARK_BLUE_450,1)[1],darKen(DARK_BLUE_450,1)[2]);
let DARK_BLUE_550=color(darKen(DARK_BLUE_450,2)[0],darKen(DARK_BLUE_450,2)[1],darKen(DARK_BLUE_450,2)[2]);
let DARK_BLUE_600=color(darKen(DARK_BLUE_450,3)[0],darKen(DARK_BLUE_450,3)[1],darKen(DARK_BLUE_450,3)[2]);
let DARK_BLUE_650=color(darKen(DARK_BLUE_450,4)[0],darKen(DARK_BLUE_450,4)[1],darKen(DARK_BLUE_450,4)[2]);
let DARK_BLUE_700=color(darKen(DARK_BLUE_450,5)[0],darKen(DARK_BLUE_450,5)[1],darKen(DARK_BLUE_450,5)[2]);
let DARK_BLUE_750=color(darKen(DARK_BLUE_450,6)[0],darKen(DARK_BLUE_450,6)[1],darKen(DARK_BLUE_450,6)[2]);
let DARK_BLUE_800=color(darKen(DARK_BLUE_450,7)[0],darKen(DARK_BLUE_450,7)[1],darKen(DARK_BLUE_450,7)[2]);
let DARK_BLUE_850=color(darKen(DARK_BLUE_450,8)[0],darKen(DARK_BLUE_450,8)[1],darKen(DARK_BLUE_450,8)[2]);


//TEAL
let TEAL_050=color(lighTen(TEAL_450,8)[0],lighTen(TEAL_450,8)[1],lighTen(TEAL_450,8)[2]);
let TEAL_100=color(lighTen(TEAL_450,7)[0],lighTen(TEAL_450,7)[1],lighTen(TEAL_450,7)[2]);
let TEAL_150=color(lighTen(TEAL_450,6)[0],lighTen(TEAL_450,6)[1],lighTen(TEAL_450,6)[2]);
let TEAL_200=color(lighTen(TEAL_450,5)[0],lighTen(TEAL_450,5)[1],lighTen(TEAL_450,5)[2]);
let TEAL_250=color(lighTen(TEAL_450,4)[0],lighTen(TEAL_450,4)[1],lighTen(TEAL_450,4)[2]);
let TEAL_300=color(lighTen(TEAL_450,3)[0],lighTen(TEAL_450,3)[1],lighTen(TEAL_450,3)[2]);
let TEAL_350=color(lighTen(TEAL_450,2)[0],lighTen(TEAL_450,2)[1],lighTen(TEAL_450,2)[2]);
let TEAL_400=color(lighTen(TEAL_450,1)[0],lighTen(TEAL_450,1)[1],lighTen(TEAL_450,1)[2]);

let TEAL_500=color(darKen(TEAL_450,1)[0],darKen(TEAL_450,1)[1],darKen(TEAL_450,1)[2]);
let TEAL_550=color(darKen(TEAL_450,2)[0],darKen(TEAL_450,2)[1],darKen(TEAL_450,2)[2]);
let TEAL_600=color(darKen(TEAL_450,3)[0],darKen(TEAL_450,3)[1],darKen(TEAL_450,3)[2]);
let TEAL_650=color(darKen(TEAL_450,4)[0],darKen(TEAL_450,4)[1],darKen(TEAL_450,4)[2]);
let TEAL_700=color(darKen(TEAL_450,5)[0],darKen(TEAL_450,5)[1],darKen(TEAL_450,5)[2]);
let TEAL_750=color(darKen(TEAL_450,6)[0],darKen(TEAL_450,6)[1],darKen(TEAL_450,6)[2]);
let TEAL_800=color(darKen(TEAL_450,7)[0],darKen(TEAL_450,7)[1],darKen(TEAL_450,7)[2]);
let TEAL_850=color(darKen(TEAL_450,8)[0],darKen(TEAL_450,8)[1],darKen(TEAL_450,8)[2]);

//DARK_ORANGE
let DARK_ORANGE_050=color(lighTen(DARK_ORANGE_450,8)[0],lighTen(DARK_ORANGE_450,8)[1],lighTen(DARK_ORANGE_450,8)[2]);
let DARK_ORANGE_100=color(lighTen(DARK_ORANGE_450,7)[0],lighTen(DARK_ORANGE_450,7)[1],lighTen(DARK_ORANGE_450,7)[2]);
let DARK_ORANGE_150=color(lighTen(DARK_ORANGE_450,6)[0],lighTen(DARK_ORANGE_450,6)[1],lighTen(DARK_ORANGE_450,6)[2]);
let DARK_ORANGE_200=color(lighTen(DARK_ORANGE_450,5)[0],lighTen(DARK_ORANGE_450,5)[1],lighTen(DARK_ORANGE_450,5)[2]);
let DARK_ORANGE_250=color(lighTen(DARK_ORANGE_450,4)[0],lighTen(DARK_ORANGE_450,4)[1],lighTen(DARK_ORANGE_450,4)[2]);
let DARK_ORANGE_300=color(lighTen(DARK_ORANGE_450,3)[0],lighTen(DARK_ORANGE_450,3)[1],lighTen(DARK_ORANGE_450,3)[2]);
let DARK_ORANGE_350=color(lighTen(DARK_ORANGE_450,2)[0],lighTen(DARK_ORANGE_450,2)[1],lighTen(DARK_ORANGE_450,2)[2]);
let DARK_ORANGE_400=color(lighTen(DARK_ORANGE_450,1)[0],lighTen(DARK_ORANGE_450,1)[1],lighTen(DARK_ORANGE_450,1)[2]);

let DARK_ORANGE_500=color(darKen(DARK_ORANGE_450,1)[0],darKen(DARK_ORANGE_450,1)[1],darKen(DARK_ORANGE_450,1)[2]);
let DARK_ORANGE_550=color(darKen(DARK_ORANGE_450,2)[0],darKen(DARK_ORANGE_450,2)[1],darKen(DARK_ORANGE_450,2)[2]);
let DARK_ORANGE_600=color(darKen(DARK_ORANGE_450,3)[0],darKen(DARK_ORANGE_450,3)[1],darKen(DARK_ORANGE_450,3)[2]);
let DARK_ORANGE_650=color(darKen(DARK_ORANGE_450,4)[0],darKen(DARK_ORANGE_450,4)[1],darKen(DARK_ORANGE_450,4)[2]);
let DARK_ORANGE_700=color(darKen(DARK_ORANGE_450,5)[0],darKen(DARK_ORANGE_450,5)[1],darKen(DARK_ORANGE_450,5)[2]);
let DARK_ORANGE_750=color(darKen(DARK_ORANGE_450,6)[0],darKen(DARK_ORANGE_450,6)[1],darKen(DARK_ORANGE_450,6)[2]);
let DARK_ORANGE_800=color(darKen(DARK_ORANGE_450,7)[0],darKen(DARK_ORANGE_450,7)[1],darKen(DARK_ORANGE_450,7)[2]);
let DARK_ORANGE_850=color(darKen(DARK_ORANGE_450,8)[0],darKen(DARK_ORANGE_450,8)[1],darKen(DARK_ORANGE_450,8)[2]);

//LIGHT_BLUE
let LIGHT_BLUE_050=color(lighTen(LIGHT_BLUE_450,8)[0],lighTen(LIGHT_BLUE_450,8)[1],lighTen(LIGHT_BLUE_450,8)[2]);
let LIGHT_BLUE_100=color(lighTen(LIGHT_BLUE_450,7)[0],lighTen(LIGHT_BLUE_450,7)[1],lighTen(LIGHT_BLUE_450,7)[2]);
let LIGHT_BLUE_150=color(lighTen(LIGHT_BLUE_450,6)[0],lighTen(LIGHT_BLUE_450,6)[1],lighTen(LIGHT_BLUE_450,6)[2]);
let LIGHT_BLUE_200=color(lighTen(LIGHT_BLUE_450,5)[0],lighTen(LIGHT_BLUE_450,5)[1],lighTen(LIGHT_BLUE_450,5)[2]);
let LIGHT_BLUE_250=color(lighTen(LIGHT_BLUE_450,4)[0],lighTen(LIGHT_BLUE_450,4)[1],lighTen(LIGHT_BLUE_450,4)[2]);
let LIGHT_BLUE_300=color(lighTen(LIGHT_BLUE_450,3)[0],lighTen(LIGHT_BLUE_450,3)[1],lighTen(LIGHT_BLUE_450,3)[2]);
let LIGHT_BLUE_350=color(lighTen(LIGHT_BLUE_450,2)[0],lighTen(LIGHT_BLUE_450,2)[1],lighTen(LIGHT_BLUE_450,2)[2]);
let LIGHT_BLUE_400=color(lighTen(LIGHT_BLUE_450,1)[0],lighTen(LIGHT_BLUE_450,1)[1],lighTen(LIGHT_BLUE_450,1)[2]);

let LIGHT_BLUE_500=color(darKen(LIGHT_BLUE_450,1)[0],darKen(LIGHT_BLUE_450,1)[1],darKen(LIGHT_BLUE_450,1)[2]);
let LIGHT_BLUE_550=color(darKen(LIGHT_BLUE_450,2)[0],darKen(LIGHT_BLUE_450,2)[1],darKen(LIGHT_BLUE_450,2)[2]);
let LIGHT_BLUE_600=color(darKen(LIGHT_BLUE_450,3)[0],darKen(LIGHT_BLUE_450,3)[1],darKen(LIGHT_BLUE_450,3)[2]);
let LIGHT_BLUE_650=color(darKen(LIGHT_BLUE_450,4)[0],darKen(LIGHT_BLUE_450,4)[1],darKen(LIGHT_BLUE_450,4)[2]);
let LIGHT_BLUE_700=color(darKen(LIGHT_BLUE_450,5)[0],darKen(LIGHT_BLUE_450,5)[1],darKen(LIGHT_BLUE_450,5)[2]);
let LIGHT_BLUE_750=color(darKen(LIGHT_BLUE_450,6)[0],darKen(LIGHT_BLUE_450,6)[1],darKen(LIGHT_BLUE_450,6)[2]);
let LIGHT_BLUE_800=color(darKen(LIGHT_BLUE_450,7)[0],darKen(LIGHT_BLUE_450,7)[1],darKen(LIGHT_BLUE_450,7)[2]);
let LIGHT_BLUE_850=color(darKen(LIGHT_BLUE_450,8)[0],darKen(LIGHT_BLUE_450,8)[1],darKen(LIGHT_BLUE_450,8)[2]);


//GREEN
let GREEN_050=color(lighTen(GREEN_450,8)[0],lighTen(GREEN_450,8)[1],lighTen(GREEN_450,8)[2]);
let GREEN_100=color(lighTen(GREEN_450,7)[0],lighTen(GREEN_450,7)[1],lighTen(GREEN_450,7)[2]);
let GREEN_150=color(lighTen(GREEN_450,6)[0],lighTen(GREEN_450,6)[1],lighTen(GREEN_450,6)[2]);
let GREEN_200=color(lighTen(GREEN_450,5)[0],lighTen(GREEN_450,5)[1],lighTen(GREEN_450,5)[2]);
let GREEN_250=color(lighTen(GREEN_450,4)[0],lighTen(GREEN_450,4)[1],lighTen(GREEN_450,4)[2]);
let GREEN_300=color(lighTen(GREEN_450,3)[0],lighTen(GREEN_450,3)[1],lighTen(GREEN_450,3)[2]);
let GREEN_350=color(lighTen(GREEN_450,2)[0],lighTen(GREEN_450,2)[1],lighTen(GREEN_450,2)[2]);
let GREEN_400=color(lighTen(GREEN_450,1)[0],lighTen(GREEN_450,1)[1],lighTen(GREEN_450,1)[2]);

let GREEN_500=color(darKen(GREEN_450,1)[0],darKen(GREEN_450,1)[1],darKen(GREEN_450,1)[2]);
let GREEN_550=color(darKen(GREEN_450,2)[0],darKen(GREEN_450,2)[1],darKen(GREEN_450,2)[2]);
let GREEN_600=color(darKen(GREEN_450,3)[0],darKen(GREEN_450,3)[1],darKen(GREEN_450,3)[2]);
let GREEN_650=color(darKen(GREEN_450,4)[0],darKen(GREEN_450,4)[1],darKen(GREEN_450,4)[2]);
let GREEN_700=color(darKen(GREEN_450,5)[0],darKen(GREEN_450,5)[1],darKen(GREEN_450,5)[2]);
let GREEN_750=color(darKen(GREEN_450,6)[0],darKen(GREEN_450,6)[1],darKen(GREEN_450,6)[2]);
let GREEN_800=color(darKen(GREEN_450,7)[0],darKen(GREEN_450,7)[1],darKen(GREEN_450,7)[2]);
let GREEN_850=color(darKen(GREEN_450,8)[0],darKen(GREEN_450,8)[1],darKen(GREEN_450,8)[2]);


//PURPLE
let PURPLE_050=color(lighTen(PURPLE_450,8)[0],lighTen(PURPLE_450,8)[1],lighTen(PURPLE_450,8)[2]);
let PURPLE_100=color(lighTen(PURPLE_450,7)[0],lighTen(PURPLE_450,7)[1],lighTen(PURPLE_450,7)[2]);
let PURPLE_150=color(lighTen(PURPLE_450,6)[0],lighTen(PURPLE_450,6)[1],lighTen(PURPLE_450,6)[2]);
let PURPLE_200=color(lighTen(PURPLE_450,5)[0],lighTen(PURPLE_450,5)[1],lighTen(PURPLE_450,5)[2]);
let PURPLE_250=color(lighTen(PURPLE_450,4)[0],lighTen(PURPLE_450,4)[1],lighTen(PURPLE_450,4)[2]);
let PURPLE_300=color(lighTen(PURPLE_450,3)[0],lighTen(PURPLE_450,3)[1],lighTen(PURPLE_450,3)[2]);
let PURPLE_350=color(lighTen(PURPLE_450,2)[0],lighTen(PURPLE_450,2)[1],lighTen(PURPLE_450,2)[2]);
let PURPLE_400=color(lighTen(PURPLE_450,1)[0],lighTen(PURPLE_450,1)[1],lighTen(PURPLE_450,1)[2]);

let PURPLE_500=color(darKen(PURPLE_450,1)[0],darKen(PURPLE_450,1)[1],darKen(PURPLE_450,1)[2]);
let PURPLE_550=color(darKen(PURPLE_450,2)[0],darKen(PURPLE_450,2)[1],darKen(PURPLE_450,2)[2]);
let PURPLE_600=color(darKen(PURPLE_450,3)[0],darKen(PURPLE_450,3)[1],darKen(PURPLE_450,3)[2]);
let PURPLE_650=color(darKen(PURPLE_450,4)[0],darKen(PURPLE_450,4)[1],darKen(PURPLE_450,4)[2]);
let PURPLE_700=color(darKen(PURPLE_450,5)[0],darKen(PURPLE_450,5)[1],darKen(PURPLE_450,5)[2]);
let PURPLE_750=color(darKen(PURPLE_450,6)[0],darKen(PURPLE_450,6)[1],darKen(PURPLE_450,6)[2]);
let PURPLE_800=color(darKen(PURPLE_450,7)[0],darKen(PURPLE_450,7)[1],darKen(PURPLE_450,7)[2]);
let PURPLE_850=color(darKen(PURPLE_450,8)[0],darKen(PURPLE_450,8)[1],darKen(PURPLE_450,8)[2]);

//LIGHT_ORANGE
let LIGHT_ORANGE_050=color(lighTen(LIGHT_ORANGE_450,8)[0],lighTen(LIGHT_ORANGE_450,8)[1],lighTen(LIGHT_ORANGE_450,8)[2]);
let LIGHT_ORANGE_100=color(lighTen(LIGHT_ORANGE_450,7)[0],lighTen(LIGHT_ORANGE_450,7)[1],lighTen(LIGHT_ORANGE_450,7)[2]);
let LIGHT_ORANGE_150=color(lighTen(LIGHT_ORANGE_450,6)[0],lighTen(LIGHT_ORANGE_450,6)[1],lighTen(LIGHT_ORANGE_450,6)[2]);
let LIGHT_ORANGE_200=color(lighTen(LIGHT_ORANGE_450,5)[0],lighTen(LIGHT_ORANGE_450,5)[1],lighTen(LIGHT_ORANGE_450,5)[2]);
let LIGHT_ORANGE_250=color(lighTen(LIGHT_ORANGE_450,4)[0],lighTen(LIGHT_ORANGE_450,4)[1],lighTen(LIGHT_ORANGE_450,4)[2]);
let LIGHT_ORANGE_300=color(lighTen(LIGHT_ORANGE_450,3)[0],lighTen(LIGHT_ORANGE_450,3)[1],lighTen(LIGHT_ORANGE_450,3)[2]);
let LIGHT_ORANGE_350=color(lighTen(LIGHT_ORANGE_450,2)[0],lighTen(LIGHT_ORANGE_450,2)[1],lighTen(LIGHT_ORANGE_450,2)[2]);
let LIGHT_ORANGE_400=color(lighTen(LIGHT_ORANGE_450,1)[0],lighTen(LIGHT_ORANGE_450,1)[1],lighTen(LIGHT_ORANGE_450,1)[2]);

let LIGHT_ORANGE_500=color(darKen(LIGHT_ORANGE_450,1)[0],darKen(LIGHT_ORANGE_450,1)[1],darKen(LIGHT_ORANGE_450,1)[2]);
let LIGHT_ORANGE_550=color(darKen(LIGHT_ORANGE_450,2)[0],darKen(LIGHT_ORANGE_450,2)[1],darKen(LIGHT_ORANGE_450,2)[2]);
let LIGHT_ORANGE_600=color(darKen(LIGHT_ORANGE_450,3)[0],darKen(LIGHT_ORANGE_450,3)[1],darKen(LIGHT_ORANGE_450,3)[2]);
let LIGHT_ORANGE_650=color(darKen(LIGHT_ORANGE_450,4)[0],darKen(LIGHT_ORANGE_450,4)[1],darKen(LIGHT_ORANGE_450,4)[2]);
let LIGHT_ORANGE_700=color(darKen(LIGHT_ORANGE_450,5)[0],darKen(LIGHT_ORANGE_450,5)[1],darKen(LIGHT_ORANGE_450,5)[2]);
let LIGHT_ORANGE_750=color(darKen(LIGHT_ORANGE_450,6)[0],darKen(LIGHT_ORANGE_450,6)[1],darKen(LIGHT_ORANGE_450,6)[2]);
let LIGHT_ORANGE_800=color(darKen(LIGHT_ORANGE_450,7)[0],darKen(LIGHT_ORANGE_450,7)[1],darKen(LIGHT_ORANGE_450,7)[2]);
let LIGHT_ORANGE_850=color(darKen(LIGHT_ORANGE_450,8)[0],darKen(LIGHT_ORANGE_450,8)[1],darKen(LIGHT_ORANGE_450,8)[2]);

//MAGENTA
let MAGENTA_050=color(lighTen(MAGENTA_450,8)[0],lighTen(MAGENTA_450,8)[1],lighTen(MAGENTA_450,8)[2]);
let MAGENTA_100=color(lighTen(MAGENTA_450,7)[0],lighTen(MAGENTA_450,7)[1],lighTen(MAGENTA_450,7)[2]);
let MAGENTA_150=color(lighTen(MAGENTA_450,6)[0],lighTen(MAGENTA_450,6)[1],lighTen(MAGENTA_450,6)[2]);
let MAGENTA_200=color(lighTen(MAGENTA_450,5)[0],lighTen(MAGENTA_450,5)[1],lighTen(MAGENTA_450,5)[2]);
let MAGENTA_250=color(lighTen(MAGENTA_450,4)[0],lighTen(MAGENTA_450,4)[1],lighTen(MAGENTA_450,4)[2]);
let MAGENTA_300=color(lighTen(MAGENTA_450,3)[0],lighTen(MAGENTA_450,3)[1],lighTen(MAGENTA_450,3)[2]);
let MAGENTA_350=color(lighTen(MAGENTA_450,2)[0],lighTen(MAGENTA_450,2)[1],lighTen(MAGENTA_450,2)[2]);
let MAGENTA_400=color(lighTen(MAGENTA_450,1)[0],lighTen(MAGENTA_450,1)[1],lighTen(MAGENTA_450,1)[2]);

let MAGENTA_500=color(darKen(MAGENTA_450,1)[0],darKen(MAGENTA_450,1)[1],darKen(MAGENTA_450,1)[2]);
let MAGENTA_550=color(darKen(MAGENTA_450,2)[0],darKen(MAGENTA_450,2)[1],darKen(MAGENTA_450,2)[2]);
let MAGENTA_600=color(darKen(MAGENTA_450,3)[0],darKen(MAGENTA_450,3)[1],darKen(MAGENTA_450,3)[2]);
let MAGENTA_650=color(darKen(MAGENTA_450,4)[0],darKen(MAGENTA_450,4)[1],darKen(MAGENTA_450,4)[2]);
let MAGENTA_700=color(darKen(MAGENTA_450,5)[0],darKen(MAGENTA_450,5)[1],darKen(MAGENTA_450,5)[2]);
let MAGENTA_750=color(darKen(MAGENTA_450,6)[0],darKen(MAGENTA_450,6)[1],darKen(MAGENTA_450,6)[2]);
let MAGENTA_800=color(darKen(MAGENTA_450,7)[0],darKen(MAGENTA_450,7)[1],darKen(MAGENTA_450,7)[2]);
let MAGENTA_850=color(darKen(MAGENTA_450,8)[0],darKen(MAGENTA_450,8)[1],darKen(MAGENTA_450,8)[2]);


//NEUTRAL
let NEUTRAL_000=color(0,0,100);
let NEUTRAL_050=color(0,0,94.48);
let NEUTRAL_100=color(0,0,88.92);
let NEUTRAL_150=color(0,0,83.36);
let NEUTRAL_200=color(0,0,77.8);
let NEUTRAL_250=color(0,0,72.24);
let NEUTRAL_300=color(0,0,66.68);
let NEUTRAL_350=color(0,0,61.12);
let NEUTRAL_400=color(0,0,55.56);
let NEUTRAL_450=color(0,0,50);
let NEUTRAL_500=color(0,0,44.44);
let NEUTRAL_550=color(0,0,38.88);
let NEUTRAL_600=color(0,0,33.32);
let NEUTRAL_650=color(0,0,27.76);
let NEUTRAL_700=color(0,0,22.2);
let NEUTRAL_750=color(0,0,16.64);
let NEUTRAL_800=color(0,0,11.08);
let NEUTRAL_850=color(0,0,5.52);
let NEUTRAL_900=color(0,0,0);
  
//labels for color rows
  fill("white");
  text("000", 10, 70);
  text("050",10, 180);
  text(100, 10, 290);
  text(150, 10, 400);
  text(200, 10, 510);
  text(250, 10, 620);
  text(300, 10, 730);
  text(350, 10, 840);
  text(400, 10, 950);
  text(450, 10, 1060);
  text(500, 10, 1170);
  text(550, 10, 1280);
  text(600, 10, 1390);
  text(650, 10, 1500);
  text(700, 10, 1610);
  text(750, 10, 1720);
  text(800, 10, 1830);
  text(850, 10, 1940);
  text(900, 10, 2050);
 

   //DARK_BLUE

  fill(DARK_BLUE_050);
  noStroke();
  square(50,160, 100);
  fill("black");
  text(DARK_BLUE_050.toString('#rrggbb'),60,180);
  
  fill(DARK_BLUE_100);
  noStroke();
  square(50,270, 100);
  fill("black");
  text(DARK_BLUE_100.toString('#rrggbb'),60,290);
    
  fill(DARK_BLUE_150);
  noStroke();
  square(50,380, 100);
  fill("black");
  text(DARK_BLUE_150.toString('#rrggbb'),60,400);

  fill(DARK_BLUE_200);
  noStroke();
  square(50,490, 100);
  fill("black");
  text(DARK_BLUE_200.toString('#rrggbb'),60,510); 
  
  fill(DARK_BLUE_250);
  noStroke();
  square(50,600, 100);
  fill("black");
  text(DARK_BLUE_250.toString('#rrggbb'),60,620); 
  
  fill(DARK_BLUE_300);
  noStroke();
  square(50,710, 100);
  fill("black");
  text(DARK_BLUE_300.toString('#rrggbb'),60,730); 
  
  fill(DARK_BLUE_350);
  noStroke();
  square(50,820, 100);
  fill("black");
  text(DARK_BLUE_350.toString('#rrggbb'),60,840);  
  
  fill(DARK_BLUE_400);
  noStroke();
  square(50,930, 100);
  fill("black");
  text(DARK_BLUE_400.toString('#rrggbb'),60,950);   
  
  fill(DARK_BLUE_450);
  noStroke();
  square(50,1040, 100);
  fill("white");
  text(DARK_BLUE_450.toString('#rrggbb'),60,1060);   
  text("base",60, 1080);

  fill(DARK_BLUE_500);
  noStroke();
  square(50,1150, 100);
  fill("white");
  text(DARK_BLUE_500.toString('#rrggbb'),60,1170);

  fill(DARK_BLUE_550);
  noStroke();
  square(50,1260, 100);
  fill("white");
  text(DARK_BLUE_550.toString('#rrggbb'),60,1280);   
  
  fill(DARK_BLUE_600);
  noStroke();
  square(50,1370, 100); 
  fill("white");
  text(DARK_BLUE_600.toString('#rrggbb'),60,1390); 
  
  fill(DARK_BLUE_650);
  noStroke();
  square(50,1480, 100);
  fill("white");
  text(DARK_BLUE_650.toString('#rrggbb'),60,1500); 
  
  fill(DARK_BLUE_700);
  noStroke();
  square(50,1590, 100); 
  fill("white");
  text(DARK_BLUE_700.toString('#rrggbb'),60,1610);   
 
  fill(DARK_BLUE_750);
  noStroke();
  square(50,1700, 100);
  fill("white");
  text(DARK_BLUE_750.toString('#rrggbb'),60,1720); 
  
  fill(DARK_BLUE_800);
  noStroke();
  square(50,1810, 100);  
  fill("white");
  text(DARK_BLUE_800.toString('#rrggbb'),60,1830);   
  
  fill(DARK_BLUE_850);
  noStroke();
  square(50,1920, 100);   
  fill("white");
  text(DARK_BLUE_850.toString('#rrggbb'),60,1940); 
  

  //TEAL

  fill(TEAL_050);
  noStroke();
  square(160,160, 100);
  fill("black");
  text(TEAL_050.toString('#rrggbb'),170,180); 
  
  fill(TEAL_100);
  noStroke();
  square(160,270, 100);
  fill("black");
  text(TEAL_100.toString('#rrggbb'),170,290); 
  
  fill(TEAL_150);
  noStroke();
  square(160,380, 100);
  fill("black");
  text(TEAL_150.toString('#rrggbb'),170,400); 
  
  fill(TEAL_200);
  noStroke();
  square(160,490, 100);
  fill("black");
  text(TEAL_200.toString('#rrggbb'),170,510); 
  
  fill(TEAL_250);
  noStroke();
  square(160,600, 100);
  fill("black");
  text(TEAL_250.toString('#rrggbb'),170,620);   
  
  fill(TEAL_300);
  noStroke();
  square(160,710, 100);
  fill("black");
  text(TEAL_300.toString('#rrggbb'),170,730);   
  
  fill(TEAL_350);
  noStroke();
  square(160,820, 100);
  fill("black");
  text(TEAL_350.toString('#rrggbb'),170,840); 
  
  fill(TEAL_400);
  noStroke();
  square(160,930, 100);
  fill("black");
  text(TEAL_400.toString('#rrggbb'),170,950); 
  
  fill(TEAL_450);
  noStroke();
  square(160,1040, 100);
  fill("black");
  text(TEAL_450.toString('#rrggbb'),170,1060); 
  text("base",170, 1080);

  fill(TEAL_500);
  noStroke();
  square(160,1150, 100);
  fill("black");
  text(TEAL_500.toString('#rrggbb'),170,1170); 
  
  fill(TEAL_550);
  noStroke();
  square(160,1260, 100);
  fill("white");
  text(TEAL_550.toString('#rrggbb'),170,1280);   
  
  fill(TEAL_600);
  noStroke();
  square(160,1370, 100); 
  fill("white");
  text(TEAL_600.toString('#rrggbb'),170,1390); 
  
  fill(TEAL_650);
  noStroke();
  square(160,1480, 100);
  fill("white");
  text(TEAL_650.toString('#rrggbb'),170,1500); 
  
  fill(TEAL_700);
  noStroke();
  square(160,1590, 100); 
  fill("white");
  text(TEAL_700.toString('#rrggbb'),170,1610); 
  
  fill(TEAL_750);
  noStroke();
  square(160,1700, 100);
  fill("white");
  text(TEAL_750.toString('#rrggbb'),170,1720); 
  
  fill(TEAL_800);
  noStroke();
  square(160,1810, 100);  
  fill("white");
  text(TEAL_800.toString('#rrggbb'),170,1830); 
  
  fill(TEAL_850);
  noStroke();
  square(160,1920, 100);   
  fill("white");
  text(TEAL_850.toString('#rrggbb'),170,1940); 


  //DARK_ORANGE
  fill(DARK_ORANGE_050);
  noStroke();
  square(270,160, 100);
  fill("black");
  text(DARK_ORANGE_050.toString('#rrggbb'),280,180); 
  
  fill(DARK_ORANGE_100);
  noStroke();
  square(270,270, 100);
  fill("black");
  text(DARK_ORANGE_100.toString('#rrggbb'),280,290); 
  
  fill(DARK_ORANGE_150);
  noStroke();
  square(270,380, 100);
  fill("black");
  text(DARK_ORANGE_150.toString('#rrggbb'),280,400);   

  fill(DARK_ORANGE_200);
  noStroke();
  square(270,490, 100);
  fill("black");
  text(DARK_ORANGE_200.toString('#rrggbb'),280,510);
  
  fill(DARK_ORANGE_250);
  noStroke();
  square(270,600, 100);
  fill("black");
  text(DARK_ORANGE_250.toString('#rrggbb'),280,620);
  
  fill(DARK_ORANGE_300);
  noStroke();
  square(270,710, 100);
  fill("black");
  text(DARK_ORANGE_300.toString('#rrggbb'),280,730);
  
  fill(DARK_ORANGE_350);
  noStroke();
  square(270,820, 100);
  fill("black");
  text(DARK_ORANGE_350.toString('#rrggbb'),280,840);
  
  fill(DARK_ORANGE_400);
  noStroke();
  square(270,930, 100);
  fill("black");
  text(DARK_ORANGE_400.toString('#rrggbb'),280,950);
  
  fill(DARK_ORANGE_450);
  noStroke();
  square(270,1040, 100);
  fill("black");
  text(DARK_ORANGE_450.toString('#rrggbb'),280,1060);
  text("base",280, 1080);

  fill(DARK_ORANGE_500);
  noStroke();
  square(270,1150, 100);
  fill("black");
  text(DARK_ORANGE_500.toString('#rrggbb'),280,1170);


  fill(DARK_ORANGE_550);
  noStroke();
  square(270,1260, 100);
  fill("white");
  text(DARK_ORANGE_550.toString('#rrggbb'),280,1280);  
  
  fill(DARK_ORANGE_600);
  noStroke();
  square(270,1370, 100); 
  fill("white");
  text(DARK_ORANGE_600.toString('#rrggbb'),280,1390);  
  
  fill(DARK_ORANGE_650);
  noStroke();
  square(270,1480, 100);
  fill("white");
  text(DARK_ORANGE_650.toString('#rrggbb'),280,1500); 
  
  fill(DARK_ORANGE_700);
  noStroke();
  square(270,1590, 100); 
  fill("white");
  text(DARK_ORANGE_700.toString('#rrggbb'),280,1610); 
  
  fill(DARK_ORANGE_750);
  noStroke();
  square(270,1700, 100);
  fill("white");
  text(DARK_ORANGE_750.toString('#rrggbb'),280,1720); 
  
  fill(DARK_ORANGE_800);
  noStroke();
  square(270,1810, 100);  
  fill("white");
  text(DARK_ORANGE_800.toString('#rrggbb'),280,1830); 
  
  fill(DARK_ORANGE_850);
  noStroke();
  square(270,1920, 100);   
  fill("white");
  text(DARK_ORANGE_850.toString('#rrggbb'),280,1940); 
  

  //LIGHT_BLUE

  fill(LIGHT_BLUE_050);
  noStroke();
  square(380,160, 100);
  fill("black");
  text(LIGHT_BLUE_050.toString('#rrggbb'),390,180);
  
  fill(LIGHT_BLUE_100);
  noStroke();
  square(380,270, 100);
  fill("black");
  text(LIGHT_BLUE_100.toString('#rrggbb'),390,290); 
  
  fill(LIGHT_BLUE_150);
  noStroke();
  square(380,380, 100);
  fill("black");
  text(DARK_ORANGE_150.toString('#rrggbb'),390,400);
  
  fill(LIGHT_BLUE_200);
  noStroke();
  square(380,490, 100);
  fill("black");
  text(LIGHT_BLUE_200.toString('#rrggbb'),390,510);
  
  fill(LIGHT_BLUE_250);
  noStroke();
  square(380,600, 100);
  fill("black");
  text(LIGHT_BLUE_250.toString('#rrggbb'),390,620);
  
  fill(LIGHT_BLUE_300);
  noStroke();
  square(380,710, 100);
  fill("black");
  text(LIGHT_BLUE_300.toString('#rrggbb'),390,730);
  
  fill(LIGHT_BLUE_350);
  noStroke();
  square(380,820, 100);
  fill("black");
  text(LIGHT_BLUE_350.toString('#rrggbb'),390,850);
  
  fill(LIGHT_BLUE_400);
  noStroke();
  square(380,930, 100);
  fill("black");
  text(LIGHT_BLUE_400.toString('#rrggbb'),390,950);
 
  fill(LIGHT_BLUE_450);
  noStroke();
  square(380,1040, 100);
  fill("black");
  text(LIGHT_BLUE_450.toString('#rrggbb'),390,1060);
  text("base",390, 1080);

  fill(LIGHT_BLUE_500);
  noStroke();
  square(380,1150, 100);
  fill("black");
  text(LIGHT_BLUE_500.toString('#rrggbb'),390,1170);

  
  fill(LIGHT_BLUE_550);
  noStroke();
  square(380,1260, 100);
  fill("white");
  text(LIGHT_BLUE_550.toString('#rrggbb'),390,1280);
  
  fill(LIGHT_BLUE_600);
  noStroke();
  square(380,1370, 100); 
  fill("white");
  text(LIGHT_BLUE_600.toString('#rrggbb'),390,1390);
  
  fill(LIGHT_BLUE_650);
  noStroke();
  square(380,1480, 100);
  fill("white");
  text(LIGHT_BLUE_650.toString('#rrggbb'),390,1500);
  
  fill(LIGHT_BLUE_700);
  noStroke();
  square(380,1590, 100); 
  fill("white");
  text(LIGHT_BLUE_700.toString('#rrggbb'),390,1610);
  
  fill(LIGHT_BLUE_750);
  noStroke();
  square(380,1700, 100);
  fill("white");
  text(LIGHT_BLUE_750.toString('#rrggbb'),390,1720);
  
  fill(LIGHT_BLUE_800);
  noStroke();
  square(380,1810, 100);  
  fill("white");
  text(LIGHT_BLUE_800.toString('#rrggbb'),390,1830);
  
  fill(LIGHT_BLUE_850);
  noStroke();
  square(380,1920, 100);   
  fill("white");
  text(LIGHT_BLUE_850.toString('#rrggbb'),390,1940);

  
  //GREEN

  fill(GREEN_050);
  noStroke();
  square(490,160, 100);
  fill("black");
  text(GREEN_050.toString('#rrggbb'),500,180);
  
  fill(GREEN_100);
  noStroke();
  square(490,270, 100);
  fill("black");
  text(GREEN_100.toString('#rrggbb'),500,290);
  
  fill(GREEN_150);
  noStroke();
  square(490,380, 100);
  fill("black");
  text(GREEN_150.toString('#rrggbb'),500,400);
  
  fill(GREEN_200);
  noStroke();
  square(490,490, 100);
  fill("black");
  text(GREEN_200.toString('#rrggbb'),500,510);
  
  fill(GREEN_250);
  noStroke();
  square(490,600, 100);
  fill("black");
  text(GREEN_250.toString('#rrggbb'),500,620);

  fill(GREEN_300);
  noStroke();
  square(490,710, 100);
  fill("black");
  text(GREEN_300.toString('#rrggbb'),500,730);

  fill(GREEN_350);
  noStroke();
  square(490,820, 100);
  fill("black");
  text(GREEN_350.toString('#rrggbb'),500,840);

  fill(GREEN_400);
  noStroke();
  square(490,930, 100);
  fill("black");
  text(GREEN_400.toString('#rrggbb'),500,950);

  fill(GREEN_450);
  noStroke();
  square(490,1040, 100);
  fill("black");
  text(GREEN_450.toString('#rrggbb'),500,1060);
  text("base",500, 1080);

  fill(GREEN_500);
  noStroke();
  square(490,1150, 100);
  fill("black");
  text(GREEN_500.toString('#rrggbb'),500,1170);  
    
  fill(GREEN_550);
  noStroke();
  square(490,1260, 100);
  fill("white");
  text(GREEN_550.toString('#rrggbb'),500,1280);  

  fill(GREEN_600);
  noStroke();
  square(490,1370, 100); 
  fill("white");
  text(GREEN_600.toString('#rrggbb'),500,1390);  
  
  fill(GREEN_650);
  noStroke();
  square(490,1480, 100);
  fill("white");
  text(GREEN_650.toString('#rrggbb'),500,1500);  

  fill(GREEN_700);
  noStroke();
  square(490,1590, 100); 
  fill("white");
  text(GREEN_700.toString('#rrggbb'),500,1610);  

  fill(GREEN_750);
  noStroke();
  square(490,1700, 100);
  fill("white");
  text(GREEN_750.toString('#rrggbb'),500,1720); 

  fill(GREEN_800);
  noStroke();
  square(490,1810, 100);  
  fill("white");
  text(GREEN_800.toString('#rrggbb'),500,1830); 

  fill(GREEN_850);
  noStroke();
  square(490,1920, 100);   
  fill("white");
  text(GREEN_850.toString('#rrggbb'),500,1940); 

  
  //PURPLE

  fill(PURPLE_050);
  noStroke();
  square(600,160, 100);
  fill("black");
  text(PURPLE_050.toString('#rrggbb'),610,180);

  fill(PURPLE_100);
  noStroke();
  square(600,270, 100);
  fill("black");
  text(PURPLE_100.toString('#rrggbb'),610,290);

  fill(PURPLE_150);
  noStroke();
  square(600,380, 100);
  fill("black");
  text(PURPLE_150.toString('#rrggbb'),610,400);

  fill(PURPLE_200);
  noStroke();
  square(600,490, 100);
  fill("black");
  text(PURPLE_200.toString('#rrggbb'),610,510);

  fill(PURPLE_250);
  noStroke();
  square(600,600, 100);
  fill("black");
  text(PURPLE_250.toString('#rrggbb'),610,620);

  fill(PURPLE_300);
  noStroke();
  square(600,710, 100);
  fill("black");
  text(PURPLE_300.toString('#rrggbb'),610,730);

  fill(PURPLE_350);
  noStroke();
  square(600,820, 100);
  fill("black");
  text(PURPLE_350.toString('#rrggbb'),610,840);

  fill(PURPLE_400);
  noStroke();
  square(600,930, 100);
  fill("black");
  text(PURPLE_400.toString('#rrggbb'),610,950);

  fill(PURPLE_450);
  noStroke();
  square(600,1040, 100);
  fill("black");
  text(PURPLE_450.toString('#rrggbb'),610,1060);

  fill(PURPLE_500);
  noStroke();
  square(600,1150, 100);
  fill("black");
  text(PURPLE_500.toString('#rrggbb'),610,1170);
  text("base",610, 1090);

  fill(PURPLE_550);
  noStroke();
  square(600,1260, 100);
  fill("white");
  text(PURPLE_550.toString('#rrggbb'),610,1280);

  fill(PURPLE_600);
  noStroke();
  square(600,1370, 100); 
  fill("white");
  text(PURPLE_600.toString('#rrggbb'),610,1390);

  fill(PURPLE_650);
  noStroke();
  square(600,1480, 100);
  fill("white");
  text(PURPLE_650.toString('#rrggbb'),610,1500);

  fill(PURPLE_700);
  noStroke();
  square(600,1590, 100); 
  fill("white");
  text(PURPLE_700.toString('#rrggbb'),610,1610);

  fill(PURPLE_750);
  noStroke();
  square(600,1700, 100);
  fill("white");
  text(PURPLE_750.toString('#rrggbb'),610,1720);

  fill(PURPLE_800);
  noStroke();
  square(600,1810, 100);  
  fill("white");
  text(PURPLE_800.toString('#rrggbb'),610,1830);

  fill(PURPLE_850);
  noStroke();
  square(600,1920, 100);   
  fill("white");
  text(PURPLE_850.toString('#rrggbb'),610,1940);


  
  //LIGHT_ORANGE

  fill(LIGHT_ORANGE_050);
  noStroke();
  square(710,160, 100);
  fill("black");
  text(LIGHT_ORANGE_050.toString('#rrggbb'),720,180);

  fill(LIGHT_ORANGE_100);
  noStroke();
  square(710,270, 100);
  fill("black");
  text(LIGHT_ORANGE_100.toString('#rrggbb'),720,290);

  fill(LIGHT_ORANGE_150);
  noStroke();
  square(710,380, 100);
  fill("black");
  text(LIGHT_ORANGE_150.toString('#rrggbb'),720,400);

  fill(LIGHT_ORANGE_200);
  noStroke();
  square(710,490, 100);
  fill("black");
  text(LIGHT_ORANGE_200.toString('#rrggbb'),720,510);

  fill(LIGHT_ORANGE_250);
  noStroke();
  square(710,600, 100);
  fill("black");
  text(LIGHT_ORANGE_250.toString('#rrggbb'),720,620);

  fill(LIGHT_ORANGE_300);
  noStroke();
  square(710,710, 100);
  fill("black");
  text(LIGHT_ORANGE_300.toString('#rrggbb'),720,730);

  fill(LIGHT_ORANGE_350);
  noStroke();
  square(710,820, 100);
  fill("black");
  text(LIGHT_ORANGE_350.toString('#rrggbb'),720,840);

  fill(LIGHT_ORANGE_400);
  noStroke();
  square(710,930, 100);
  fill("black");
  text(LIGHT_ORANGE_400.toString('#rrggbb'),720,950);

  fill(LIGHT_ORANGE_450);
  noStroke();
  square(710,1040, 100);
  fill("black");
  text(LIGHT_ORANGE_450.toString('#rrggbb'),720,1060);

  fill(LIGHT_ORANGE_500);
  noStroke();
  square(710,1150, 100);
  fill("black");
  text(LIGHT_ORANGE_500.toString('#rrggbb'),720,1170);
  text("base",720, 1090);

  fill(LIGHT_ORANGE_550);
  noStroke();
  square(710,1260, 100);
  fill("white");
  text(LIGHT_ORANGE_550.toString('#rrggbb'),720,1280);

  fill(LIGHT_ORANGE_600);
  noStroke();
  square(710,1370, 100); 
  fill("white");
  text(LIGHT_ORANGE_700.toString('#rrggbb'),720,1390);

  fill(LIGHT_ORANGE_650);
  noStroke();
  square(710,1480, 100);
  fill("white");
  text(LIGHT_ORANGE_650.toString('#rrggbb'),720,1500);

  fill(LIGHT_ORANGE_700);
  noStroke();
  square(710,1590, 100); 
  fill("white");
  text(LIGHT_ORANGE_700.toString('#rrggbb'),720,1610);

  fill(LIGHT_ORANGE_750);
  noStroke();
  square(710,1700, 100);
  fill("white");
  text(LIGHT_ORANGE_750.toString('#rrggbb'),720,1720);

  fill(LIGHT_ORANGE_800);
  noStroke();
  square(710,1810, 100);  
  fill("white");
  text(LIGHT_ORANGE_800.toString('#rrggbb'),720,1830);

  fill(LIGHT_ORANGE_850);
  noStroke();
  square(710,1920, 100);   
  fill("white");
  text(LIGHT_ORANGE_850.toString('#rrggbb'),720,1940);

  
  //MAGENTA



  fill(MAGENTA_050);
  noStroke();
  square(820,160, 100);
  fill("black");
  text(MAGENTA_050.toString('#rrggbb'),830,180);

  fill(MAGENTA_100);
  noStroke();
  square(820,270, 100);
  fill("black");
  text(MAGENTA_100.toString('#rrggbb'),830,290);

  fill(MAGENTA_150);
  noStroke();
  square(820,380, 100);
  fill("black");
  text(MAGENTA_150.toString('#rrggbb'),830,400);

  fill(MAGENTA_200);
  noStroke();
  square(820,490, 100);
  fill("black");
  text(MAGENTA_200.toString('#rrggbb'),830,510);

  fill(MAGENTA_250);
  noStroke();
  square(820,600, 100);
  fill("black");
  text(MAGENTA_250.toString('#rrggbb'),830,620);

  fill(MAGENTA_300);
  noStroke();
  square(820,710, 100);
  fill("black");
  text(MAGENTA_300.toString('#rrggbb'),830,730);

  fill(MAGENTA_350);
  noStroke();
  square(820,820, 100);
  fill("black");
  text(MAGENTA_350.toString('#rrggbb'),830,840);

  fill(MAGENTA_400);
  noStroke();
  square(820,930, 100);
  fill("black");
  text(MAGENTA_400.toString('#rrggbb'),830,950);

  fill(MAGENTA_450);
  noStroke();
  square(820,1040, 100);
  fill("black");
  text(MAGENTA_450.toString('#rrggbb'),830,1060);
  text("base",830, 1090);

  fill(MAGENTA_500);
  noStroke();
  square(820,1150, 100);
  fill("white");
  text(MAGENTA_500.toString('#rrggbb'),830,1170);

  fill(MAGENTA_550);
  noStroke();
  square(820,1260, 100); 
  fill("white");
  text(MAGENTA_550.toString('#rrggbb'),830,1280);

  fill(MAGENTA_600);
  noStroke();
  square(820,1370, 100);
  fill("white");
  text(MAGENTA_600.toString('#rrggbb'),830,1390);

  fill(MAGENTA_650);
  noStroke();
  square(820,1480, 100); 
  fill("white");
  text(MAGENTA_650.toString('#rrggbb'),830,1500);

  fill(MAGENTA_700);
  noStroke();
  square(820,1590, 100);
  fill("white");
  text(MAGENTA_700.toString('#rrggbb'),830,1610);

  fill(MAGENTA_750);
  noStroke();
  square(820,1700, 100);  
  fill("white");
  text(MAGENTA_750.toString('#rrggbb'),830,1720);

  fill(MAGENTA_800);
  noStroke();
  square(820,1810, 100);   
  fill("white");
  text(MAGENTA_800.toString('#rrggbb'),830,1830);

  fill(MAGENTA_850);
  noStroke();
  square(820,1920, 100);
  fill("white");
  text(MAGENTA_850.toString('#rrggbb'),830,1940);



  //NEUTRAL

 fill(NEUTRAL_000);
  noStroke();
  square(930,50, 100);
  fill("black");
  text(NEUTRAL_000.toString('#rrggbb'),940,70);

  fill(NEUTRAL_050);
  noStroke();
  square(930,160, 100);
  fill("black");
  text(NEUTRAL_050.toString('#rrggbb'),940,180);

  fill(NEUTRAL_100);
  noStroke();
  square(930,270, 100);
  fill("black");
  text(NEUTRAL_100.toString('#rrggbb'),940,290);

  fill(NEUTRAL_150);
  noStroke();
  square(930,380, 100);
  fill("black");
  text(NEUTRAL_150.toString('#rrggbb'),940,400);

  fill(NEUTRAL_200);
  noStroke();
  square(930,490, 100);
  fill("black");
  text(NEUTRAL_200.toString('#rrggbb'),940,510);

  fill(NEUTRAL_250);
  noStroke();
  square(930,600, 100);
  fill("black");
  text(NEUTRAL_250.toString('#rrggbb'),940,620);

  fill(NEUTRAL_300);
  noStroke();
  square(930,710, 100);
  fill("black");
  text(NEUTRAL_300.toString('#rrggbb'),940,730);

  fill(NEUTRAL_350);
  noStroke();
  square(930,820, 100);
  fill("black");
  text(NEUTRAL_350.toString('#rrggbb'),940,840);

  fill(NEUTRAL_400);
  noStroke();
  square(930,930, 100);
  fill("black");
  text(NEUTRAL_400.toString('#rrggbb'),940,950);

  fill(NEUTRAL_450);
  noStroke();
  square(930,1040, 100);
  fill("black");
  text(NEUTRAL_450.toString('#rrggbb'),940,1060);

  fill(NEUTRAL_500);
  noStroke();
  square(930,1150, 100);
  fill("white");
  text(NEUTRAL_500.toString('#rrggbb'),940,1170);

  fill(NEUTRAL_550);
  noStroke();
  square(930,1260, 100); 
  fill("white");
  text(NEUTRAL_550.toString('#rrggbb'),940,1280);

  fill(NEUTRAL_600);
  noStroke();
  square(930,1370, 100);
  fill("white");
  text(NEUTRAL_600.toString('#rrggbb'),940,1390);

  fill(NEUTRAL_650);
  noStroke();
  square(930,1480, 100); 
  fill("white");
  text(NEUTRAL_650.toString('#rrggbb'),940,1500);

  fill(NEUTRAL_700);
  noStroke();
  square(930,1590, 100);
  fill("white");
  text(NEUTRAL_700.toString('#rrggbb'),940,1610);

  fill(NEUTRAL_750);
  noStroke();
  square(930,1700, 100);  
  fill("white");
  text(NEUTRAL_750.toString('#rrggbb'),940,1720);

  fill(NEUTRAL_800);
  noStroke();
  square(930,1810, 100);   
  fill("white");
  text(NEUTRAL_800.toString('#rrggbb'),940,1830);

  fill(NEUTRAL_850);
  noStroke();
  square(930,1920, 100);   
  fill("white");
  text(NEUTRAL_850.toString('#rrggbb'),940,1940);

  fill(NEUTRAL_900);
  noStroke();
  square(930,2030, 100);   
  fill("white");
  text(NEUTRAL_900.toString('#rrggbb'),940,2050); 

/*
  //print hex values
  //I don't know why p5.js is recursive in these, but it will continue writing to the console until you press the stop button on the script
    print("DARK_BLUE_050: "+ DARK_BLUE_050.toString('#rrggbb'));
    print("DARK_BLUE_100: "+ DARK_BLUE_100.toString('#rrggbb'));
    print("DARK_BLUE_150: "+ DARK_BLUE_150.toString('#rrggbb'));
    print("DARK_BLUE_200: "+ DARK_BLUE_200.toString('#rrggbb'));
    print("DARK_BLUE_250: "+ DARK_BLUE_250.toString('#rrggbb'));
    print("DARK_BLUE_300: "+ DARK_BLUE_300.toString('#rrggbb'));
    print("DARK_BLUE_350: "+ DARK_BLUE_350.toString('#rrggbb'));
    print("DARK_BLUE_400: "+ DARK_BLUE_400.toString('#rrggbb'));    
    print("DARK_BLUE_450: "+ DARK_BLUE_450.toString('#rrggbb'));
    print("DARK_BLUE_500: "+ DARK_BLUE_500.toString('#rrggbb'));   
    print("DARK_BLUE_550: "+ DARK_BLUE_550.toString('#rrggbb'));
    print("DARK_BLUE_600: "+ DARK_BLUE_600.toString('#rrggbb'));
    print("DARK_BLUE_650: "+ DARK_BLUE_650.toString('#rrggbb'));
    print("DARK_BLUE_700: "+ DARK_BLUE_700.toString('#rrggbb'));
    print("DARK_BLUE_750: "+ DARK_BLUE_750.toString('#rrggbb'));
    print("DARK_BLUE_800: "+ DARK_BLUE_800.toString('#rrggbb'));    
    print("DARK_BLUE_850: "+ DARK_BLUE_850.toString('#rrggbb'));    

    print("TEAL_050: "+ TEAL_050.toString('#rrggbb'));
    print("TEAL_100: "+ TEAL_100.toString('#rrggbb'));
    print("TEAL_150: "+ TEAL_150.toString('#rrggbb'));
    print("TEAL_200: "+ TEAL_200.toString('#rrggbb'));
    print("TEAL_250: "+ TEAL_250.toString('#rrggbb'));
    print("TEAL_300: "+ TEAL_300.toString('#rrggbb'));
    print("TEAL_350: "+ TEAL_350.toString('#rrggbb'));
    print("TEAL_400: "+ TEAL_400.toString('#rrggbb'));    
    print("TEAL_450: "+ TEAL_450.toString('#rrggbb'));
    print("TEAL_500: "+ TEAL_500.toString('#rrggbb'));     
    print("TEAL_550: "+ TEAL_550.toString('#rrggbb'));
    print("TEAL_600: "+ TEAL_600.toString('#rrggbb'));
    print("TEAL_650: "+ TEAL_650.toString('#rrggbb'));
    print("TEAL_700: "+ TEAL_700.toString('#rrggbb'));
    print("TEAL_750: "+ TEAL_750.toString('#rrggbb'));
    print("TEAL_800: "+ TEAL_800.toString('#rrggbb'));    
    print("TEAL_850: "+ TEAL_850.toString('#rrggbb'));    
  
    print("DARK_ORANGE_050: "+ DARK_ORANGE_050.toString('#rrggbb'));
    print("DARK_ORANGE_100: "+ DARK_ORANGE_100.toString('#rrggbb'));
    print("DARK_ORANGE_150: "+ DARK_ORANGE_150.toString('#rrggbb'));
    print("DARK_ORANGE_200: "+ DARK_ORANGE_200.toString('#rrggbb'));
    print("DARK_ORANGE_250: "+ DARK_ORANGE_250.toString('#rrggbb'));
    print("DARK_ORANGE_300: "+ DARK_ORANGE_300.toString('#rrggbb'));
    print("DARK_ORANGE_350: "+ DARK_ORANGE_350.toString('#rrggbb'));
    print("DARK_ORANGE_400: "+ DARK_ORANGE_400.toString('#rrggbb'));    
    print("DARK_ORANGE_450: "+ DARK_ORANGE_450.toString('#rrggbb'));
    print("DARK_ORANGE_500: "+ DARK_ORANGE_500.toString('#rrggbb'));     
    print("DARK_ORANGE_550: "+ DARK_ORANGE_550.toString('#rrggbb'));
    print("DARK_ORANGE_600: "+ DARK_ORANGE_600.toString('#rrggbb'));
    print("DARK_ORANGE_650: "+ DARK_ORANGE_650.toString('#rrggbb'));
    print("DARK_ORANGE_700: "+ DARK_ORANGE_700.toString('#rrggbb'));
    print("DARK_ORANGE_750: "+ DARK_ORANGE_750.toString('#rrggbb'));
    print("DARK_ORANGE_800: "+ DARK_ORANGE_800.toString('#rrggbb'));    
    print("DARK_ORANGE_850: "+ DARK_ORANGE_850.toString('#rrggbb'));    

    print("LIGHT_BLUE_050: "+ LIGHT_BLUE_050.toString('#rrggbb'));
    print("LIGHT_BLUE_100: "+ LIGHT_BLUE_100.toString('#rrggbb'));
    print("LIGHT_BLUE_150: "+ LIGHT_BLUE_150.toString('#rrggbb'));
    print("LIGHT_BLUE_200: "+ LIGHT_BLUE_200.toString('#rrggbb'));
    print("LIGHT_BLUE_250: "+ LIGHT_BLUE_250.toString('#rrggbb'));
    print("LIGHT_BLUE_300: "+ LIGHT_BLUE_300.toString('#rrggbb'));
    print("LIGHT_BLUE_350: "+ LIGHT_BLUE_350.toString('#rrggbb'));
    print("LIGHT_BLUE_400: "+ LIGHT_BLUE_400.toString('#rrggbb'));    
    print("LIGHT_BLUE_450: "+ LIGHT_BLUE_450.toString('#rrggbb'));
    print("LIGHT_BLUE_500: "+ LIGHT_BLUE_500.toString('#rrggbb'));     
    print("LIGHT_BLUE_550: "+ LIGHT_BLUE_550.toString('#rrggbb'));
    print("LIGHT_BLUE_600: "+ LIGHT_BLUE_600.toString('#rrggbb'));
    print("LIGHT_BLUE_650: "+ LIGHT_BLUE_650.toString('#rrggbb'));
    print("LIGHT_BLUE_700: "+ LIGHT_BLUE_700.toString('#rrggbb'));
    print("LIGHT_BLUE_750: "+ LIGHT_BLUE_750.toString('#rrggbb'));
    print("LIGHT_BLUE_800: "+ LIGHT_BLUE_800.toString('#rrggbb'));    
    print("LIGHT_BLUE_850: "+ LIGHT_BLUE_850.toString('#rrggbb'));    

    print("GREEN_050: "+ GREEN_050.toString('#rrggbb'));
    print("GREEN_100: "+ GREEN_100.toString('#rrggbb'));
    print("GREEN_150: "+ GREEN_150.toString('#rrggbb'));
    print("GREEN_200: "+ GREEN_200.toString('#rrggbb'));
    print("GREEN_250: "+ GREEN_250.toString('#rrggbb'));
    print("GREEN_300: "+ GREEN_300.toString('#rrggbb'));
    print("GREEN_350: "+ GREEN_350.toString('#rrggbb'));
    print("GREEN_400: "+ GREEN_400.toString('#rrggbb'));    
    print("GREEN_450: "+ GREEN_450.toString('#rrggbb'));
    print("GREEN_500: "+ GREEN_500.toString('#rrggbb'));     
    print("GREEN_550: "+ GREEN_550.toString('#rrggbb'));
    print("GREEN_600: "+ GREEN_600.toString('#rrggbb'));
    print("GREEN_650: "+ GREEN_650.toString('#rrggbb'));
    print("GREEN_700: "+ GREEN_700.toString('#rrggbb'));
    print("GREEN_750: "+ GREEN_750.toString('#rrggbb'));
    print("GREEN_800: "+ GREEN_800.toString('#rrggbb'));    
    print("GREEN_850: "+ GREEN_850.toString('#rrggbb'));    

    print("PURPLE_050: "+ PURPLE_050.toString('#rrggbb'));
    print("PURPLE_100: "+ PURPLE_100.toString('#rrggbb'));
    print("PURPLE_150: "+ PURPLE_150.toString('#rrggbb'));
    print("PURPLE_200: "+ PURPLE_200.toString('#rrggbb'));
    print("PURPLE_250: "+ PURPLE_250.toString('#rrggbb'));
    print("PURPLE_300: "+ PURPLE_300.toString('#rrggbb'));
    print("PURPLE_350: "+ PURPLE_350.toString('#rrggbb'));
    print("PURPLE_400: "+ PURPLE_400.toString('#rrggbb'));    
    print("PURPLE_450: "+ PURPLE_450.toString('#rrggbb'));
    print("PURPLE_500: "+ PURPLE_500.toString('#rrggbb'));     
    print("PURPLE_550: "+ PURPLE_550.toString('#rrggbb'));
    print("PURPLE_600: "+ PURPLE_600.toString('#rrggbb'));
    print("PURPLE_650: "+ PURPLE_650.toString('#rrggbb'));
    print("PURPLE_700: "+ PURPLE_700.toString('#rrggbb'));
    print("PURPLE_750: "+ PURPLE_750.toString('#rrggbb'));
    print("PURPLE_800: "+ PURPLE_800.toString('#rrggbb'));    
    print("PURPLE_850: "+ PURPLE_850.toString('#rrggbb'));    

    print("LIGHT_ORANGE_050: "+ LIGHT_ORANGE_050.toString('#rrggbb'));
    print("LIGHT_ORANGE_100: "+ LIGHT_ORANGE_100.toString('#rrggbb'));
    print("LIGHT_ORANGE_150: "+ LIGHT_ORANGE_150.toString('#rrggbb'));
    print("LIGHT_ORANGE_200: "+ LIGHT_ORANGE_200.toString('#rrggbb'));
    print("LIGHT_ORANGE_250: "+ LIGHT_ORANGE_250.toString('#rrggbb'));
    print("LIGHT_ORANGE_300: "+ LIGHT_ORANGE_300.toString('#rrggbb'));
    print("LIGHT_ORANGE_350: "+ LIGHT_ORANGE_350.toString('#rrggbb'));
    print("LIGHT_ORANGE_400: "+ LIGHT_ORANGE_400.toString('#rrggbb'));    
    print("LIGHT_ORANGE_450: "+ LIGHT_ORANGE_450.toString('#rrggbb'));
    print("LIGHT_ORANGE_500: "+ LIGHT_ORANGE_500.toString('#rrggbb'));     
    print("LIGHT_ORANGE_550: "+ LIGHT_ORANGE_550.toString('#rrggbb'));
    print("LIGHT_ORANGE_600: "+ LIGHT_ORANGE_600.toString('#rrggbb'));
    print("LIGHT_ORANGE_650: "+ LIGHT_ORANGE_650.toString('#rrggbb'));
    print("LIGHT_ORANGE_700: "+ LIGHT_ORANGE_700.toString('#rrggbb'));
    print("LIGHT_ORANGE_750: "+ LIGHT_ORANGE_750.toString('#rrggbb'));
    print("LIGHT_ORANGE_800: "+ LIGHT_ORANGE_800.toString('#rrggbb'));    
    print("LIGHT_ORANGE_850: "+ LIGHT_ORANGE_850.toString('#rrggbb'));    

    print("MAGENTA_050: "+ MAGENTA_050.toString('#rrggbb'));
    print("MAGENTA_100: "+ MAGENTA_100.toString('#rrggbb'));
    print("MAGENTA_150: "+ MAGENTA_150.toString('#rrggbb'));
    print("MAGENTA_200: "+ MAGENTA_200.toString('#rrggbb'));
    print("MAGENTA_250: "+ MAGENTA_250.toString('#rrggbb'));
    print("MAGENTA_300: "+ MAGENTA_300.toString('#rrggbb'));
    print("MAGENTA_350: "+ MAGENTA_350.toString('#rrggbb'));
    print("MAGENTA_400: "+ MAGENTA_400.toString('#rrggbb'));    
    print("MAGENTA_450: "+ MAGENTA_450.toString('#rrggbb'));
    print("MAGENTA_500: "+ MAGENTA_500.toString('#rrggbb'));     
    print("MAGENTA_550: "+ MAGENTA_550.toString('#rrggbb'));
    print("MAGENTA_600: "+ MAGENTA_600.toString('#rrggbb'));
    print("MAGENTA_650: "+ MAGENTA_650.toString('#rrggbb'));
    print("MAGENTA_700: "+ MAGENTA_700.toString('#rrggbb'));
    print("MAGENTA_750: "+ MAGENTA_750.toString('#rrggbb'));
    print("MAGENTA_800: "+ MAGENTA_800.toString('#rrggbb'));    
    print("MAGENTA_850: "+ MAGENTA_850.toString('#rrggbb'));    

    print("NEUTRAL_000: "+ NEUTRAL_000.toString('#rrggbb'));
    print("NEUTRAL_050: "+ NEUTRAL_050.toString('#rrggbb'));
    print("NEUTRAL_100: "+ NEUTRAL_100.toString('#rrggbb'));
    print("NEUTRAL_150: "+ NEUTRAL_150.toString('#rrggbb'));
    print("NEUTRAL_200: "+ NEUTRAL_200.toString('#rrggbb'));
    print("NEUTRAL_250: "+ NEUTRAL_250.toString('#rrggbb'));
    print("NEUTRAL_300: "+ NEUTRAL_300.toString('#rrggbb'));
    print("NEUTRAL_350: "+ NEUTRAL_350.toString('#rrggbb'));
    print("NEUTRAL_400: "+ NEUTRAL_400.toString('#rrggbb'));    
    print("NEUTRAL_450: "+ NEUTRAL_450.toString('#rrggbb'));
    print("NEUTRAL_500: "+ NEUTRAL_500.toString('#rrggbb'));     
    print("NEUTRAL_550: "+ NEUTRAL_550.toString('#rrggbb'));
    print("NEUTRAL_600: "+ NEUTRAL_600.toString('#rrggbb'));
    print("NEUTRAL_650: "+ NEUTRAL_650.toString('#rrggbb'));
    print("NEUTRAL_700: "+ NEUTRAL_700.toString('#rrggbb'));
    print("NEUTRAL_750: "+ NEUTRAL_750.toString('#rrggbb'));
    print("NEUTRAL_800: "+ NEUTRAL_800.toString('#rrggbb'));    
    print("NEUTRAL_850: "+ NEUTRAL_850.toString('#rrggbb'));    
    print("NEUTRAL_900: "+ NEUTRAL_900.toString('#rrggbb'));    
*/
}


function lighTen(baseColor,steP){
//this function returns an array of HUE, SAT, and BNESS correlating to the MinSat, MaxBright, MinBright, and sTeps constants times whatever the input steP number is.
  //hue will  be [0] in the return array
  //saturation will be [1] in the return array
  //brightness will be [2] in the return array

  const HUE=Number(hue(baseColor));

  //this calculation makes the assumption the base color saturation will always be greater than the MinSat anchor constant
  let satGap=saturation(baseColor) - MinSat;
  let satIncrements=satGap/sTeps;
  const SAT=saturation(baseColor) - satIncrements * steP ;

  //unlike saturation, the MaxBright constant may be less or greater than the base color brightness
  //although it would be extra steps, the satGap could use the same math, or even better just take an absolute value to define the gap and later figure out if you're adding or subtracting from the base to reach the anchor
  let bNessGap=Math.max(brightness(baseColor),MaxBright)-Math.min(brightness(baseColor),MaxBright); 

  const BNESS=bNessGap/sTeps * steP + brightness(baseColor);
  
  // DEBUG
  //print(MinSat);
  //print(Number(hue(baseColor)));
  //print(HUE);
  //print(Number((saturation(baseColor) - MinSat)/sTeps) * steP);
  //print (satGap);
  //print (SAT);
  //print(Number((brightness(baseColor) - MaxBright)/sTeps) * steP);
  //print (MaxBrightGap/sTeps);
  //print (BNESS);
  //print (Math.max(brightness(baseColor),MaxBright));
  //print(Math.min(brightness(baseColor),MaxBright));
  //print(Math.max(brightness(baseColor),MaxBright)-Math.min(brightness(baseColor),MaxBright));
  //print(sTeps);

  return([HUE,SAT,BNESS]);
}

function darKen(baseColor,steP){
  //this function returns an array of HUE, SAT, and BNESS correlating to the MinSat, MaxBright, MinBright, and sTeps constants times whatever the input steP number is.
  //hue will  be [0] in the return array
  //saturation will be [1] in the return array
  //brightness will be [2] in the return array
  const HUE=Number(hue(baseColor));

  //this calculation makes the assumption the base color saturation will always be greater than the MinSat anchor constant
  //this assumption is incorrect - it's not what David's color model did. David's color model will require a 4th constant - the saturation anchor of a fully darkened color.
  let satGap=Math.max(saturation(baseColor),MaxSat)-Math.min(saturation(baseColor),MaxSat);
  let satIncrements=satGap/sTeps;
  //this logic is new: do we add sat on the darkening, or subtract it? 
  //const SAT=saturation(baseColor) - satIncrements * steP ; to de-saturate on darkening. On OCtober 3, 2024, XD committed to leave saturation alone on darkening.
  //const SAT=saturation(baseColor); to leave saturation alone on darkening
  //const SAT=saturation(baseColor) + satIncrements * steP ; to increase saturation on darkening
  const SAT=saturation(baseColor);

  //unlike saturation, the MaxBright constant may be less or greater than the base color brightness
  //although it would be extra steps, the satGap could use the same math, or even better just take an absolute value to define the gap and later figure out if you're adding or subtracting from the base to reach the anchor
  //the unsolved challenge is that this function uses MinBright as an anchor instead of MaxBright
  let MaxBrightGap=Math.max(brightness(baseColor),MinBright)-Math.min(brightness(baseColor),MinBright); 
//this is the opposite of the lighTen function
  const BNESS=brightness(baseColor) - MaxBrightGap/sTeps * steP;
  
  // DEBUG
  //print(MinSat);
  //print(Number(hue(baseColor)));
  //print(HUE);
  //print(Number((saturation(baseColor) - MinSat)/sTeps) * steP);
  //print (MaxBrightGap);
  //print (MaxBright);
  //print(Number((brightness(baseColor) - MaxBright)/sTeps) * steP);
  //print (MaxBrightGap/sTeps);
  //print (MaxBright);
  //print (Math.max(brightness(baseColor),MaxBright));
  //print(Math.min(brightness(baseColor),MaxBright));
  //print(Math.max(brightness(baseColor),MaxBright)-Math.min(brightness(baseColor),MaxBright));
  //print(sTeps);

  return([HUE,SAT,BNESS]);
}