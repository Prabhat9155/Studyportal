
# Interactive MCQ Quiz Website

This project is a complete, production-ready interactive MCQ quiz website for B.Tech Computer Science students. It is built with pure HTML, CSS, and JavaScript, and features a modern, responsive design.

## Features

- **10 Questions per Quiz:** Each quiz session consists of 10 questions.
- **B.Tech Computer Science Syllabus:** The questions are based on the IIT Kanpur syllabus for Computer Science.
- **Multiple Topics:** The quiz covers a wide range of topics, including Programming (C/C++/Python), Data Structures, Algorithms, Operating Systems, DBMS, Computer Networks, Computer Architecture, Theory of Computation, Digital Logic, and Discrete Mathematics.
- **Difficulty Progression:** The difficulty of the questions progresses from easy to hard.
- **Randomization:** The questions and answer options are randomized in each session.
- **User-Friendly Interface:** The website has a modern and attractive design with smooth animations.
- **Responsive Design:** The website is fully responsive and works on both mobile and desktop devices.
- **Progress Indicator:** A progress indicator shows the current question number.
- **Timer:** A timer shows the elapsed time.
- **"Next" Button:** A "Next" button is provided to move to the next question.
- **Visual Feedback:** The selected answer is highlighted.
- **Result Page:** A detailed result page shows the total score, percentage, grade, and a list of correct and incorrect answers.
- **"Retake Quiz" Button:** A "Retake Quiz" button is provided to start a new quiz.
- **Quiz History:** The quiz history is stored in the browser's localStorage.
- **"Best Score" Display:** The best score from previous attempts is displayed.

## Getting Started

To get started with the quiz website, simply open the `index.html` file in your web browser.

## How to Add More Questions

To add more questions to the quiz, open the `questions.js` file and add a new question object to the `questions` array. Each question object should have the following properties:

- `id`: A unique ID for the question.
- `difficulty`: The difficulty of the question ("easy", "medium", or "hard").
- `question`: The question text.
- `options`: An array of answer options.
- `correct`: The index of the correct answer in the `options` array.
- `explanation`: A brief explanation of the correct answer.

## How the Randomization Works

The randomization of questions and answer options is done using the Fisher-Yates shuffle algorithm. This algorithm is implemented in the `script.js` file and is used to shuffle the `questions` array before each quiz session. The answer options are also shuffled before being displayed to the user.
