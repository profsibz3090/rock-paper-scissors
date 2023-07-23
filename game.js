let win = 0;
let lose = 0;
let tied = 0;
let round = 0;
let computerSelection = '';
let over = false;

function playAgain() {
    over = false;
    computerSelection = '';
    tied = 0;
    lose = 0;
    win = 0;
    round = 0;
    const path = './assets/mark.png';
    document.querySelector('#result').innerText = 'Choose your weapon';
    document.querySelector('#commentary').innerText = 'First to 5 points wins the game';
    document.querySelector('.left img').src = path;
    document.querySelector('.right img').src = path;
    document.querySelector('#player').innerText = `Player: ${win}`;
    document.querySelector('#computer').innerText = `Computer: ${lose}`;
    document.getElementById('reset-section').classList.toggle('is-show');   
}

let playerSelection = "rock";

function setUp() {
    document.querySelectorAll('div.container > img').forEach(img => {
        img.addEventListener('click', run)
    });
    document.getElementById('again').addEventListener('click', playAgain)
}

setUp();

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

function gameOver() {
    
    if(win >= 5 || lose >= 5){
     const winner = win > lose? 'you' : 'the computer';
     document.querySelector('#winner').innerText = `The winner is ${winner}`;
     document.querySelector('div.is-show').classList.toggle('is-show');          
     over = true;
    }
}

function run(event) {
   if(over){
    //  alert('zvavharwa')
     return;
    }
   playerSelection = event.target.id;
   computerSelection = getComputerChoice();
   const result = playRound(playerSelection, computerSelection);
   determineWinner(result)
   const parts = result.split('!');
   document.querySelector('#result').innerText = parts[0];
   document.querySelector('#commentary').innerText = parts[1];
   document.querySelector('.left img').src = determineImageToDisplay(playerSelection);
   document.querySelector('.right img').src = determineImageToDisplay(computerSelection);
   document.querySelector('#player').innerText = `Player: ${win}`;
   document.querySelector('#computer').innerText = `Computer: ${lose}`;
}

function determineImageToDisplay(imageName) {
    switch (imageName) {
        case 'rock':
            return './assets/rock.png';
        case 'scissors':
            return './assets/scissors.png';
        case 'paper':
            return './assets/paper.png';
        default:
            return './assets/rock.png';
    }
}

function determineWinner(result) {
    if(result.includes('You Win')) {
        win++;
    } else if(result.includes('You Lose')){
         lose++;
    } else if(result.includes('You Tied')) {
         tied++;
    }
    gameOver();
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
     return result;
}
