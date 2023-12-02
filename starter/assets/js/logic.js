const allQuestions = document.querySelectorAll('[data-type*=question]');
const startScreen = document.getElementById('start-screen');
const endScreen = document.getElementById('end-screen');
const userInput = document.getElementById('initials');
const submitBtn = document.getElementById('submit');
const feedBack = document.getElementById('feedback');
const container = document.querySelector('.wrapper');
const timer = document.getElementById('time');
const correctAudio = new Audio('starter/assets/sfx/correct.wav');
const incorrectAudio = new Audio('starter/assets/sfx/incorrect.wav');
let currentQuestionIndex = 0;
let time;
let intervalId;


container.addEventListener('click', (e) => {
    if (e.target.id === 'start') {
        startScreen.classList.add('hide');
        time = 75;
        showQuestion(currentQuestionIndex);
        displayTime(time);
        clearInterval(intervalId);
        startTimer();
    };

    if (e.target.dataset.type === 'answer') {
        hideQuestion(currentQuestionIndex);

        if (currentQuestionIndex + 1 < allQuestions.length) {

            showQuestion(currentQuestionIndex + 1);
            currentQuestionIndex++;
        } else {
           
            clearInterval(intervalId);
            endScreen.classList.remove('hide');
        };

        if (e.target.dataset.result === 'correct') {
            showFeedback('Correct');
            correctAudio.play();
        } else if (e.target.dataset.type === 'answer') {
            showFeedback('Wrong');
            incorrectAudio.play();
            time -= 5;
            if (time >= 0) {
                displayTime(time);
            };
        };
    };
});

submitBtn.addEventListener('click', () => {
    const highscores = JSON.parse(localStorage.getItem('highscores')) || [];

    if (userInput.value) {
    const newScore = {
        initials: userInput.value,
        score: time
    };
        highscores.push(newScore);
        localStorage.setItem('highscores', JSON.stringify(highscores));
        endScreen.classList.add('hide');
        console.log(highscores);

        window.location.href = 'highscores.html';
    } else {
        alert('Error: Initials field cannot be empty.');
    }   
});


function hideQuestion(currentIndex) {
    allQuestions[currentIndex].classList.add('hide');
};

function showQuestion(currentIndex) {
    allQuestions[currentIndex].classList.remove('hide');
};

function displayTime(time) {
    timer.textContent = time;
};

function startTimer() {
    intervalId = setInterval(() => {
        time--;

        if (time < 0) {
            time = 0;
            displayTime(time);
            clearInterval(intervalId);
            endScreen.classList.remove('hide');
            hideQuestion(currentQuestionIndex);
        } else {
            displayTime(time);
        };
    }, 1000);
};


function showFeedback(string) {
    feedBack.classList.remove('hide');
    feedBack.textContent = string;
    setTimeout(() => {
        feedBack.classList.add('hide');
    }, 500);
};

