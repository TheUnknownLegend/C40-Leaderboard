var passedFinish;

var db;

var finishedPlayers = 0;

var car1,car2,car3,car4 ,cars ;
var car1Img,car2Img,car3Img,car4Img;
var track;
var track1;

var form;
var player;
var game;

var gameState = 0;
var playerCount; 
var allPlayers;
var distance = 0;

function preload()
{

    car1Img = loadImage("images/car1.png");
    
    car2Img = loadImage("images/car2.png");

    car3Img = loadImage("images/car3.png");

    car4Img = loadImage("images/car4.png");

    track = loadImage("images/track.jpg");

    track1 = loadImage("images/track.png");

}

function setup(){
    createCanvas( displayWidth - 20 , displayHeight - 30);

    db = firebase.database();

    game = new Game();

    game.getState();

    game.start();
    
}

function draw(){
    background("white");

    if(playerCount === 4 && finishedPlayers === 0){
        game.update(1);
    }
    
    if(gameState === 1 ){
        clear();
        game.play();
    }

    if(gameState === 2 && finishedPlayers == 4){
        game.displayRank();
    }

    if(finishedPlayers === 4){
        game.update(2);
    }

}
