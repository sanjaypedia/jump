var canvas;
var redB;
var blueB;
var block3;
var block4;
var main;

var music;

function preload(){
    //music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    redB = createSprite(700,590,90,20);
    redB.shapeColor = "red";
    //redB.velocityX = 3;

    blueB = createSprite(600,590,90,20);
    blueB.shapeColor = "blue";
    //blueB.velocityX = -3;
    
    block3 = createSprite(500,590,90,20);
    block3.shapeColor = "green";
   // block3.velocityX = 3;

    block4 = createSprite(400,590,90,20);
    block4.shapeColor = "orange";
    //block4.velocityX = -3;
    main = createSprite(400,300,20,20);
    main.shapeColor = "black";

    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    console.log(main.y-redB.y)

    if(keyDown("up")){
        main.y = main.y-2;
    }
    if(keyDown("down")){
        main.y = main.y+2;
    }
    if(keyDown("right")){
        main.x = main.x+2;
    }
    if(keyDown("left")){
        main.x = main.x-2;
    }


  if(collide(redB,main) && main.bounceOff(redB) ){
      main.shapeColor = "red";
      redB.shapeColor = "red";
  }

  if(collide(blueB,main) && main.bounceOff(blueB)){
    main.shapeColor = "blue";
    blueB.shapeColor = "blue";
}

  if(collide(block3,main) && main.bounceOff(block3)){
    main.shapeColor = "green";
    block3.shapeColor = "green";
}


 if(collide(block4,main) && main.bounceOff(block4)){
    main.shapeColor = "orange";
    block4.shapeColor = "orange";
}
    drawSprites();

    //add condition to check if box touching surface and make it box
}


