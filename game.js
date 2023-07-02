let win = 0;
let lose = 0;
let tied = 0;
let round = 0;

document.querySelector('#rock').addEventListener('click', ()=> playRound('rock', getComputerChoice()));
document.querySelector('#paper').addEventListener('click', ()=> playRound('paper', getComputerChoice()));
document.querySelector('#scissors').addEventListener('click', ()=> playRound('scissors', getComputerChoice()));

const resultDisplayElement = document.createElement('p');
const scoreDisplayElement = document.createElement('p');

function getComputerChoice() {
    const rand = (Math.random() * 10);
    let move;
    if(rand<3) {
       move = "rock";
    } else if(rand >=3 && rand <6) {
      move = "paper";
    } else if(rand >=6) {
      move = "scissors";
    }

    return move;
}



function gameFinished() {
    scoreDisplayElement.innerText = tied === 5? `you tied with ${win} win/wins ${lose} lose/loses and ${tied} ties`  :win > lose? 
    `you are the overall winner with ${win} win/wins ${lose} lose/loses and ${tied} ties`
  : `computer is the overall winner with ${win} win/wins ${lose} lose/loses and ${tied} ties`;
    lose = 0;
   win = 0;
   tied = 0;
   round = 0;
   resultDisplayElement.innerText = "";
   document.querySelector('.results').appendChild(scoreDisplayElement);
}

function playRound(playerSelection, computerSelection) {
    let result;
    if(playerSelection.toLowerCase() === "rock") {
        if(computerSelection === "rock") {
           result = "You Tied! Rock equals Rock";
        } else if(computerSelection === "paper") {
            result = "You Lose! Paper beats Rock";
         } else if(computerSelection === "scissors") {
            result = "You Win! Rock beats Scissors";
         }
    } else if(playerSelection.toLowerCase() === "paper") {
        if(computerSelection === "rock") {
            result = "You Win! Paper beats Rock";
         } else if(computerSelection === "paper") {
             result = "You Tied! Paper equals Paper";
          } else if(computerSelection === "scissors") {
             result = "You Lose! Scissors beats Paper";
          }
    } else if(playerSelection.toLowerCase() === "scissors") {
        if(computerSelection === "rock") {
            result = "You Lose! Rock beats Scissors";
         } else if(computerSelection === "paper") {
             result = "You Win! Scissors beats Paper";
          } else if(computerSelection === "scissors") {
             result = "You Tied! Scissors equals Scissors";
          }
    }
    round++;
    round === 5 && gameFinished();  
    // determineWinner(result);
    if(result.includes('You Win')) {
        win++;
     } else if(result.includes('You Lose')){
         lose++;
     } else if(result.includes('You Tied')) {
         tied++;
     }
    resultDisplayElement.innerText = result;
    document.querySelector('.results').appendChild(resultDisplayElement);
    return result;
}

function game() {
    // let win = 0;
    // let lose = 0;
    // let tied = 0;
    for (let index = 0; index < 5; index++) {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("pick a move(rock, paper, scissors)", "rock");
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if(result.includes('You Win')) {
            win++;
         } else if(result.includes('You Lose')){
             lose++;
         } else if(result.includes('You Tied')) {
             tied++;
         }
    }
    return tied === 5? `you tied with ${win} win/wins ${lose} lose/loses and ${tied} ties`  :win > lose? 
                        `you are the overall winner with ${win} win/wins ${lose} lose/loses and ${tied} ties`
                      : `computer is the overall winner with ${win} win/wins ${lose} lose/loses and ${tied} ties`;
}


function determineWinner(result) {

    if(result.includes('you win')) {
       win++;
    } else if(result.includes('you lose')){
        lose++;
    } else if(result.includes('you tied')) {
        tied++;
    }
}
