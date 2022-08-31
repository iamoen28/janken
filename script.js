function getComputerChoice(){
    let janken = ["Rock", "Paper", "Scissor"];
    let random = Math.floor(Math.random()*3);
    return janken[random];
}

console.log(getComputerChoice());