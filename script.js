
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
    // Disable answer selection
    const answerEls = document.querySelectorAll(".answer");
    answerEls.forEach((el) => (el.disabled = true));

    // Get the current question data
    const currentQuizData = questions[currentQuiz];
    const correctAnswerIndex = currentQuizData.correct;
    const selectedAnswerIndex = ['a', 'b', 'c', 'd'].indexOf(answer);

    // Mark the correct answer
    const labels = document.querySelectorAll('.quiz-header label');
    labels[correctAnswerIndex].classList.add('correct-answer');

    // Check if the selected answer is correct
    const isCorrect = selectedAnswerIndex === correctAnswerIndex;

    if (isCorrect) {
      score++;
      showFeedback(true, currentQuizData.explanation);
    } else {
      // Mark the wrong answer
      labels[selectedAnswerIndex].classList.add('wrong-answer');
      showFeedback(false, currentQuizData.explanation);
    }

    // Change button text to "Next Question" or "View Results"
    if (currentQuiz < 9) {
      nextBtn.innerText = "Next Question";
    } else {
      nextBtn.innerText = "View Results";
    }

    // Wait for user to click next before moving forward
    nextBtn.onclick = () => {
      // Remove feedback and answer markings
      hideFeedback();
      labels.forEach(label => {
        label.classList.remove('correct-answer', 'wrong-answer');
      });

      // Re-enable answer selection
      answerEls.forEach((el) => (el.disabled = false));

      // Move to the next question
      currentQuiz++;

      // If there are more questions
      if (currentQuiz < 10) {
        // Load the next question
        loadQuiz();
        nextBtn.innerText = "Submit Answer";
        nextBtn.onclick = handleSubmit;
      } else {
        // Show the results
        showResults();
      }
    };
  }
});

// Function to handle answer submission
function handleSubmit() {
  // Get the selected answer
  const answer = getSelected();

  // If an answer is selected
  if (answer) {
    // Disable answer selection
    const answerEls = document.querySelectorAll(".answer");
    answerEls.forEach((el) => (el.disabled = true));

    // Get the current question data
    const currentQuizData = questions[currentQuiz];
    const correctAnswerIndex = currentQuizData.correct;
    const selectedAnswerIndex = ['a', 'b', 'c', 'd'].indexOf(answer);

    // Mark the correct answer
    const labels = document.querySelectorAll('.quiz-header label');
    labels[correctAnswerIndex].classList.add('correct-answer');

    // Check if the selected answer is correct
    const isCorrect = selectedAnswerIndex === correctAnswerIndex;

    if (isCorrect) {
      score++;
      showFeedback(true, currentQuizData.explanation);
    } else {
      // Mark the wrong answer
      labels[selectedAnswerIndex].classList.add('wrong-answer');
      showFeedback(false, currentQuizData.explanation);
    }

    // Change button text to "Next Question" or "View Results"
    if (currentQuiz < 9) {
      nextBtn.innerText = "Next Question";
    } else {
      nextBtn.innerText = "View Results";
    }

    // Wait for user to click next before moving forward
    nextBtn.onclick = () => {
      // Remove feedback and answer markings
      hideFeedback();
      labels.forEach(label => {
        label.classList.remove('correct-answer', 'wrong-answer');
      });

      // Re-enable answer selection
      answerEls.forEach((el) => (el.disabled = false));

      // Move to the next question
      currentQuiz++;

      // If there are more questions
      if (currentQuiz < 10) {
        // Load the next question
        loadQuiz();
        nextBtn.innerText = "Submit Answer";
        nextBtn.onclick = handleSubmit;
      } else {
        // Show the results
        showResults();
      }
    };
  }
}

// Set initial button handler
nextBtn.onclick = handleSubmit;
nextBtn.innerText = "Submit Answer";

// Function to show feedback
function showFeedback(isCorrect, explanation) {
  const feedbackEl = document.getElementById('answer-feedback');
  const feedbackIcon = feedbackEl.querySelector('.feedback-icon');
  const feedbackMessage = feedbackEl.querySelector('.feedback-message');
  const feedbackExplanation = feedbackEl.querySelector('.feedback-explanation');

  feedbackEl.classList.remove('correct', 'incorrect');

  if (isCorrect) {
    feedbackEl.classList.add('correct', 'show');
    feedbackIcon.innerHTML = '<i class="fas fa-check-circle"></i>';
    feedbackMessage.textContent = 'Correct! Well done!';
  } else {
    feedbackEl.classList.add('incorrect', 'show');
    feedbackIcon.innerHTML = '<i class="fas fa-times-circle"></i>';
    feedbackMessage.textContent = 'Incorrect! The correct answer is highlighted.';
  }

  feedbackExplanation.textContent = `Explanation: ${explanation}`;
}

// Function to hide feedback
function hideFeedback() {
  const feedbackEl = document.getElementById('answer-feedback');
  feedbackEl.classList.remove('show', 'correct', 'incorrect');
}

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
  const socialShare = document.getElementById("social-share");

  // Toggle social share visibility
  if (socialShare.style.display === "none" || socialShare.style.display === "") {
    socialShare.style.display = "block";
    socialShare.style.animation = "slideDown 0.3s ease";
  } else {
    socialShare.style.display = "none";
  }
});

// Social Media Share Functionality
document.addEventListener("DOMContentLoaded", () => {
  const socialButtons = document.querySelectorAll(".social-btn");

  socialButtons.forEach(button => {
    button.addEventListener("click", () => {
      const platform = button.dataset.platform;
      const shareText = `I scored ${score} out of 10 (${(score / 10 * 100)}%) on StudyPortal Bihar Quiz! 🎯 Can you beat my score? 📚`;
      const shareUrl = encodeURIComponent(window.location.href);
      const encodedText = encodeURIComponent(shareText);

      let url = "";

      switch(platform) {
        case "facebook":
          url = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&quote=${encodedText}`;
          break;
        case "twitter":
          url = `https://twitter.com/intent/tweet?url=${shareUrl}&text=${encodedText}`;
          break;
        case "linkedin":
          url = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;
          break;
        case "whatsapp":
          url = `https://wa.me/?text=${encodedText}%20${shareUrl}`;
          break;
        case "copy":
          const textToCopy = `${shareText}\n${window.location.href}`;
          navigator.clipboard.writeText(textToCopy).then(() => {
            button.innerHTML = '<i class="fas fa-check"></i> Copied!';
            setTimeout(() => {
              button.innerHTML = '<i class="fas fa-copy"></i> Copy Link';
            }, 2000);
          });
          return;
      }

      if (url) {
        window.open(url, "_blank", "width=600,height=400");
      }
    });
  });
});

// Function to shuffle an array using the Fisher-Yates shuffle algorithm
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Load best score from localStorage on page load
document.addEventListener("DOMContentLoaded", () => {
  const bestScore = localStorage.getItem("bestScore");
  if (bestScore) {
    bestScoreEl.innerText = bestScore;
  }
});

// Start the quiz when the page loads
startQuiz();

// Add slideDown animation CSS
const style = document.createElement('style');
style.textContent = `
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);

// Dark Mode Toggle for Quiz Page
const themeToggleQuiz = document.getElementById('theme-toggle');
if (themeToggleQuiz) {
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }

  themeToggleQuiz.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Save theme preference
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
}
