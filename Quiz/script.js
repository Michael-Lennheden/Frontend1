const answerContainer = document.querySelector('.answers-container')
const questionContainer = document.querySelector('.question-container')
const btnStart = document.querySelector('.startBtn')
const scoreParagraph = document.querySelector('.score')
const roundParagraph = document.querySelector('.round')
const progressBarValue = document.querySelector('.progressBar')
const nextBtn = document.querySelector('.continueBtn')

let randomisedQuestions = undefined
let currentQuestion = undefined
let button = undefined
let interval = undefined
let score = 0
let round = 1
let isPaused = false

scoreParagraph.innerText = 'Score: ' + score
roundParagraph.innerText = 'Round: ' + round

btnStart.addEventListener('click', startQuiz)

function startQuiz() {
    console.log('Quiz started')
    if (questions.length === 0) {
        console.error('No questions available.')
        return
    }
    randomisedQuestions = questions.sort(() => Math.random() - 0.5)
    currentQuestion = 0
    setQuestion()
    btnStart.removeEventListener('click', startQuiz)
    btnStart.addEventListener('click', restart)
    btnStart.innerText = 'Restart'
}

function restart(){
    location.reload()
}

function setQuestion() {
    if (currentQuestion >= 0 && currentQuestion < randomisedQuestions.length) {
        DisplayQuestion(randomisedQuestions[currentQuestion])
        SetAnswers(randomisedQuestions[currentQuestion])
        clearInterval(interval)
        isPaused = false
        progressBar()
    } else {
        alert('Slut på frågor')
    }
    if (nextBtn !== undefined){
        nextBtn.hidden = true
    }
}

function DisplayQuestion(question) {
    questionContainer.innerText = question.question
}

function SetAnswers(question) {
    answerContainer.innerHTML = ''

    let answers = question.answers
    const btn = 'btn'
    for (let j = 0; j < answers.length; j++) {
        button = document.createElement('button')
        button.classList.add('answer')
        button.id = btn+j
        button.innerText = answers[j].text
        button.setAttribute('data-correct', answers[j].correct)
        button.addEventListener('click', handleAnswerClick)
        answerContainer.appendChild(button)
    }
}

function handleAnswerClick(event) {
    const selectedAnswer = event.target
    const isCorrect = selectedAnswer.dataset.correct === 'true'
    if (isCorrect) {
        selectedAnswer.classList.add('correct')
        scoreParagraph.innerText = 'Score: ' + ++score
    } else
    {
        selectedAnswer.classList.add('incorrect')
    }
    disableButtons()
    isPaused = true
    continueButton()
}

function progressBar(){
    let width = 100;
    interval = setInterval(function() {
        if(!isPaused){
            if (width <= 0) {
                clearInterval(interval);
            } else {
                width--;
                progressBarValue.style.width = width + '%';
            }
        }
        if (width <= 0){
            disableButtons()

            const btn = 'btn'
            let correctAnswer = undefined

            for(let i = 0; i<4; i++){
                let btnId = btn+i

                if (document.querySelector('#'+btnId).dataset.correct === 'true'){
                    correctAnswer = document.querySelector('#'+btnId)
                    correctAnswer.classList.add('correct')
                }
            }
            continueButton()
        }
    }, 50);
}

function disableButtons(){
    const btn = 'btn'
    for (let i = 0; i < 4; i++){
        let btnId = btn+i
        document.querySelector('#'+btnId).disabled = true
    }
}

function continueButton(){
    nextBtn.addEventListener('click', setQuestion)
    nextBtn.hidden = false
    currentQuestion++
    roundParagraph.innerText = 'Round: ' + ++round
}

const questions = [
    {
        question: 'Which planet is known as the "Red planet"?',
        answers:[
            { text: 'Mars', correct: true},
            { text: 'Saturn', correct: false},
            { text: 'Jupiter', correct: false},
            { text: 'Venus', correct: false}
        ]
    },
    {
        question: 'What is the capital city of Australia?',
        answers: [
            {text: 'Sydney', correct: false},
            {text: 'Melbourne', correct: false},
            {text: 'Canberra', correct: true},
            {text: 'Brisbane', correct: false}
        ]
    },
    {
        question: 'In which year did the Titanic sink?',
        answers: [
            {text: '1910',correct: false},
            {text: '1912', correct: true},
            {text: '1915', correct: false},
            {text: '1920', correct: false}
        ]
    },
    {
        question: 'Who wrote the play "Romeo and Juliet"?',
        answers: [
            {text: 'Charles Dickens', correct: false},
            {text: 'Jane Austen', correct: false},
            {text: 'Emily brontë', correct: false},
            {text: 'William Shakespeare', correct: true},
        ]
    },
    {
        question: 'What is the chemical symbol for gold?',
        answers: [
            {text: 'Gd', correct: false},
            {text: 'Au', correct: true},
            {text: 'Ag', correct: false},
            {text: 'Fe', correct: false}
        ]
    },
    {
        question: 'What is the largest mammal on Earth?',
        answers:[
            { text: 'Elephant', correct: false },
            { text: 'Blue Whale', correct: true },
            { text: 'Giraffe', correct: false },
            { text: 'Hippopotamus', correct: false }
        ]
    },
    {
        question: 'What is the capital city of France?',
        answers:[
            { text: 'Berlin', correct: false },
            { text: 'Madrid', correct: false },
            { text: 'Paris', correct: true },
            { text: 'Rome', correct: false }
        ]
    },
    {
        question: 'In which year did the United States declare its independence?',
        answers:[
            { text: '1776', correct: true },
            { text: '1789', correct: false },
            { text: '1800', correct: false },
            { text: '1820', correct: false }
        ]
    },
    {
        question: 'What is the largest ocean on Earth?',
        answers:[
            { text: 'Atlantic Ocean', correct: false },
            { text: 'Indian Ocean', correct: false },
            { text: 'Arctic Ocean', correct: false },
            { text: 'Pacific Ocean', correct: true }
        ]
    },
    {
        question: 'Who painted the Mona Lisa?',
        answers:[
            { text: 'Vincent van Gogh', correct: false },
            { text: 'Leonardo da Vinci', correct: true },
            { text: 'Pablo Picasso', correct: false },
            { text: 'Michelangelo', correct: false }
        ]
    },
    {
        question: 'What is the capital city of Japan?',
        answers:[
            { text: 'Seoul', correct: false },
            { text: 'Beijing', correct: false },
            { text: 'Tokyo', correct: true },
            { text: 'Bangkok', correct: false }
        ]
    }
]