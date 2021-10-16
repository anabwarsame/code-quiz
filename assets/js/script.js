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
const constructOptions = function (answers) {
  const optionsContainer = document.createElement("div");
  optionsContainer.setAttribute("class", "answer-container");
  for (let i = 0; i < answers.length; i++) {
    // get current option from array
    const option = answers[i];

    // create button
    const optionButton = document.createElement("button");
    optionButton.setAttribute("class", "answer-item");
    optionButton.textContent = answers;
    // append to option container
    optionsContainer.appendChild(optionButton);
  }
  return optionsContainer;
};
const constructQuestionContainer = function (question) {
  console.log(question);

  // construct container div
  const questionContainer = document.createElement("div");
  questionContainer.setAttribute("class", "container question-container");
  console.log(questionContainer);

  // construct h2 element
  const questionH2 = document.createElement("h2");
  questionH2.setAttribute("class", "questions");
  questionH2.textContent = question.question;
  console.log(questionH2);

  // construct options div
  const answers = constructOptions(question.answers);
  console.log(answers);

  // appending h2 and options div to container div
  questionContainer.append(questionH2, answers);
  return questionContainer;
};

//render question container
const renderQuestionContainer = function () {
  console.log("renderQuestionContainer");
  // get the current question, construct html for question container
  const currentQuestion = capitalCityQuestions[0];

  const questionContainer = constructQuestionContainer(currentQuestion);

  //append container to the document
  document.getElementById("main-container").appendChild(questionContainer);
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
