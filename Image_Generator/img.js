// const imageForm = document.getElementById("image-form");
// const inputText = document.getElementById("input-text");
// const imageText = document.getElementById("image-text");
// const imageGenerated = document.getElementById("image-generated");
// const imageContainer = document.getElementById("image");

// async function fetchImage(category) {
//   try {
//     const response = await fetch(
//       `https://source.unsplash.com/400x400/?${category}`,
//     );
//     if (!response.ok) {
//       throw new Error("Unable to fetch image");
//     }

//     imageText.innerText = "Below is the generated Image";
//     imageContainer.style.display = "block";
//     imageGenerated.src = response.url;
//     console.log(response.url);
//   } catch (error) {
//     console.log(error);
//   }
// }

// imageForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const category = inputText.value.trim();
//   if (category != "") {
//     fetchImage(category);
//   } else {
//     alert("Please enter some text");
//   }
// });

// Get elements from the DOM
const imageForm = document.getElementById("image-form");
const inputText = document.getElementById("input-text");
const imageText = document.getElementById("image-text");
const imageGenerated = document.getElementById("image-generated"); // FIXED ID
const imageContainer = document.getElementById("image"); // FIXED ID

// Function to generate image
function fetchImage(category) {
  imageText.innerText = "Below is the generated Image";
  imageContainer.style.display = "block";
  // Directly set the image src to Unsplash URL
  imageGenerated.src = `https://source.unsplash.com/400x400/?${category}`;
  console.log(imageGenerated.src);
}

// Event listener for form submit
imageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const category = inputText.value.trim();
  if (category !== "") {
    fetchImage(category);
  } else {
    alert("Please enter some text");
  }
});
