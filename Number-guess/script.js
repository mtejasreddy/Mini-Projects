let randomNo = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
console.log(randomNo);
console.log(attempts);

const guessInput = document.getElementById("guessInput");
const submitBtn = document.getElementById("submitBtn");
const feedback = document.getElementById("feedback");
const attemptsElement = document.getElementById("attempts");
const restartBtn = document.getElementById("restartBtn");

submitBtn.addEventListener("click", () => {
  const userGuess = Number(guessInput.value);
  attempts++;

  if (userGuess === randomNo) {
    feedback.textContent = `Correct! The number was ${randomNo}.`;
    attemptsElement.textContent = `Attempts: ${attempts}.`;
    console.log(attempts);
    console.log(userGuess);
  } else if (userGuess < randomNo) {
    feedback.textContent = "Too Low! Try again.";
    console.log(attempts);
    console.log(userGuess);
  } else {
    feedback.textContent = "Too High! Try again.";
    console.log(attempts);
    console.log(userGuess);
  }
});

restartBtn.addEventListener("click", () => {
  randomNo = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  feedback.textContent = "";
  attemptsElement.textContent = "";
  guessInput.value = "";
});
