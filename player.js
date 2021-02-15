class Player {

    constructor () {

        this.name = null;
        this.distance = null;   
        this.rank = null;     
        this.index = null;

    }

    getCount (){
            
        var playerCountRef = database.ref("playerCount")
        playerCountRef.on("value", (data)=>{
            playerCount = data.val()
        })
    }

    updateCount (count){
        database.ref("/").update({
            playerCount: count
        })
    }

    update (){
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance
        })
    }

    static getPlayerInfo (){
        var playerInfo = database.ref("players")
        playerInfo.on("value", (data)=>{
            allPlayers = data.val()
        })
    }

    getBikeAtEnd (){
        database.ref("BikeAtEnd").on("value", (data)=>{
            this.rank = data.val()
        })
    }

    static updateBikeAtEnd (rank){
        database.ref("/").update({
            BikeAtEnd: rank
        })
    }
}