//return random from rock paper and scissors --getcomputerchoice
function getComputerChoice(){
    let array = ["rock", "paper" , "scissors"]

    let random = Math.floor(Math.random()*array.length);
    let str = array[random];
    return str;

}
let computer = getComputerChoice();
let player = prompt("Enter choice: ").toLowerCase();

//function takes two parameters and returns who wins
function playRound(comp , player){
   
    if (comp == "rock" && player=="paper"){
        return "You win. Paper beats rock";
    }
    else if (comp == "paper" && player=="rock"){
        return "You lose. Paper beats rock";

    }
    else if (comp == "paper" && player=="scissors"){
        return "You win. Paper beats rock"


    }
    else if (comp == "scissors" && player=="paper"){
        return "You lose. Paper beats rock";


    }
    else if (comp == "scissors" && player=="rock"){
        return "You lose. Paper beats rock";


    }
    else if (comp == "rock" && player=="scissors"){
        return "You win. Paper beats rock"


    }
    else {
        return "tie";
    }
  


}
console.log(playRound(computer, player));
function game(){
    console.log(playRound(computer, player));
    console.log(playRound(computer, player));
    console.log(playRound(computer, player));

}

function score(comp , player ){
    if(comp > player){
        return 'You lose';
    }
    else if(player>comp){
        return 'You win';
    }
    else {
        return "It's a tie";
    }
  
}


game();








