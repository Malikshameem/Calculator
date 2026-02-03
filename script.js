const display = document.getElementById("display");
const buttonsContainer = document.querySelector(".buttonContainer"); // parent

let currentInput = "";

buttonsContainer.addEventListener("click", function (e) {
  if (!e.target.classList.contains("btn")) return;

  const value = e.target.innerText;
  if (value === "C") {
    currentInput = "";
    display.value = "";
    return;
  }

  if (value === "=") {
    try {
      currentInput = eval(currentInput).toString();
      display.value = currentInput;
    } catch (error) {
      display.value = "Error";
      currentInput = "";
    }
    return;
  }

  currentInput += value;
  display.value = currentInput;
});
