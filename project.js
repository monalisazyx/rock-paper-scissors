//console.log random from rock paper and scissors --getcomputerchoice
function getComputerChoice(){
    let array = ["rock", "paper" , "scissors"];

    let random = Math.floor(Math.random()*array.length);
    let str = array[random];
    return str;

}


//function takes two parameters and console.logs who wins
//updates scores of player and computer based on who won
function playRound(){
    let comp = getComputerChoice();
    let player = prompt("Enter choice: ").toLowerCase();
    let countPlayer = 0;
    let countComp = 0;
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
    return [countComp , countPlayer];
   
    



   
    


}

let i = 0;
let compFinal = 0;
let playerFinal = 0;
  
//}

//compare and decide who wins the round
function score(comp , player ){
    let winnerPlayer = 0;
    let winnerComp = 0;
    if(comp > player){
        winnerComp += 1;
    }
    else if(player>comp){
        winnerPlayer += 1;
    }
    else {
        winnerPlayer += 0;
        winnerComp += 0;
    }
    return [winnerComp, winnerPlayer];

}

//calculate scores from all rounds and declare winner
function game(){
    //for(let i = 0; i < 3 ; i++){
        
        let [x,y] = playRound();
        console.log(`player score ${y} , computer score ${x}`);
        let [winnerComp, winnerPlayer] = score(x , y);
        let compWin , playerWin;
        [compWin, playerWin] = [winnerComp, winnerPlayer];
        //[winnerComp , winnerPlayer] = [compWin , playerWin] ;
        if(compWin > playerWin){
            compFinal += 1;
        
        }
        else if (playerWin > compWin ){
            playerFinal += 1;
        }
        else {
            return "equal scores";
        }
        return [compFinal , playerFinal];



    }

game();
game();
game();
game();
game();


let x;
let y;
[x,y ]= [compFinal , playerFinal];
console.log(`player final score : ${y}`);
console.log(`computer final score : ${x}`);
win(x , y);

function win(comp , player){
    if(comp > player){
        console.warn("Computer wins")
    }
    else if(player > comp){
        console.warn("You win")
    }
    else {
        console.warn("It's a tie")
    }
}






