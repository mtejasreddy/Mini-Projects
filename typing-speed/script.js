const sentences = [
  "The quick brown fox jumps over the lazy dog.",
  "Javascript makes web pages interactive and dynamic.",
  "Typing speed tests help improve accuracy and focus.",
  "Practice makes perfect when it comes to typing skills.",
];

let startTime, endTime;
const sentenceElement = document.getElementById("sentence");
const inputElement = document.getElementById("input");
const resultElement = document.getElementById("result");
const startButton = document.getElementById("startBtn");

startButton.addEventListener("click", () => {
  const randomSentence =
    sentences[Math.floor(Math.random() * sentences.length)];
  sentenceElement.textContent = randomSentence;
  inputElement.value = "";
  resultElement.textContent = "";
  startTime = new Date().getTime();
});

inputElement.addEventListener("input", () => {
  const typedText = inputElement.value;
  const originalText = sentenceElement.textContent;

  if (typedText === originalText) {
    endTime = new Date().getTime();
    const timeTaken = (endTime - startTime) / 1000;
    const wordCount = originalText.split(" ").length;
    const wpm = Math.round((wordCount / timeTaken) * 60);

    resultElement.textContent = `Completed! Speed: ${wpm} WPM`;
  }
});
