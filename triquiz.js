const quizForm = document.querySelector('.quiz-form')
const submitAnswerBtn = document.querySelector('#submit-answer-btn')
const outputEL = document.querySelector('#output')


const correctAnswers = ['90', 'right']

function calculateScores() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm)
    for (let value of formResults.values()){
        if (value == correctAnswers[index]){
            score=score+1;
            
        }
        index=index+1;
    }
    outputEL.innerHTML = "<h3>Your score is </h3>"+score;

}

submitAnswerBtn.addEventListener('click',calculateScores)