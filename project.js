//return random from rock paper and scissors --getcomputerchoice
function getComputerChoice(){
    let array = ["rock", "paper" , "scissors"]

    let random = Math.floor(Math.random()*array.length);
    let str = array[random];
    return str;

}

//function takes two parameters and returns who wins
function output(comp , player, countComp , countPlayer){
   
    if (comp == "rock" && player=="paper"){
        console.log("You win. Paper beats rock");
        countPlayer += 1;
    }
    else if (comp == "paper" && player=="rock"){
        console.log("You lose. Paper beats rock");
        countComp+= 1;

    }
    else if (comp == "paper" && player=="scissors"){
        console.log("You win. scissors beats paper");
        countPlayer += 1;

    }
    else if (comp == "scissors" && player=="paper"){
        console.log("You lose. scissors beats paper");
        countComp+= 1;

    }
    else if (comp == "scissors" && player=="rock"){
        console.log("You lose. scissors beats rock");
        countComp+= 1;

    }
    else if (comp == "rock" && player=="scissors"){
        console.log("You win. scissors beats rock");
        countPlayer += 1;

    }
    else {
        console.log("tie");
    }
    console.log(`Player: ${player}`);
    console.log(`Computer: ${comp}`);
    return [countComp, countPlayer];


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
function game(){
}
function playRound(){
    let compChoice = getComputerChoice();
    let playerChoice = prompt("Enter choice: ");
    let countPlayer = 0;
    let countComp = 0;
    let [z ,w] = output(compChoice , playerChoice , countComp , countPlayer);
    let y = score(z,w);
    return y;


}
//let count= 0;
let count = playRound();
console.log(`Score: ${count}`);







//play five rounds -- game

//keep score of and declare who wins