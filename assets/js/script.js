const startButton = document.getElementById("start-quiz");
function renderQuestion()

let currentQuestionIndex
let shuffledQuestions
const questionElement =document.createElement("h1")
const answerButtons =document.createElement("button")


startButton.addEventListener("click", startQuiz);

function startQuiz() {
  const questionContainer = document.createElement("div");
  console.log("started");
  startButton.remove();
  shuffledQuestions= capitalCityQuestions.sort( ()=> Math.random()- .5)
  currentQuestionIndex = 0
  renderNextQuestion()
}
 
function renderNextQuestion(){
  displayQuestion(shuffledQuestions[currentQuestionIndex])
}

function displayQuestion(question){
  questionElement.innerText= question.question
}


const capitalCityQuestions = [
  {
    question: "what is the capital city of portugal?",
    answers: ["Madrid", "Paris", "Lisbon", " Athens"],
    correctAnswer: "Lisbon",
  },
  {
    question: "what is the capital city of USA?",
    answers: [" Washington DC", "New York", "Los Angeles", "Boston"],
    correctAnswer: "Washington DC",
  },
  {
    question: "what is the capital city of Russia?",
    answers: ["Moscow", "St Petersburg", "Prague", "Riga"],
    correctAnswer: "Moscow",
  },
  {
    question: "what is the capita city of Canada?",
    answers: ["Toronto", "Vancouver", "Ottawa", "Quebec"],
    correctAnswer: "Ottawa",
  },
];

// const currenQuestionIndex, shuffedQuestions
// const timer = setInterval(timerTick, 1000);

//startTimer;
