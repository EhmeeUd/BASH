function check() {
    let c = 0;
    let q1 = document.quiz.question1.value;
    let q2 = document.quiz.question2.value;
    let q3 = document.quiz.question3.value;
    let q4 = document.quiz.question4.value;
    let q5 = document.quiz.question5.value;
    let game = document.getElementById("result");
    let quiz = document.getElementById("quiz");
    if (q1 == "HyperTextMarkUpLanguage") {c++}
    if (q2 == "HTML") {c++}
    if (q3 == "5") {c++}
    if (q4 == "Rarely") {c++}
    if (q5 == "Alex Iwobi") {c++}
    quiz.style.display = "none";
    
    if (c<=3) {
        game.textContent = "You only scored" + " " + c + " " + "You're quite Dumb!";
    } 
   
    else if (c > 3) {
        game.textContent = "You scored" + " " + c + " " + "You're the man!!";
    }
}

// let startButton = document.getElementById('start-btn');
// let questionContainerElement = document.getElementById('question-container')
// startButton.addEventListener('click', startQuiz)

// function startQuiz() {
//     startButton.classList.add('hide')
//     questionContainerElement.classList.remove('hide')
//     nextQuestion()
// }

// function nextQuestion() {

// }

// function selectAnswer() {

// }

// const questions = [
//     {
//         question: 'What does HTML stand for?',
//         answers: [
//             { text: 'hyperTextMarkUpLanguage', correct: true },
//             { text: 'hyperTextMultiLanguage', correct: false }
//         ]
//     }
// ]