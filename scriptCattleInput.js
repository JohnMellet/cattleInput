const openEntryForm = document.getElementById("add-entry-btn");
const cattleHome = document.querySelector(".cattle-home");
const cattleEntryForm = document.querySelector(".cattle-entry-form");

function toggleHidden() {
  cattleHome.classList.toggle("hidden");
  cattleEntryForm.classList.toggle("hidden");
}

openEntryForm.addEventListener("click", () => {
  toggleHidden();
});
