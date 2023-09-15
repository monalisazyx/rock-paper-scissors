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


function score(comp , player ){
    let winnerPlayer = true;
    let winnerComp = true;
    if(comp > player){
        winnerComp = true;
    }
    else if(player>comp){
        winnerPlayer = true;
    }
    else {
        winnerPlayer = false;
        winnerComp = false;
    }
    return [winnerComp, winnerPlayer];

}

function game(){
    //for(let i = 0; i < 3 ; i++){
        
        let [x,y] = playRound();
        console.log(`player score ${y} , computer score ${x}`);
        let z = score(x , y);
        let compWin , playerWin;
        [winnerComp , winnerPlayer] = [compWin , playerWin] ;
        if(compWin === false && playerWin === true){
            playerFinal += 1;
        
        }
        else if (playerWin !== true && compWin === true ){
            compFinal += 1;
        }
        else {
            return "equal scores";
        }
        return [compFinal , playerFinal];



    }

game();
game();

let x;
let y;
[x,y ]= [compFinal , playerFinal];
console.log(`player final score : ${y}`);
console.log(`computer final score : ${x}`);







