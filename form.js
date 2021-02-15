class Form {
    constructor (){

        this.input = createInput("Enter Your Name")
        this.button = createButton("Confirm!")
        this.greeting = createElement("h3")
        this.reset = createButton ("Reset")

    }
    display(){
        var title = createElement("h1")
        title.html("Biker Game")
        title.position(250,50)

        this.input.position(300,20)
        this.button.position(200, 300)

        this.reset.position (400,500)

        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            playerCount++
            player.index = playerCount
            player.update()
            player.updateCount(playerCount)
            this.greeting.html ("Hello "+ player.name)
            this.greeting.position(300, 100)
        })

        this.reset.mousePressed (()=>{
            player.updateCount(0)
            game.update(0)
            database.ref("/").update({
                players: null,
                BikeAtEnd: 0
            })
        })

    }



    hide (){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }
}