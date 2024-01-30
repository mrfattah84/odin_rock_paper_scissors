function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*3);
    if (computerChoice === 0) {
        return 'Rock'
    } else if (computerChoice === 1) {
        return 'Paper'
    } else if (computerChoice === 2) {
        return 'Scissors'
    }
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'Paper') {
        return "You Lose!"
    } else if (playerSelection == 'rock' && computerSelection == 'Scissors') {
        return "You won!"
    } else if (playerSelection == 'rock' && computerSelection == 'Rock') {
        return "Tie!"
    } else if (playerSelection == 'paper' && computerSelection == 'Scissors') {
        return "You lose!"
    } else if (playerSelection == 'paper' && computerSelection == 'Rock') {
        return "You won!"
    } else if (playerSelection == 'paper' && computerSelection == 'Paper') {
        return "Tie!"
    } else if (playerSelection == 'scissors' && computerSelection == 'Paper') {
        return "You won!"
    } else if (playerSelection == 'scissors' && computerSelection == 'Rock') {
        return "You lose!"
    } else if (playerSelection == 'scissors' && computerSelection == 'Scissors') {
        return "Tie!"
    } 
}

function game(){
    let playerSelection = this.getAttribute('id');
    let computerSelection = getComputerChoice();
    let res = playRound(playerSelection, computerSelection);
    console.log("Computer selection: ", computerSelection);
    console.log("Player selection: ", playerSelection);
    console.log(res)
    if(res === 'You won!'){
        console.log('you won!')
        document.querySelector('.yourResult').innerHTML = Number(document.querySelector('.yourResult').innerHTML) + 1
    } else if(res === 'You lose!'){
        console.log('You lose!')
        document.querySelector('.computerResult').innerHTML = Number(document.querySelector('.computerResult').innerHTML) + 1
    } else {
        console.log('tie!')
        document.querySelector('.yourResult').innerHTML = Number(document.querySelector('.yourResult').innerHTML) + 1
        document.querySelector('.computerResult').innerHTML = Number(document.querySelector('.computerResult').innerHTML) + 1
    }
}

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

rock.addEventListener('click', game);
paper.addEventListener('click', game);
scissors.addEventListener('click', game);