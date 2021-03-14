var form, player, game, database;
var position;
var gameState=0, playerCount


function setup(){
  database = firebase.database();
  createCanvas(400,400);
  game=new Game()
  game.getState()
  game.start()
}

function draw(){
  
}