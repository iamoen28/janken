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

// function game(){


//     // rockButton.onclick = click_result;
//     // scissorsButton.onclick = click_result;
//     // paperButton.onclick = click_result;

// }

// game();

const click_result = function(clicked_id){
    let comp_score = Number(document.getElementById("compScore").innerHTML);
    let you_score = Number(document.getElementById("youScore").innerHTML);
    
    let res = playRound(clicked_id.toString(), getComputerChoice());
    
    if(res.includes("WIN")){
        you_score++;
        document.getElementById("youScore").innerHTML = you_score;
    }else if(res.includes("LOSE")){
        comp_score++;
        document.getElementById("compScore").innerHTML = comp_score;
    }

    document.getElementById("matchResult").innerHTML = res;
    let resultPanel = document.getElementById("choices");
    const retry = document.createElement('button');
    retry.innerHTML = "Retry";
    retry.onclick = () => window.location.reload();
    if (comp_score == 5) {
        resultPanel.innerHTML = "You LOSE!";
        resultPanel.appendChild(retry);

    }else if(you_score ==5){
        resultPanel.innerHTML = "You WIN!";
        resultPanel.appendChild(retry);
    }
}