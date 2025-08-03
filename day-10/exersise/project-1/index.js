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
    // console.log(event);
    if (event.key == 'p') {
        playGame('Paper');
    }
    else if (event.key == 'r') {
        playGame('Rock');
    }
    else if (event.key == 's') {
        playGame('Scissors');
    }
    else if (event.key == 'a') {
        autoPlay();
    }
    else if (event.key == 'Backspace') {
        event.preventDefault();
        dialogBox()
    }

});


function playGame(playerMove) {
    ComputerMove = getComputerMove();

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
        return 'Rock';
    } else if (RandomNumber >= 1 / 3 && RandomNumber < 2 / 3) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function resetGame(isWant) {
    if (isWant) {
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        localStorage.setItem('score', JSON.stringify(score));
        updateScore();

    }
    document.querySelector('.dialog-box').classList.add('hidden');
}

function dialogBox() {
    document.querySelector('.dialog-box').classList.remove('hidden');

}
document.querySelector('.js-reset-btn').
    addEventListener('click', () => {
        dialogBox()
    })


function updateScore() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

document.querySelector('.auto-play-js').
    addEventListener('click', () => {
        autoPlay();
    })

let isAutoPlay = false;
let intervalId;

function autoPlay() {


    if (!isAutoPlay) {

        document.querySelector('.auto-play-js').innerHTML = "Stop Playing";

        intervalId = setInterval(() => {
            let autoPlayermove = getComputerMove();
            playGame(autoPlayermove);
        }, 1000);
        isAutoPlay = true;

    }
    else {
        clearInterval(intervalId);
        isAutoPlay = false;
        document.querySelector('.auto-play-js').innerHTML = "Auto Play";
    }

}