import {
  scienceQuestions,
  physicsQuestions,
  mathematicsQuestions,
  computerScienceQuestions,
} from "./data.js";

window.addEventListener("DOMContentLoaded", () => {
  const startQuiz = document.getElementById("startQuiz");
  const questionsContainer = document.getElementById("questionsContainer");
  const scoreContainer = document.getElementById("scoreContainer");
  const categoryContainer = document.getElementById("categoryContainer");

  // Task Quiz Application
  /*
  landing page One button to Start quiz
  on click Start => show question 1st and options => after selecting option Next button appears
  on click Next => Show next question and options => if last question then show score page
  on click restart => show landing page
 */

  let selectedCategory = "";
  let score = 0;
  let questionIndex = 0;
  let questionsList;
  function setSelectedCategory(selectedCategory) {
    if (selectedCategory === "Science") {
      questionsList = scienceQuestions;
    } else if (selectedCategory === "Physics") {
      questionsList = physicsQuestions;
    } else if (selectedCategory === "Mathematics") {
      questionsList = mathematicsQuestions;
    } else if (selectedCategory === "Computer-Science") {
      questionsList = computerScienceQuestions;
    }
  }
  startQuiz.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
      selectedCategory = document.getElementById("category").value;
      setSelectedCategory(selectedCategory);
      if (questionsList.length === 0) {
        alert("Please select any one Category of questions");
      }
      categoryContainer.classList.add("hidden");
      startQuiz.classList.add("hidden");
      questionsContainer.classList.remove("hidden");

      showQuestions();
    }
  });

  function showQuestions() {
    questionsContainer.innerHTML = "";
    questionsContainer.innerHTML = `
            <div class="question">
          <span>${questionIndex + 1}.</span>
          ${questionsList[questionIndex].question}
        </div>
        <div id="option">
          <div value data-option=${questionsList[questionIndex].option[0]} class="options">
            ${questionsList[questionIndex].option[0]}
          </div>
          <div data-option=${questionsList[questionIndex].option[1]} class="options">
            ${questionsList[questionIndex].option[1]}
          </div>
          <div data-option=${questionsList[questionIndex].option[2]} class="options">
            ${questionsList[questionIndex].option[2]}
          </div>
          <div data-option=${questionsList[questionIndex].option[3]} class="options">
            ${questionsList[questionIndex].option[3]}
          </div>
        </div>
        <div class="startQuizButtonContainer">
          <button class="startQuizButton" class="">Next</button>
        </div>
            `;
  }

  function calculateScore(selectedAnswer) {
    console.log(
      "control riched to check ans",
      questionsList[questionIndex].answer,
      "s",
      selectedAnswer
    );
    if (questionsList[questionIndex].answer === selectedAnswer) {
      score++;
      console.log("Correct");
      console.log(selectedAnswer);
      console.log(score);
    }
  }
  questionsContainer.addEventListener("click", (e) => {
    if (e.target.className === "options") {
      // let selectedAnswer = e.target.getAttribute("data-option");
      let selectedAnswer = e.target.innerText;
      calculateScore(selectedAnswer);
    }
  });

  questionsContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      nextQuestion();
      showQuestions();
    }
  });
  function nextQuestion() {
    if (questionsList.length > questionIndex + 1) {
      questionIndex++;
    } else {
      showScore();
    }
  }
  function showScore() {
    questionsContainer.classList.add("hidden");
    scoreContainer.innerHTML = "";
    scoreContainer.innerHTML = `<h2>Score:</h2>
        <h2 id="score">${score} <span>/ 5</span></h2>
        <div class="startQuizButtonContainer">
          <button id="restart" class="startQuizButton">Restart Quiz</button>
          <button id="quite" class="startQuizButton">Quite</button>
        </div>`;

    scoreContainer.classList.remove("hidden");
  }

  function backToHome() {
    questionIndex = 0;
    score = 0;
    scoreContainer.classList.add("hidden");
    questionsContainer.classList.add("hidden");
    startQuiz.classList.remove("hidden");
    categoryContainer.classList.remove("hidden");
  }

  scoreContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      alert(`Your Total Score ${score}`);
      restartQuiz();
    }
    if (e.target.id === "quite") {
      backToHome();
    }
  });
  function restartQuiz() {
    score = 0;
    questionIndex = 0;
    scoreContainer.classList.add("hidden");
    showQuestions();
    questionsContainer.classList.remove("hidden");
  }
});
