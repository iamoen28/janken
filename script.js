function getComputerChoice(){
    let janken = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random()*3);
    return janken[random];
}

function getPlayerSelection(player,computer){
    let result;

    switch(player){
        case "Scissors":
            if(computer=="Rock"){
                result = "You LOSE! Rock beats Scissors";
            }else if(computer=="Paper"){
                result = "You WIN! Rock beats Scissors";
            }else{
                result = "It's a DRAW! Both Scissors";
            }
            break;
        case "Paper":
            if(computer=="Rock"){
                result = "You WIN! Paper beats Rock";
            }else if(computer=="Scissors"){
                result = "You LOSE! Scissors beats Paper";
            }else{
                result = "It's a DRAW! Both Paper";
            }
            break;
        case "Rock":
            if(computer=="Paper"){
                result = "You LOSE! Paper beats Rock";
            }else if(computer=="Scissors"){
                result = "You WIN! Rock beats Scissors";
            }else{
                result = "It's a DRAW! Both Rock";
            }
            break;
    }
    return result;
}


let player = prompt("Janken....");
let computer = getComputerChoice();

console.log(getPlayerSelection(player, computer));