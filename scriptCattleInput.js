const openEntryForm = document.getElementById("add-entry-btn");
const cattleHome = document.querySelector(".cattle-home");
const cattleEntryForm = document.querySelector(".cattle-entry-form");
const dialogModal = document.querySelector(".confirm-close-dialog");
const closeEntryBtn = document.getElementById("close-form-btn");
const nameInput = document.getElementById("cattle-name");

function toggleHidden() {
  cattleHome.classList.toggle("hidden");
  cattleEntryForm.classList.toggle("hidden");
}

openEntryForm.addEventListener("click", () => {
  toggleHidden();
});

function checkCattleInput() {
  const checkRadioButtons = document.querySelectorAll(
    'input[type="radio"]:checked'
  );

  if (checkRadioButtons.length > 0 || nameInput.value.trim() !== "") {
    dialogModal.showModal();
  } else {
    toggleHidden();
  }
}

closeEntryBtn.addEventListener("click", () => {
  checkCattleInput();
});
