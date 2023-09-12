//return random from rock paper and scissors --getcomputerchoice
function getComputerChoice(){
    let array = ["rock", "paper" , "scissors"]

    let random = Math.floor(Math.random()*array.length);
    let str = array[random];
    return str;

}

//function takes two parameters and returns who wins 
   //computer selection and player selection
   //conditionals to see who wins
//play five rounds -- game
//keep score of and declare who wins