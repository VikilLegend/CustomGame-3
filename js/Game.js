class Game{

  constructor() {


  }

  start() {
    if(gameState===0) {

      player = new Player()
      player.getCount();
    }
form = new Form()
form.display()

  }

  play() {
    form.playButton.hide()
    form.input.hide()
    form.greeting.hide()
Player.getPlayerInfo()
boat1=createSprite(200,200)
boat1.addImage(boatImg)
boat2=createSprite(400,200)
boat2.addImage(boatImg)
boats=[boat1,boat2]

if(allPlayers!==undefined){
image(backgroundImg,0,-displayHeight*2,displayWidth,displayHeight*3)
var index=0;
var x=100;
var y
for(var i in allPlayers){
  index=index+1;
x=x+400
y=displayHeight-allPlayers[i].distance
boats[index-1].x=x
boats[index-1].y=y
}
}
drawSprites();
  }

  end(){

  }

  getState(){
database.ref("gameState").on('value',function(data){
 gameState= data.val()
})
  }

  update(gameState){
database.ref("/").update({
  gameState:gameState
})
  }
}