//console.log random from rock paper and scissors --getcomputerchoice
function getComputerChoice(){
    let array = ["rock", "paper" , "scissors"];

    let random = Math.floor(Math.random()*array.length);
    let str = array[random];
    return str;

}


//function takes two parameters and console.logs who wins
function playRound(){
    let comp = getComputerChoice();
    let player = prompt("Enter choice: ").toLowerCase();
    let compCount = 0;
    let playerCount = 0;
   
    if (comp == "rock" && player=="paper"){
        playerCount += 1;
        console.log ("You win. Paper beats rock");
    }
    else if (comp == "paper" && player=="rock"){
        compCount += 1;
        console.log ("You lose. Paper beats rock");

    }
    else if (comp == "paper" && player=="scissors"){
        playerCount += 1;

        console.log ("You win. Paper beats rock");



    }
    else if (comp == "scissors" && player=="paper"){
        compCount += 1;

        console.log ("You lose. Paper beats rock");



    }
    else if (comp == "scissors" && player=="rock"){
        compCount += 1;

        console.log ("You lose. Paper beats rock");



    }
    else if (comp == "rock" && player=="scissors"){
        playerCount += 1;

        console.log ("You win. Paper beats rock");



    }
    else {
        console.log ("tie");
    }
    return [compCount , playerCount];
    


}
function storePlayerCount( playerCount){
    return playerCount;

}
function storeComCount(compCount){
    return compCount;
}
let i = 0;

function game(){
    for(let i = 0; i < 3 ; i++){
        
        let [x,y] = playRound();
        
        
        console.log(score(x , y));



    }  
}

function score(comp , player ){
    if(comp > player){
        console.log ('You lose');
    }
    else if(player>comp){
        console.log ('You win');
    }
    else {
        console.log ("It's a tie");
    }
}


game();








