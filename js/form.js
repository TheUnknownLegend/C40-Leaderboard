class Form{
    constructor(){
        
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement('h3');
        this.reset = createButton("Dont_press");
    }
    
    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(displayWidth/2 - 50,0);

        this.reset.position( 10, height - 20)
        this.input.position (displayWidth/2 - 40 ,displayHeight/2 - 80 );
        this.button.position(displayWidth/2 + 30, displayHeight/2);

        this.button.mousePressed(() =>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();

            playerCount += 1;

            player.index = playerCount
            player.update();

            player.updateCount(playerCount);

            this.greeting.html("Hello " + player.name);
            
            this.greeting.position(displayWidth/2 - 70 , displayHeight/4 );
        });
        
        this.reset.mousePressed(() =>{
            db.ref('/').update({
                playerCount : 0 ,
                gameState : 0 ,
                finishedPlayers : 0 ,
                players : null
            })


        })

    }

    hideForm(){
        this.button.hide();
        this.input.hide();
        this.greeting.hide();
    }
}
