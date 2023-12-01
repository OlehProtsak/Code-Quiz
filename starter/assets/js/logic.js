const allQuestions = document.querySelectorAll('[data-type*=question]');
const startScreen = document.getElementById('start-screen');
const endScreen = document.getElementById('end-screen');
const container = document.querySelector('.wrapper');
const timer = document.getElementById('time');
let currentQuestionIndex = 0;
let time;


container.addEventListener('click', (e) => {
    if (e.target.id === 'start') {
        startScreen.classList.add('hide');
        showQuestion(currentQuestionIndex);
        time = 75;
        timer.textContent = time;
    }
    if (e.target.dataset.result === 'correct') {
        hideQuestion(currentQuestionIndex);
        showQuestion(currentQuestionIndex + 1);
        currentQuestionIndex++;
        alert('correct');
    } else if (e.target.dataset.type === 'answer') {
        hideQuestion(currentQuestionIndex);
        showQuestion(currentQuestionIndex + 1);
        currentQuestionIndex++;
        time -= 5;
        displayTime(time);
    }
    
});

function hideQuestion(currentIndex) {
    allQuestions[currentIndex].classList.add('hide');
};

function showQuestion(currentIndex) {
    allQuestions[currentIndex].classList.remove('hide');
}

function displayTime(time) {
    timer.textContent = time;
}
