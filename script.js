
// Get elements from the DOM
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const nextBtn = document.getElementById("next");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const timerText = document.getElementById("timer-text");
const resultContainer = document.querySelector(".result-container");
const quizContainer = document.querySelector(".quiz-container");
const resultText = document.getElementById("result-text");
const percentage = document.getElementById("percentage");
const grade = document.getElementById("grade");
const timeTaken = document.getElementById("time-taken");
const resultDetails = document.getElementById("result-details");
const retakeBtn = document.getElementById("retake");
const shareBtn = document.getElementById("share");
const bestScoreEl = document.getElementById("best-score");

// Initialize quiz variables
let currentQuiz = 0;
let score = 0;
let timer;
let timeLeft = 0;

// Function to start the quiz
function startQuiz() {
  // Shuffle the questions
  shuffle(questions);

  // Load the first question
  loadQuiz();

  // Start the timer
  timer = setInterval(updateTimer, 1000);
}

// Function to load a new question
function loadQuiz() {
  // Deselect all answers
  deselectAnswers();

  // Get the current quiz data
  const currentQuizData = questions[currentQuiz];

  // Display the question and options
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.options[0];
  b_text.innerText = currentQuizData.options[1];
  c_text.innerText = currentQuizData.options[2];
  d_text.innerText = currentQuizData.options[3];

  // Update the progress bar and text
  const progress = ((currentQuiz + 1) / 10) * 100;
  progressBar.style.width = `${progress}%`;
  progressText.innerText = `Question ${currentQuiz + 1}/10`;
}

// Function to deselect all answers
function deselectAnswers() {
  const answerEls = document.querySelectorAll(".answer");
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

// Function to get the selected answer
function getSelected() {
  let answer;
  const answerEls = document.querySelectorAll(".answer");
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

// Function to update the timer
function updateTimer() {
  timeLeft++;
  timerText.innerText = `Time: ${timeLeft}s`;
}

// Event listener for the next button
nextBtn.addEventListener("click", () => {
  // Get the selected answer
  const answer = getSelected();

  // If an answer is selected
  if (answer) {
    // Check if the answer is correct
    if (answer === questions[currentQuiz].correct) {
      score++;
    }

    // Move to the next question
    currentQuiz++;

    // If there are more questions
    if (currentQuiz < 10) {
      // Load the next question
      loadQuiz();
    } else {
      // Show the results
      showResults();
    }
  }
});

// Function to show the results
function showResults() {
  // Stop the timer
  clearInterval(timer);

  // Hide the quiz container and show the result container
  quizContainer.style.display = "none";
  resultContainer.style.display = "flex";

  // Display the score and other details
  resultText.innerText = `You scored ${score} out of 10`;
  percentage.innerText = `${(score / 10) * 100}%`;
  grade.innerText = getGrade(score);
  timeTaken.innerText = `${timeLeft}s`;

  // Display the correct and incorrect answers
  resultDetails.innerHTML = "";
  for (let i = 0; i < 10; i++) {
    const question = questions[i];
    const isCorrect = question.correct === getSelected();
    const resultItem = document.createElement("div");
    resultItem.classList.add("result-item");
    resultItem.classList.add(isCorrect ? "correct" : "incorrect");
    resultItem.innerHTML = `
      <p>${i + 1}. ${question.question}</p>
      <p>Correct answer: ${question.options[question.correct]}</p>
    `;
    resultDetails.appendChild(resultItem);
  }

  // Update the best score
  updateBestScore();
}

// Function to get the grade based on the score
function getGrade(score) {
  if (score >= 9) {
    return "A";
  } else if (score >= 8) {
    return "B";
  } else if (score >= 7) {
    return "C";
  } else if (score >= 6) {
    return "D";
  } else {
    return "F";
  }
}

// Function to update the best score
function updateBestScore() {
  const bestScore = localStorage.getItem("bestScore");
  if (!bestScore || score > bestScore) {
    localStorage.setItem("bestScore", score);
    bestScoreEl.innerText = score;
  }
}

// Event listener for the retake button
retakeBtn.addEventListener("click", () => {
  // Reset the quiz variables
  currentQuiz = 0;
  score = 0;
  timeLeft = 0;

  // Hide the result container and show the quiz container
  resultContainer.style.display = "none";
  quizContainer.style.display = "flex";

  // Start the quiz again
  startQuiz();
});

// Event listener for the share button
shareBtn.addEventListener("click", () => {
  // Create the share message
  const shareMessage = `I scored ${score} out of 10 on the Interactive MCQ Quiz! Can you beat my score?`;

  // Share the message using the Web Share API
  if (navigator.share) {
    navigator.share({
      title: "Interactive MCQ Quiz",
      text: shareMessage,
      url: window.location.href,
    });
  } else {
    // Fallback for browsers that do not support the Web Share API
    alert(shareMessage);
  }
});

// Function to shuffle an array using the Fisher-Yates shuffle algorithm
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Start the quiz when the page loads
startQuiz();
