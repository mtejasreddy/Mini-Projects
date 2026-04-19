document.getElementById("cleanButton").addEventListener("click", function () {
  let input = document.getElementById("inputText").value;
  let cleaned = input;

  if (document.getElementById("removeSpaces").checked) {
    cleaned = cleaned.replace(/\s+/g, "");
  }

  if (document.getElementById("removePunctuation").checked) {
    cleaned = cleaned.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  }

  if (document.getElementById("toLowercase").checked) {
    cleaned = cleaned.toLowerCase();
  }

  if (document.getElementById("toUppercase").checked) {
    cleaned = cleaned.toUpperCase();
  }

  document.getElementById("output").innerText = cleaned;
  console.log(cleaned);
});
