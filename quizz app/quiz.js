const questions = [
    {
      question: "Which is the national river of India?",
      answer: [
        { text: "a)Godavari", correct: false },
        { text: "b)Ganga", correct:true },
        { text: "c)Yamuna", correct: false },
        { text: "d)Krishna", correct: false },
      ],
    },
    {
      question: "How many continents are there in the world?",
      answer: [
        { text: "a)8", correct: false },
        { text: "b)7", correct: true },
        { text: "c)6", correct: false },
        { text: "d)10", correct: false },
      ],
    },
    {
      question: "What is the capital of India?",
      answer: [
        { text: "a)Hyderabad", correct: false },
        { text: "b)Goa", correct: false },
        { text: "c)Delhi", correct: true },
        { text: "d)Mumbai", correct: false },
      ],
    },
    {
      question: "Which is the deepest ocean in the world?",
      answer: [
        { text: "a)Pacific Ocean", correct: true },
        { text: "b)Indian Ocean", correct: false },
        { text: "c)Arctic Ocean", correct: false },
        { text: "d)Atlantic Ocean", correct: false },
      ],
    },
    {
      question: "India is a part of which continent?",
      answer: [
        { text: "a)Austrlia", correct: false },
        { text: "b)North America", correct: false },
        { text: "c)Africa", correct: false },
        { text: "d)Asia", correct: true },
      ],
    },
  ];
  const questionElement = document.getElementById("question1");
  const answers = document.querySelector(".answers");
  const bt1 = document.querySelector("#bt1");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
  }
  
  
  function showQuestion() {
         resetState();
    let currentQuestion = questions[currentQuestionIndex].question;
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion;
    let currentAnswers = questions[currentQuestionIndex].answer;
    currentAnswers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("options");
      answers.appendChild(button);
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function resetState() {
    while (answers.firstChild) {
      answers.removeChild(answers.firstChild);
    }
    bt1.style.display = "none";
  }
  
  function selectAnswer(e) {
    const selectedOpt = e.target;
    const isCorrect = selectedOpt.dataset.correct === "true";
    if (isCorrect) {
      selectedOpt.classList.add("correct");
      score++;
    } else {
      selectedOpt.classList.add("incorrect");
    }
    Array.from(answers.children).forEach((button) => {
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      }
      button.disabled = true;
    });
    bt1.style.display = "block";
  }
  
  function showScore() {
    resetState();
    questionElement.innerText = `your scored ${score} out of ${questions.length}!`;
    bt1.innerHTML = "Play Again";
    bt1.style.display = "block";
  }
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  }
  bt1.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
      nextQuestion();
    } else {
      startQuiz();
    }
  });
  
  startQuiz();
  