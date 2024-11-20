function getComputerChoice() {
    let rpsChoices = ['Rock', 'Paper', 'Scissors'];
    let computerChoice = rpsChoices[Math.floor(Math.random() * 3)]; // Fixed: Added Math.floor for a valid index
    return computerChoice;
}

function getResult(playerChoice, computerChoice) {
    let score;

    if (playerChoice === computerChoice) {
        score = 0;
    } else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
        score = 1;
    } else if (playerChoice === 'Paper' && computerChoice === 'Rock') {
        score = 1;
    } else if (playerChoice === 'Scissors' && computerChoice === 'Paper') { // Fixed: Corrected typo 'sScissors'
        score = 1;
    } else {
        score = -1;
    }

    return score;
}

function showResult(score, playerChoice, computerChoice) {
    let result = document.getElementById('result');
    switch (score) {
        case -1:
            result.innerText = 'You Lose!';
            break;
        case 0:
            result.innerText = 'Ohh! It\'s a draw!';
            break;
        case 1:
            result.innerText = 'You Win!';
            break;
    }

    let playerScore = document.getElementById('player-score'); // Fixed: Corrected 'palyerScore' typo
    let hands = document.getElementById('hands');
    playerScore.innerText = `${Number(playerScore.innerText || 0) + score}`; // Ensured score starts at 0 if empty
    hands.innerText = `👱 ${playerChoice} VS 🤖 ${computerChoice}`;
}

function onClickRPS(playerChoice) {
    const computerChoice = getComputerChoice();
    const score = getResult(playerChoice, computerChoice); // Fixed: Corrected 'compueterChoice' typo
    showResult(score, playerChoice, computerChoice); // Fixed: Added a missing comma between arguments
}

function playGame() {
    let rpsButtons = document.querySelectorAll('.rpsButton');
    rpsButtons.forEach(rpsButton => {
        rpsButton.onclick = () => onClickRPS(rpsButton.value); // Pass value to the function
    });

    let endGameButton = document.getElementById('endGameButton');
    endGameButton.onclick = () => endGame();
}

function endGame() {
    let playerScore = document.getElementById('player-score');
    let hands = document.getElementById('hands'); // Fixed: Corrected 'Hands' to 'hands'
    let result = document.getElementById('result');
    playerScore.innerText = '0'; // Reset score to 0
    hands.innerText = '';
    result.innerText = '';
}

playGame();
