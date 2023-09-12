//return random from rock paper and scissors --getcomputerchoice
function getComputerChoice(){
    let array = ["rock", "paper" , "scissors"]

    let random = Math.floor(Math.random()*array.length);
    let str = array[random];
    return str;

}
let compChoice = getComputerChoice();
let playerChoice = prompt("Enter choice: ");
let countPlayer = 0;
let countComp = 0;

//function takes two parameters and returns who wins
function output(comp , player){
   
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


}
function score(comp , player ){
    if(comp > player){
        console.log("Computer wins")
    }
    else if(comp < player){
        console.log("You win.")
    }
    else {
        console.log("It's a tie.")
    }
}
output(compChoice , playerChoice);
   //computer selection and player selection
   //conditionals to see who wins
//play five rounds -- game
//keep score of and declare who wins