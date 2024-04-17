$("document").ready(()=>{

    var escolhido = ""

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
            return "empate"
        }else if(chosen == "paper" && houseChosen == "scissors" ){
            return "perdeu"
        }else if(chosen == "paper" && houseChosen == "rock"){
            return "venceu"
        }else if(chosen == "scissors" && houseChosen == "rock"){
            return "perdeu"
        }else if(chosen == "scissors" && houseChosen == "paper"){
            return "venceu"
        }else if(chosen == "rock" && houseChosen == "paper"){
            return "perdeu"
        }else if(chosen == "rock" && houseChosen == "scissors"){
            return "venceu"
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
                    }, 500);
                    clearInterval(showChosenHouse)
                }, 800);

                


                console.log(gameRules(escolhido, houseChosen))

                
            });
        }
    }

})