class Game{
    constructor(){

    }

    getState(){
        var gameStateRef = db.ref('gameState');

        gameStateRef.on("value",function(data){
            gameState = data.val();
        });
    }

    update(state){
        db.ref ('/').update({
            gameState:state
        })
    }

    async start(){
        if(gameState === 0){
            player = new Player();
            var playerCountRef = await db.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();

            }

            player.getCount();
            
            form = new Form();
            form.display();
        }

        car1 = createSprite(350 ,200 );
        car2 = createSprite(550 ,200 );
        car3 = createSprite(750 ,200 );
        car4 = createSprite(950 ,200 );

        cars = [car1 , car2 ,car3 , car4];

        car1.addImage(car1Img);       
        car2.addImage(car2Img);
        car3.addImage(car3Img);
        car4.addImage(car4Img);

        passedFinish = false;
    }

    play(){
        form.hideForm();

        image(track ,0 , -displayHeight*4 , displayWidth , displayHeight * 5);



        textSize(22);
        text("Game Start",120,100);

        Player.getPlayerInfo();

        if(allPlayers != undefined){
            var displayPos = 130;

            var index = 0;

            var x = 250;
            var y;

            for (var plr in allPlayers){
                index = index + 1;

                y = displayHeight - allPlayers[plr].distance;

                x = x + 250;

                cars[index - 1].x = x;

                cars[index - 1].y = y;

                if(plr === "player" + player.index){
                    fill("red");
                    console.log("hello");

                    ellipse(cars[index - 1].x , y , 60, 60);

                    camera.position.x = displayWidth/2;

                    camera.position.y = cars[index - 1].y;

                }
                    textAlign(CENTER);
                    text(allPlayers[plr].name , cars[index - 1],y + 100);
            }

        }

        if (keyIsDown(UP_ARROW) && player.index != null && passedFinish === false){
            player.distance += 50;
            player.update();
        }

        if(player.distance > 5050 && passedFinish === false){
            Player.updateFinishedPlayers();
            player.rank = finishedPlayers;
            player.update();

            passedFinish = true;
        }

          drawSprites();

    }

    displayRanks(){
        textSize(34)
        text("Game Ended No prize for you players",camera.position.x , camera.position.y);
        console.log("hall0");
    }
}