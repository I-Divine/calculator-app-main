let operationStack = "";
const display = document.getElementById("display");
const enterInput = (value) => {
  if (operationStack == "Syntax Error" || operationStack == "Infinity") {
    operationStack = "";
  }
  operationStack = operationStack + value.toString();
  updateDisplay();
};
const updateDisplay = () => {
  display.textContent = operationStack;
};
const clearDisplay = () => {
  operationStack = " ";
  updateDisplay();
  //   console.log("operationStack");
};
const deleteValue = () => {
  if (operationStack == "Syntax Error" || operationStack == "Infinity") {
    operationStack = "";
  }
  operationStack = operationStack.slice(0, operationStack.length - 1);
  updateDisplay();
};
const solve = () => {
  try {
    operationStack = eval(operationStack);
    updateDisplay();
  } catch (error) {
    console.log(error);
    operationStack = "Syntax Error";
    updateDisplay();
  }
};
