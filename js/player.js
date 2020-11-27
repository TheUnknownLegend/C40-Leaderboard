class Player{
    constructor(){

        this.rank = 0;
        this.index = null;
        this.distance = 0;
        this.name = null;
    }   

    getCount(){
        var playerCountRef = db.ref('playerCount');
        
        playerCountRef.on("value",function(data){
            playerCount = data.val();
        });        
    }

    updateCount(count){
        db.ref('/').update({
            playerCount : count
        });
    }

    update(){
        var playerIndex = "players/player" + this.index;

        db.ref(playerIndex).set({
            name : this.name , 
            distance : this.distance,
            rank : this.rank 
        });
    }

    static getPlayerInfo(){
        var playerInfoRef = db.ref('players') ;
        playerInfoRef.on('value',(data) =>{
            allPlayers = data.val();
        })
    }

    getFinishedPlayers(){
        var finishedPlayersRef = db.ref('finishedPlayers') ;
        finishedPlayersRef.on('value',(data) =>{
            finishedPlayers = data.val();
        })
    }

    static updateFinishedPlayers(){
        db.ref('/').update({
            finishedPlayers : finishedPlayers + 1
        });

        this.rank += 1;

    }

}