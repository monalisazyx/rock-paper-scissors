//console.log random from rock paper and scissors --getcomputerchoice
function getComputerChoice(){
    let array = ["rock", "paper" , "scissors"];

    let random = Math.floor(Math.random()*array.length);
    let str = array[random];
    return str;

}

let div = document.querySelector('#display');
let countComp = document.querySelector('#comp');
let countPlayer = document.querySelector('#player');
let divContent = '';


div.textContent = '';
//function takes two parameters and console.logs who wins
//updates scores of player and computer based on who won
function playRound(player) {
    let comp = getComputerChoice();
    let countPlayer = 0;
    let countComp = 0;

    if (comp == "rock" && player == "paper") {
        let text1 = document.createElement('p');
        text1.textContent = "You win. Paper beats rock";
        div.appendChild(text1);
        countPlayer += 1;
    } else if (comp == "paper" && player == "rock") {
        let text2 = document.createElement('p');
        text2.textContent = "You lose. Paper beats rock";
        div.appendChild(text2);
        countComp += 1;
    } else if (comp == "paper" && player == "scissors") {
        let text3 = document.createElement('p');
        text3.textContent = "You win. Scissors beats paper";
        div.appendChild(text3);
        countPlayer += 1;
    } else if (comp == "scissors" && player == "paper") {
        let text4 = document.createElement('p');
        text4.textContent = "You lose. Scissors beats paper";
        div.appendChild(text4);
        countComp += 1;
    } else if (comp == "scissors" && player == "rock") {
        let text5 = document.createElement('p');
        text5.textContent = "You lose. Scissors beats rock";
        div.appendChild(text5);
        countComp += 1;
    } else if (comp == "rock" && player == "scissors") {
        let text6 = document.createElement('p');
        text6.textContent = "You win. Scissors beats rock";
        div.appendChild(text6);
        countPlayer += 1;
    } else {
        let text7 = document.createElement('p');
        text7.textContent = "It's a tie";
        div.appendChild(text7);
    }

    return [countComp, countPlayer];
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
function game(player){
    //for(let i = 0; i < 3 ; i++){
        
        let [x,y] = playRound(player);
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






let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let cont = document.querySelector('#contain');
let click = 0;

rock.addEventListener('click', () => {
    game('rock');
    click += 1;

});
paper.addEventListener('click', () => {
    game('paper');
    click += 1;


});
scissors.addEventListener('click', () => {
    game('scissors');
    click += 1;


});


cont.addEventListener('click', () => {
    for(let i = click; i == 5; i++){
        let x;
        let y;
        [x,y ]= [compFinal, playerFinal];
        let pla = document.querySelector('#player');
        pla.classList.add('winner');
        let com = document.querySelector('#comp');
        com.classList.add('winner');


        pla.textContent= `${y}`;
        com.textContent= `${x}`;
        
        click = 0;

        win(x , y);

    }
    
        

    
})







function win(comp , player){
    
      if(comp > player){
        let o = document.createElement('p');
        o.textContent = "Computer wins";
        o.classList.add('final');

        div.appendChild(o);
     }
      else if(player > comp){
        let m = document.createElement('p');
        m.textContent = "You win";
        m.classList.add('final');

        div.appendChild(m);
        
     }
      else {
        let r = document.createElement('p');
        r.textContent = "It's a tie";
        r.classList.add('final');

        div.appendChild(r);
     }
}


