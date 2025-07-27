const score = JSON.parse(localStorage.getItem('score'));
updateScore();



let ComputerMove = '';
// Generate a random number between 0 and 1
// 0-1/3 = Rock
// 1/3-2/3 = Paper
// 2/3-1 = Scissors
document.querySelector('.rock-btn')
    .addEventListener('click', () => {
        playGame('Rock');
    });

document.querySelector('.paper-btn')
    .addEventListener('click', () => {
        playGame('Paper');
    });

document.querySelector('.scissors-btn')
    .addEventListener('click', () => {
        playGame('Scissors')
    })

//add keydown features if i am tap p for play paper same as rock and scissors also
document.body.addEventListener('keydown', (event) => {
    if (event.key == 'p') {
        playGame('Paper');
    }
    else if (event.key == 'r') {
        playGame('Rock');
    }
    else if (event.key == 's') {
        playGame('Scissors');
    }
});


function playGame(playerMove) {
    getComputerMove();

    let result = '';

    if (ComputerMove === playerMove) {
        result = 'Tie.';
        score.ties++;
    }
    else if ((ComputerMove === 'Rock' && playerMove === 'Paper') ||
        (ComputerMove === 'Paper' && playerMove === 'Scissors') ||
        (ComputerMove === 'Scissors' && playerMove === 'Rock')) {
        result = 'You win!';
        score.wins++;
    }
    else {
        result = 'You lose!';
        score.losses++;
    }

    localStorage.setItem('score', JSON.stringify(score));
    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `You
        <img src="./image/${playerMove}-emoji.png" class="img-icon">
        <img src="./image/${ComputerMove}-emoji.png" class="img-icon">
        Computer`

    updateScore();
}


function getComputerMove() {
    RandomNumber = Math.random();
    if (RandomNumber >= 0 && RandomNumber < 1 / 3) {
        ComputerMove = 'Rock';
    } else if (RandomNumber >= 1 / 3 && RandomNumber < 2 / 3) {
        ComputerMove = 'Paper';
    } else {
        ComputerMove = 'Scissors';
    }
}

function resetGame() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.setItem('score', JSON.stringify(score));
    updateScore();
}
function updateScore() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function autoPlay() {

}