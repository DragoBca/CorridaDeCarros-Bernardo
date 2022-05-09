var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player,game;
var playerCount, gameState, allPlayers;
var car1, car2, car1_img, car2_img, cars = [];
var track;
var goldCoins, goldCoin_img, fuels, fuel_img, life_img;
var obstacles, obstacle1Image, obstacle2Image;
var blast_img;


function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
  car1_img = loadImage("./assets/car1.png");
  car2_img = loadImage("./assets/car2.png");
  track = loadImage("./assets/track.jpg")

  goldCoin_img = loadImage("./assets/goldCoin.png");
  obstacle1Image = loadImage("./assets/obstacle1.png");
  obstacle2Image = loadImage("./assets/obstacle2.png");
  fuel_img = loadImage("./assets/fuel.png");
  life_img = loadImage("./assets/life.png");
  blast_img = loadImage("./assets/blast.png");
}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw() {
  background(backgroundImage);

  if (playerCount == 2) {
    game.updateState(1);
  }

  if (gameState == 1) {
    game.play();
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
