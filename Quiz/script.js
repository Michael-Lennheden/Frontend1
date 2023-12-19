const answerContainer = document.querySelector('.answers-container')
const questionContainer = document.querySelector('.question-container')
const btnStart = document.querySelector('.startBtn')
const scoreParagraph = document.querySelector('.score')
const roundParagraph = document.querySelector('.round')
let randomisedQuestions = undefined
let currentQuestion = undefined

let score = 0
let round = 1
scoreParagraph.innerText = 'Score: ' + score
roundParagraph.innerText = 'Round: ' + round

btnStart.addEventListener('click', startQuiz)

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
    }
]

function startQuiz() {
    console.log('Quiz started')
    if (questions.length === 0) {
        console.error('No questions available.')
        return
    }

    randomisedQuestions = questions.sort(() => Math.random() - 0.5)
    currentQuestion = 0
    setQuestion()
}

function setQuestion() {
    if (currentQuestion >= 0 && currentQuestion < randomisedQuestions.length) {
        DisplayQuestion(randomisedQuestions[currentQuestion])
        SetAnswers(randomisedQuestions[currentQuestion])
    } else {
        console.error('Invalid question index.')
    }
}
function DisplayQuestion(question) {
    questionContainer.innerText = question.question
}
function SetAnswers(question) {
    answerContainer.innerHTML = ''

    let answers = question.answers
    for (let j = 0; j < answers.length; j++) {
        const button = document.createElement('button')
        button.classList.add('answer')
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
    } else {
        selectedAnswer.classList.add('incorrect')
    }

    setTimeout(() => {
        currentQuestion++
        roundParagraph.innerText = 'Round: ' + ++round
        setQuestion()
    }, 5000)
}