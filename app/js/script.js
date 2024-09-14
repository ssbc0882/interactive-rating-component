const ratingNumber = document.querySelectorAll(".rating__number");
const ratingScreen = document.querySelector(".rating");
const submitButton = document.querySelector(".btn");
const successMessage = document.querySelector(".success");
const ratingSelect = document.querySelector(".picked");
let selectedRating = null;

ratingNumber.forEach((number) => {
  number.addEventListener("click", () => {
    selectedRating = number.getAttribute("data-rating");

    ratingNumber.forEach((num) => num.classList.remove("active"));
    number.classList.add("active");
  });
});

submitButton.addEventListener("click", () => {
  if (selectedRating) {
    ratingSelect.textContent = selectedRating;

    ratingScreen.style.display = "none";
    successMessage.style.display = "block";
  } else {
    alert("Please select a rating before submitting");
  }
});

document.querySelector(".back-btn").addEventListener("click", () => {
  console.log(window.history.back());
});
