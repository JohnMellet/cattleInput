const openEntryForm = document.getElementById("add-entry-btn");
const cattleHome = document.querySelector(".cattle-home");
const cattleEntryForm = document.querySelector(".cattle-entry-form");
const dialogModal = document.querySelector(".confirm-close-dialog");
const closeEntryBtn = document.getElementById("close-form-btn");
const nameInput = document.getElementById("cattle-name");
const discardBtn = document.getElementById("discard-btn");

function toggleHidden() {
  cattleHome.classList.toggle("hidden");
  cattleEntryForm.classList.toggle("hidden");
}

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

function discardChanges() {
  nameInput.value = "";
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  radioButtons.forEach((button) => {
    button.checked = false;
  });
  toggleHidden();
}

openEntryForm.addEventListener("click", () => {
  toggleHidden();
});

closeEntryBtn.addEventListener("click", () => {
  checkCattleInput();
});

discardBtn.addEventListener("click", discardChanges);
