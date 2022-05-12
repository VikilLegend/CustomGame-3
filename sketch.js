var boat,backgroundImg,boatImg,game,gameState=0,form,flagImg
var player,playerCount,allPlayers,database,boat1,boat2,boats
function preload() {
flagImg = loadImage("assets/flag.png")
  boatImg = loadImage("assets/boat.jpg")
backgroundImg = loadImage("assets/background.png")
}

function setup() {
createCanvas(displayWidth,displayHeight)
database=firebase.database()


game = new Game()
game.getState()
game.start()
}

function draw() {

if(playerCount===2){
  game.update(1)
}

if(gameState===1){
  clear();
game.play();
}
}