function getComputerChoice(){
    let janken = ["ROCK", "PAPER", "SCISSORS"];
    let random = Math.floor(Math.random()*3);
    return janken[random];
}

function playRound(player,computer){
    let result;

    switch(player.toUpperCase()){
        case "SCISSORS":
            if(computer=="ROCK"){
                result = "You LOSE! Rock beats Scissors";
            }else if(computer=="PAPER"){
                result = "You WIN! Scissors beats Paper";
            }else{
                result = "It's a DRAW! Both Scissors";
            }
            break;
        case "PAPER":
            if(computer=="ROCK"){
                result = "You WIN! Paper beats Rock";
            }else if(computer=="SCISSORS"){
                result = "You LOSE! Scissors beats Paper";
            }else{
                result = "It's a DRAW! Both Paper";
            }
            break;
        case "ROCK":
            if(computer=="PAPER"){
                result = "You LOSE! Paper beats Rock";
            }else if(computer=="SCISSORS"){
                result = "You WIN! Rock beats Scissors";
            }else{
                result = "It's a DRAW! Both Rock";
            }
            break;
        default:
            result = "Ooops that's Invalid";
            break;
    }
    return result;
}

function game(){
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Janken....");
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
    }
}

game();