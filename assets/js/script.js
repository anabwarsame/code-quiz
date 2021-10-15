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

const constructQuestionContainer = function (question) {
  console.log(question);

  // construct container div
  const questionContainer = document.createElement("div");
  questionContainer.setAttribute("class", "container question-container");
  console.log(questionContainer);
  // construct h2 element
  const questionH2 = document.createElement("h2");
  questionH2.setAttribute("class", "questions");
  console.log(questionContainer);
  // construct options div
};

//render question container
const renderQuestionContainer = function () {
  // get the current question, construct html for question container
  // append the container to document
  console.log("renderQuestionContainer");

  const currentQuestion = capitalCityQuestions[0];

  constructQuestionContainer(currentQuestion);
};

const removeStartContainer = function () {
  console.log("removeStartContainer");
  // remove start container from document
  const startContainer = document.getElementById("start-quiz");
  console.log(startContainer);
  startContainer.remove();
};

// target start quiz button
// add event listening to start quiz

const startQuiz = function () {
  console.log("start");
  removeStartContainer();

  renderQuestionContainer();
};
const startButton = document.getElementById("start-quiz");

// add event listening to start quiz
startButton.addEventListener("click", startQuiz);

// remove start container

// const startButton = document.getElementById("start-quiz");
//function renderQuestion()

//let currentQuestionIndex
//let shuffledQuestions
//const questionElement =document.createElement("h1")
//const answerButtons =document.createElement("button")

//startButton.addEventListener("click", startQuiz);

//function startQuiz() {
//const questionContainer = document.createElement("div");
//console.log("started");
//startButton.remove();
//shuffledQuestions= capitalCityQuestions.sort( ()=> Math.random()- .5)
//currentQuestionIndex = 0
//renderNextQuestion()}

//function renderNextQuestion(){
//displayQuestion(shuffledQuestions[currentQuestionIndex]}

//function displayQuestion(question){
//questionElement.innerText= question.question}

// const currentQuestionIndex, shuffledQuestions
// const timer = setInterval(timerTick, 1000);

//startTimer;
