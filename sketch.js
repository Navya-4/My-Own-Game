var database

var gameState = 0;
var playerCount;
var form, player, game;

var allPlayers;

var bike1, bike2, bike3, bike4, bikes;

var bImg1, bImg2, bImg3, bImg4, trackImg;

function preload (){

   

}

function setup(){
    createCanvas(displayWidth - 100,displayHeight-20);

   database = firebase.database()
   game  = new Game ()
   game.getState()
   game.start()


}

function draw(){
   if (playerCount === 4){
    game.update (1)
 }
   if (gameState === 1){
   clear()
   game.play()
 }

   if (gameState === 2){
    game.end ()
 }

}