// Array of questions
const questions = [
    {
        question: 'How can you get the total number of arguments passed to a function?',
        answers: {
            answer1: 'Using args.length property',
            answerCorrect: 'Using arguments.length property',
            answer3: 'Both of the above.',
            answer4: 'None of the above.',
        }
    },

    {
        question: 'Which of the following type of variable takes precedence over other if names are same?',
        answers: {
            answer1: ' global variable',
            answerCorrect: 'local variable',
            answer3: 'Both of the above.',
            answer4: 'None of the above.',
        }
    },

    {
        question: 'Which of the following code creates an object?',
        answers: {
            answer1: 'let book = Object();',
            answerCorrect: 'var book = new Object();',
            answer3: 'var book = new OBJECT();',
            answer4: 'var book = new Book();',
        }
    },

    {
        question: 'Which of the following function of Number object returns a string value version of the current number?',
        answers: {
            answerCorrect: 'toString()',
            answer2: 'toFixed()',
            answer3: 'toLocaleString()',
            answer4: 'toPrecision()',
        }
    },

    {
        question: 'Which of the following function of String object splits a String object into an array of strings by separating the string into substrings',
        answers: {
            answer1: 'slice()',
            answerCorrect: 'split()',
            answer3: 'replace()',
            answer4: 'search()',
        }
    },

    {
        question: 'Which of the following function of String object returns a string representing the specified object?',
        answers: {
            answer1: 'toLocaleUpperCase()',
            answer2: 'toUpperCase()',
            answerCorrect: 'toString()',
            answer4: 'substring()',
        }
    },

    {
        question: 'Which of the following function of String object causes a string to be displayed in the specified color as if it were in a <font color="color"> tag?',
        answers: {
            answer1: 'fixed()',
            answerCorrect: 'fontcolor()',
            answer3: 'blink()',
            answer4: 'bold()',
        }
    },

    {
        question: 'Which of the following function of Array object returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found?',
        answers: {
            answer1: 'indexOf()',
            answer2: 'join()',
            answerCorrect: 'lastIndexOf()',
            answer4: 'map()',
        }
    },

    {
        question: 'Which of the following function of Array object adds one or more elements to the front of an array and returns the new length of the array?',
        answers: {
            answerCorrect: 'unshift()',
            answer2: 'sort()',
            answer3: 'splice()',
            answer4: 'toString()',
        }
    },

    {
        question: 'Which of the following function of Array object adds one or more elements to the front of an array and returns the new length of the array?',
        answers: {
            answerCorrect: 'unshift()',
            answer2: 'sort()',
            answer3: 'splice()',
            answer4: 'toString()',
        }
    },
];
// Append question content to the first existing HTML element
let firstQuestion = document.getElementById('question-title');
firstQuestion.textContent = questions[0].question;
let firsDiv = document.getElementById('choices');
firsDiv.classList.add('questions');

for (const [key, value] of Object.entries(questions[0].answers)) {
    const button = document.createElement('button');
    button.textContent = value;
    button.setAttribute('data-type', 'answer');
    if (key === 'answerCorrect') {
        button.setAttribute('data-result', 'correct');
    }

    firsDiv.appendChild(button);
}

// Populate the DOM with all questions, excluding the first one
let parentElement = document.getElementById('questions');

function createElementsAndInsert() {

    for (let i = 1; i < questions.length; i++) {
        const div = document.createElement('div');
        div.classList.add('hide');
        div.setAttribute('data-type', 'question');


        const h2 = document.createElement('h2');
        h2.textContent = questions[i].question;

        const choicesDiv = document.createElement('div');
        choicesDiv.classList.add('choices');

        for (const [key, value] of Object.entries(questions[i].answers)) {
            const button = document.createElement('button');
            button.textContent = value;
            button.setAttribute('data-type', 'answer');
            if (key === 'answerCorrect') {
                button.setAttribute('data-result', 'correct');
            }

            choicesDiv.appendChild(button);
        }


        div.appendChild(h2);
        div.appendChild(choicesDiv);


        parentElement.insertAdjacentElement('afterend', div);

        parentElement = div;
    }
}

createElementsAndInsert();