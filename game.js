class Game {

    constructor () {

    }

    getState (){

        var gameStateRef = database.ref("gameState")
        gameStateRef.on ("value", (data)=> {
            gameState = data.val()
        })
    }

    update (){
        database.ref("/").update({
            gameState: state
        })
    }

    async start (){
        if (gameState === 0){
            player = new Player()
            var playerCountRef = await database.ref ("playerCount").once ("value")
            if (playerCountRef.exists()){
                playerCount = playerCountRef.val()
                player.getCount()
            }
            form = new Form()
            form.display()
        }
    

    bike1 = createSprite(100,200,50,50)
    bike2 = createSprite(300,200,50,50)
    bike3 = createSprite(500,200,50,50)
    bike4 = createSprite(700,200,50,50)
    }

    play(){
    form.hide()
    textSize (30)
    stroke("#ECC578")
    fill ("#9DC9BA")
    text ("Welcome players to this ⚝ exiting, edge of the seat game ⚝ where you can experience what it's like to compete in a bike race in the ✼Pandemic✼", 200, 400)
    Player.getPlayerInfo();
    player.getBikeAtEnd();
    if (allPlayers !== undefined){
        background ("brown")
        var index = 0
        var x = 160
        var y;
        for (var plr in allPlayers){
          index = index+1
          x = x+200
          y = y-allPlayers [plr].distance
          bikes [index-1].x = x
          bikes [index-1].y = y
          textAlign (CENTER)
          textSize (15)
          text(allPlayers[plr].name, bikes [index-1].x, bikes [index-1].y+80)
          if (index === player.index){
              bikes [index-1].shapeColor = "cyan"
              camera.position.x = displayWidth/2
              camera.position.y = cars [index-1].y
             stroke ("green")
             fill ("lightgreen")
              //ellipse (x,y,80,80)
            
            //text (player.name,x,y+80)
              
          }
        }
    }
    if (keyIsDown (UP_ARROW) && player.index !== null){
        player.distance += 50
        player.update()
    }

    if (player.distance > 2000){
        gameState = 2
        player.rank++
        Player.updateBikeAtEnd(player.rank)
    }

    drawSprites()
}


    end (){
        camera.position.x = 0
        camera.position.y = 0
        fill ("#9DC9BA")
        textSize (30)
        text ("Game Over ", 100, -100)
        console.log ("gameOver")
        console.log (player.rank)
    }

}
