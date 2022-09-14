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
    const container = document.createElement('div');
    const rockButton = document.createElement('button');
    const scissorsButton = document.createElement('button');
    const paperButton = document.createElement('button');
    const result = document.createElement('div');
    
    document.body.appendChild(container);
    container.appendChild(rockButton);
    container.appendChild(scissorsButton);
    container.appendChild(paperButton);
    document.body.appendChild(result);
    
    rockButton.id = "rock";
    scissorsButton.id = "scissors";
    paperButton.id = "paper";
    result.id = "scoreboard";

    rockButton.innerHTML = "Rock";
    scissorsButton.innerHTML = "Scissors";
    paperButton.innerHTML = "Paper";

    let r = document.getElementById("rock").innerHTML;
    let s = document.getElementById("scissors").innerHTML;
    let p = document.getElementById("paper").innerHTML;
    
    const click_result = function(){
        let score_ = [0,0];
        let res = playRound(this.id, getComputerChoice());
        
        if(res.includes("WIN")){
            score_[0]++;
        }else if(res.includes("LOSE")){
            score_[1]++;
        }
        result.innerHTML = res + " " + score_[0] + " - " + score_[1];
    }

    rockButton.onclick = click_result;
    scissorsButton.onclick = click_result;
    paperButton.onclick = click_result;

}

game();