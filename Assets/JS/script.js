const startBtn = document.getElementById('startBtn');
const nextBtn = document.getElementById('nextBtn');
const questionsBlockEl = document.getElementById('answerBtn');
const questionsEl = document.getElementById('question');
const questionContainerEl = document.getElementById('questContainer');
const answerBtnEl = document.getElementById('answerBtn');
const scoreEl = document.getElementById('scoreEl');
const scoreSpan = document.getElementById('score');
const scoreBtnEl = document.getElementById('scoreBtn');
const welcomeScreenEl = document.getElementById('welcomeScreen');
const questionsScreenEl = document.getElementById('questionsScreen');
const playerScoreScreenEl = document.getElementById('playerScoreScreen');
const highScoreScreenEl = document.getElementById('highScoreScreen');
const submitBtnEl = document.getElementById('submitBtn');
const timeLeftEl = document.getElementById('timeLeft');
const userScoreEl = document.getElementById('userScore');

let score = 0;
scoreSpan.innerText = score;

let sec = 60;
let time = setInterval(myTimer, 1000);

let currentQuestionsIndex;

startBtn.addEventListener('click', startGame, myTimer);
nextBtn.addEventListener('click', () => {
  currentQuestionsIndex++;
  setNextQuestion();
})

function startGame() {
  welcomeScreenEl.classList.add('hide');
  questionsScreenEl.classList.remove('hide');
  currentQuestionsIndex = 0;
  setNextQuestion();
}

function setNextQuestion() {
  questionsBlockEl.innerHTML = "";
  questionContainerEl.classList.remove('hide');
  questionsEl.classList.remove('hide');
  answerBtnEl.classList.remove('hide');
  nextBtn.classList.remove('hide');
  scoreEl.classList.remove('hide')
  showQuestion(questionsArray[currentQuestionsIndex]);
}

function showQuestion(question) {
  questionsEl.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    questionsBlockEl.appendChild(button)
    button.addEventListener('click', selectAnswer);
  })
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const answer = selectedBtn.getAttribute('data-correct');
  Array.from(answerBtnEl.children).forEach(btn => {
    setStatusClass(btn, btn.dataset.correct);
  })
  if(answer === "true") {
    score ++;
    scoreSpan.innerText = score;
  }
  if (questionsArray.length > currentQuestionsIndex + 1) {
  nextBtn.classList.remove('hide');
  } else {
  nextBtn.classList.add('hide');
  scoreBtn.classList.remove('hide');
  scoreBtn.innerText = 'Record Score';
  startBtn.classList.add('hide');
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

function myTimer() {
  timeLeftEl.innerHTML = sec + " sec";
  sec--;
  if (sec == -1) {
      clearInterval(time);
      alert("Time's Up!! Record your score");
  }
}

scoreBtnEl.addEventListener('click', recordScore);

function recordScore() {
  questionsScreenEl.classList.add('hide');
  playerScoreScreenEl.classList.remove('hide');
}
 
let nameInput = document.getElementById('name');
let userScoreInput = document.getElementById;('score');

submitBtnEl.addEventListener('click', function(event) {
  event.preventDefault();
  var list = {
    name: nameInput.value,
    score: userScoreInput.value
  };
  console.log(list);
  localStorage.setItem("list", JSON.stringify(list));
  // viewHighScores();  
});

function viewHighScores() {
  playerScoreScreenEl.classList.add('hide');
  highScoreScreenEl.classList.remove('hide');
}

var questionsArray = [
  { 
    question: 'How many whiskers does the average cat have on each side of its face?',
    answers: [
      {text: '1', correct:false}, 
      {text:'3', correct: false},
      {text:'12', correct: true},
      {text:'5,007', correct: false}
    ]
  },

  {
    question: 'The average cat spends how much of its day sleeping?',
    answers: [
      {text: '12 hours', correct: true},
      {text: '8 hours', correct: false},
      {text: '15 hours', correct: false},
      {text: '18 hours', correct: false}
    ]  
  },
  
  {
       question: 'When does a cat purr?',
     answers: [
       {text: 'When it cares for its kittens', correct: false},
       {text: 'When it needs comfort', correct: false},
       {text: 'When it feels content', correct: false},
       {text: 'All of the above', correct: true} 
     ] 
   }, 

   {
     question: 'What is the average number of kittens in a litter?',
     answers: [
       {text: '1-2', correct: false},
       {text: '3-5', correct: true},
       {text: '8-10', correct: false},
       {text: '12-14', correct: false}
     ]
   }, 

   {
     question: 'Which part of a \"cat\'s body can appear and disappear?',
     answers: [
       {text: 'Its claws', correct: false},
       {text: 'Its eyes', correct: true},
       {text: 'Its whiskers', correct: false},
       {text: 'Its tail', correct: false}
     ]
   },

   {
     question: 'What was the punishment for killing a cat in ancient Egypt?',
     answers: [
       {text: 'Nine lashes with a cattail', correct: false},
       {text: 'Nine days in the stockade', correct: false},
       {text: 'Death', correct: true},
       {text: 'Nine years in exile', correct: false}
     ]
   },

   {
     question: 'A cat named Tommaso inherited how much money from his owner when she passed away?',
     answers: [
       {text: '$20', correct: false},
       {text: '$5,000', correct: false},
       {text: '$13 million', correct: true},
       {text: '$1 billion', correct: false}
     ]
   },

   {
     question: 'Which part of a cat is as unique as a human fingerprint?',
     answers: [
       {text: 'Nose pad', correct: true},
       {text: 'Paw pads', correct: false},
       {text: 'Tongue', correct: false},
       {text: 'Claws', correct: false}
     ]
   },

   {
     question: 'Which smell is so gross to cats that they\'ll stay away from it?',
     answers: [
       {text: 'Catnip', correct: false},
       {text: 'Human sweat', correct: false},
       {text: 'Dog breath', correct: false},
       {text: 'Oranges', correct: true}
     ]  
   },

   {
     question: 'A cat cannot taste which flavors?',
     answers: [
       {text: 'Salty', correct: false},
       {text: 'Sweet', correct: true},
       {text: 'Bitter', correct: false},
       {text: 'Sour', correct: false}
     ]
   }
]