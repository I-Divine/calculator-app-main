let operationStack = "";
const display = document.getElementById("display");
const enterInput = (value) => {
  if (operationStack.length <= 14) {
    if (operationStack == "Syntax Error" || operationStack == "Infinity") {
      operationStack = "";
    }
    operationStack = operationStack + value.toString();
    updateDisplay();
  }
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

const swap_theme = () => {
  //   document.getElementsByClassName("theme-1")
  //     ? console.log(document.getElementsByClassName("theme-1"))
  //     : document.getElementsByClassName("theme-2")
  //     ? console.log(document.getElementsByClassName("theme-2"))
  //     : console.log(document.getElementsByClassName("theme-3"));
  // document.getElementById("theme-1")? document.getElementById("theme-1").setAttribute("class='theme-2'")
  const body = document.querySelector("body");
  if (body.className == "theme-1")
    document.querySelector("body").className = "theme-2";
  else if (body.className == "theme-2")
    document.querySelector("body").className = "theme-3";
  else if (body.className == "theme-3")
    document.querySelector("body").className = "theme-1";
};
