document.addEventListener("DOMContentLoaded", () => {
  const result = document.querySelector(".container__result");
  const buttons = document.querySelectorAll(".calculator__button");

  let currentValue = "0";
  let storedValue = null;
  let currentOperation = null;
  let resultDisplayed = false;

  // Helper function to update the display
  function updateDisplay() {
    result.innerHTML = currentValue;
  }

  // Helper function to handle number button clicks
  function handleNumberClick(number) {
    if (resultDisplayed || currentValue === "0") {
      currentValue = number;
      resultDisplayed = false;
    } else {
      currentValue += number;
    }
    updateDisplay();
  }

  // Add event listeners to number buttons
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent;

      if (
        buttonText === "+" ||
        buttonText === "-" ||
        buttonText === "×" ||
        buttonText === "÷"
      ) {
        if (currentOperation) {
          handleEqualsClick();
          storedValue = currentValue;
        } else {
          storedValue = currentValue;
        }
        currentOperation = buttonText;
        resultDisplayed = false;
      } else if (buttonText === "=") {
        handleEqualsClick();
        storedValue = null;
      } else if (buttonText === "C") {
        currentValue = "0";
        storedValue = null;
        currentOperation = null;
        resultDisplayed = false;
        updateDisplay();
      } else if (buttonText === "+/-") {
        currentValue = (parseFloat(currentValue) * -1).toString();
        updateDisplay();
      } else if (buttonText === "->") {
        currentValue = (parseFloat(currentValue) / 10).toString();
        updateDisplay();
      } else {
        handleNumberClick(buttonText);
      }
    });
  });

  // Handle equals button click
  function handleEqualsClick() {
    if (currentOperation && storedValue !== null) {
      const num = parseFloat(currentValue);
      const prevNum = parseFloat(storedValue);

      switch (currentOperation) {
        case "+":
          currentValue = (prevNum + num).toString();
          break;
        case "-":
          currentValue = (prevNum - num).toString();
          break;
        case "×":
          currentValue = (prevNum * num).toString();
          break;
        case "÷":
          currentValue = (prevNum / num).toString();
          break;
        default:
          break;
      }

      currentOperation = null;
      resultDisplayed = true;
      updateDisplay();
    }
  }

  // Add event listener for the equal button
  document.querySelector(".equal").addEventListener("click", handleEqualsClick);
});
