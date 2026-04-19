// Add click event listener to the clean button
document.getElementById("cleanButton").addEventListener("click", function () {
  // Get input text from textarea
  let input = document.getElementById("inputText").value;
  let cleaned = input;

  // Remove multiple spaces if checkbox checked (replace one or more whitespace with nothing)
  if (document.getElementById("removeSpaces").checked) {
    cleaned = cleaned.replace(/\s+/g, "");
  }

  // Remove punctuation if checkbox checked (regex for common punctuation)
  if (document.getElementById("removePunctuation").checked) {
    cleaned = cleaned.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  }

  // Convert to lowercase if checkbox checked
  if (document.getElementById("toLowercase").checked) {
    cleaned = cleaned.toLowerCase();
  }

  // Convert to uppercase if checkbox checked (note: mutually exclusive with lowercase in UI but both can be checked)
  if (document.getElementById("toUppercase").checked) {
    cleaned = cleaned.toUpperCase();
  }

  // Display cleaned text in output div and log to console
  document.getElementById("output").innerText = cleaned;
  console.log(cleaned);
});
