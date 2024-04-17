$("document").ready(()=>{

    var escolhido = ""
    var score = 0

    $("#score-points").text(score)

    $("#button-rules").click(()=>{
        $("#modal-box").slideDown()
    })

    $("#close-modal").click(()=>{
        $("#modal-box").slideUp()
    })

    $(".paper").click(()=>{
        escolhido = "paper"
        game()
    })

    $(".rock").click(()=>{
        escolhido = "rock"
        game()
    })

    $(".scissors").click(()=>{
        escolhido = "scissors"
        game()
    })

    function gameRules(chosen, houseChosen){
        if(chosen == houseChosen){
            return "draw!"
        }else if(chosen == "paper" && houseChosen == "scissors" ){
            return "you lose"
        }else if(chosen == "paper" && houseChosen == "rock"){
            score ++
            return "you win"
            
        }else if(chosen == "scissors" && houseChosen == "rock"){
            return "you lose"
        }else if(chosen == "scissors" && houseChosen == "paper"){
            score ++
            return "you win"
        }else if(chosen == "rock" && houseChosen == "paper"){
            return "you lose"
        }else if(chosen == "rock" && houseChosen == "scissors"){
            score ++
            return "you win"
        }   
    }

    function game(){
        if(escolhido !=""){
            $("#game-options").slideUp(600, function() {
                $("#game-decision-box").slideDown(600)
                if(escolhido == "paper"){
                    $("#player-option").html('<div id="option-selected" class="paper"><img src="src/images/icon-paper.svg" alt=""></div>')
                }else if(escolhido == "scissors"){
                    $("#player-option").html('<div id="option-selected" class="scissors"><img src="src/images/icon-scissors.svg" alt=""></div>')
                }else if(escolhido == "rock"){
                    $("#player-option").html('<div id="option-selected" class="rock"><img src="src/images/icon-rock.svg" alt=""></div>')
                }

                var randomNumber = 1 + Math.floor(Math.random() * 3);
                var houseChosen = ""

                if(randomNumber == 1){
                    houseChosen = "paper"
                }else if(randomNumber == 2){
                    houseChosen = "scissors"
                }else if(randomNumber == 3){                    
                    houseChosen = "rock"
                }
                
                var showChosenHouse = setInterval(() => {
                    if(houseChosen == "paper"){
                        $("#house-option").html('<div class="op"><div id="option-selected" class="paper"><img src="src/images/icon-paper.svg" alt=""></div></div>')     
                    }else if(houseChosen == "scissors"){
                        $("#house-option").html('<div class="op"><div id="option-selected" class="scissors"><img src="src/images/icon-scissors.svg" alt=""></div></div>')
                    }else if(houseChosen == "rock"){
                        $("#house-option").html('<div class="op"><div id="option-selected" class="rock"><img src="src/images/icon-rock.svg" alt=""></div></div>')
                    }
                    $(".op").fadeIn()
                    $(".op").addClass("scale-animation");

                    setTimeout(() => {
                        $(".op").removeClass("bounce-animation");
                        $(".op").addClass("scale-back-animation");
                    }, 400);

                    var winner = gameRules(escolhido, houseChosen)

                    var showWinner = setInterval(()=>{
                        $("#decision-result").text(winner)
                        $(".game-decision-player:first-child").addClass("player-side");
                        $(".game-decision-player:last-child").addClass("house-side");                     
 
                        $("#game-decision-result").fadeIn(800)
                        $("#score-points").text(score)
                        clearInterval(showWinner)
                    },1100)

                    clearInterval(showChosenHouse)
                }, 800);     
                
            });

        }
    }

    $("#play-again").click(function() {
                    
        $("#game-decision-box").slideUp(600, () => {
            $("#game-options").slideDown(600);

            $("#game-decision-result").fadeOut(400, function() {
                $(".op").remove()
                $("#house-option").html("<div class='option'></div>")
    
            });
            $(".game-decision-player:first-child").removeClass("player-side");
            $(".game-decision-player:last-child").removeClass("house-side");            
    
        });



    });

})