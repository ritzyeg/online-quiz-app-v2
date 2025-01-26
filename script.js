document.addEventListener("DOMContentLoaded", (event) => {
const question = [
    {
        question:"What has hands but cant clap?",
        answers:[
            {text:"Clock",correct:true},
            {text:"Monkey",correct:false},
            {text:"Statue",correct:false},
            {text:"Ghost",correct:false},
        ]
    },
    {question:"What has to be broken before you can use it?",
    answers:[
        {text:"A Promise",correct:false},
        {text:"An Egg",correct:true},
        {text:"A Pencil",correct:false},
        {text:"A Lock",correct:false},]  

    },
{question:"What can you catch but not throw?",
 answers: [
    {text:"A Fish",correct:false},
    {text:"A Bail",correct:false},
    {text:"A Cold",correct:true},
    {text:"A Tantrum",correct:false},
 ]
 },
{question:"Why did the math book look sad?",
 answers: [
    {text:"It had too many problems",correct:true},
    {text:"Someone tore it's pages",correct:false},
    {text:"It lose its cover",correct:false},
    {text:"It was bad at math",correct:false}
 ]
},
{question:"What has a neck but no head?",
 answers:[
    {text:"A Bottle",correct:true},
    {text:"A Shirt",correct:false},
    {text:"A Giraffe",correct:false},
    {text:"A Lamp",correct:false},]   
 },
 {
  question: "What has a head, a tail, is brown, and has no legs?",
  answers: [
      { text: "A Snake", correct: false },
      { text: "A Coin", correct: true },
      { text: "A Dog", correct: false },
      { text: "A Worm", correct: false },
  ]
},
{
  question: "I’m tall when I’m young, and I’m short when I’m old. What am I?",
  answers: [
      { text: "A Candle", correct: true },
      { text: "A Tree", correct: false },
      { text: "A Shadow", correct: false },
      { text: "A Pencil", correct: false },
  ]
},
{
  question: "What has one eye but can’t see?",
  answers: [
      { text: "A Needle", correct: true },
      { text: "A Cyclops", correct: false },
      { text: "A Storm", correct: false },
      { text: "A Camera", correct: false },
  ]
},
{
  question: "What can travel around the world while staying in the same spot?",
  answers: [
      { text: "A Stamp", correct: true },
      { text: "An Airplane", correct: false },
      { text: "A Satellite", correct: false },
      { text: "A Globe", correct: false },
  ]
},
{
  question: "What has keys but can’t open locks?",
  answers: [
      { text: "A Piano", correct: true },
      { text: "A Map", correct: false },
      { text: "A Treasure Chest", correct: false },
      { text: "A Keyboard", correct: false },
  ]
},
];
const questionElement=document.getElementById('question');
const answerButton=document.getElementById('answer-buttons');
const nextButton=document.getElementById('next-btn');
let currentQuestionIndex=0;
let score=0;
function startquiz() {
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
      selectedBtn.classList.add("correct");
      score++; // Update score if the answer is correct
    } else {
      selectedBtn.classList.add("incorrect");
    }
    // Enable the next button after an answer is selected
    nextButton.style.display = "block";
  }
  nextButton.addEventListener("click", () => {
    currentQuestionIndex++; 
  
    if (currentQuestionIndex < question.length) {
      showQuestion(); 
    } else {
      // End of quiz 
      questionElement.innerHTML = `You scored ${score} out of ${question.length}!`;
      answerButton.innerHTML = ""; 
      nextButton.style.display = "none"; 
    }
  });

startquiz();
});
