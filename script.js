document.addEventListener('DOMContentLoaded', () => {

    const startBtn = document.getElementById('start-btn');
    const nextBtn = document.getElementById('next-btn');
    const restartBtn = document.getElementById('restart-btn');
    const quizContainer = document.getElementById('quiz-container');
    const questionContainer = document.getElementById('question-container');
    const questionText = document.getElementById('question-text');
    const choicesList = document.getElementById('choices-list');
    const resultContainer = document.getElementById('result-container');
    const scoreDisplay = document.getElementById('score');


    const questions = [
    {
        question: "What is capital of France?",
        choices: ["Paris","London","Berlin","Saturn"],
        answer: "Paris"
    },
    {
        question: "What planet is known as the Red Planet?",
        choices: ["Mars","Venus","Jupiter","Saturn"],
        answer: "Mars"
    },
    {
        question: "Who wrote 'Hamlet'",
        choices: ["Charles Dicken","Jane Austen","William Shakespear","Mark tawin"],
        answer: "William Shakespear"
    }
    ]

    let currentQuestionIndex = 0;
    let score = 0 
    let answered = false;  // Track whether the current question has been answered

    startBtn.addEventListener('click', startQuiz)

    nextBtn.addEventListener('click', () => {
        currentQuestionIndex++
        if(currentQuestionIndex < questions.length){
            showQuestion()
        }else {
            showResult()
        }
    });

    restartBtn.addEventListener('click', () => {
        currentQuestionIndex = 0
        score = 0
        quizContainer.classList.remove('hidden');
        startBtn.classList.remove('hidden')
        resultContainer.classList.add('hidden')
        //startQuiz()
    });
    
    function startQuiz() {

        startBtn.classList.add('hidden');
        resultContainer.classList.add('hidden');
        questionContainer.classList.remove('hidden');
        showQuestion();

    }

    function showQuestion(){
        nextBtn.classList.add('hidden');

        // questionText.innerHTML = `
        // <span>${questions[currentQuestionIndex].question}</span>`
        
        questionText.textContent = questions[currentQuestionIndex].question;

        choicesList.innerHTML = ""  // clear previous choice
        
        questions[currentQuestionIndex].choices.forEach(choice => {
            const li = document.createElement('li');
            li.textContent =  choice
            li.addEventListener('click', () => selectAnswer(choice,li))
            choicesList.appendChild(li);
        });
    
    }

    function selectAnswer(choice,selectedLi) {
        
        // if (answered) return;  // Prevent further selections after first click
        // answered = true;  // Mark the question as answered
        
        const correctAnswer = questions[currentQuestionIndex].answer;
        if(choice === correctAnswer){
            score++
        }

        // Highlight the selected answer
        //selectedLi.classList.add('selected');

        // Disable all the answer options after one selection
        // Array.from(questions[currentQuestionIndex]).forEach(li => {
        //     li.classList.add('disabled');
        //     if (li.textContent === correctAnswer) {
        //         li.classList.add('correct');  // Optionally highlight the correct answer
        //     } else if (li !== selectedLi) {
        //         li.classList.add('incorrect');  // Optionally highlight incorrect answers
        //     }
        // });

        nextBtn.classList.remove('hidden');
    }

    function showResult(){
        questionContainer.classList.add('hidden')
        resultContainer.classList.remove('hidden')

        scoreDisplay.innerHTML = `${score} out of ${questions.length}`        
    }

});
















