let operand1 = 0;
let operand2 = 0;
let result = 0;
let pointer = 1;
let currentOperation = "";
let equation = "";

let updateEquation = (data) => {
  let equationDisplay = document.getElementById("equation");
  equation += data;
  equationDisplay.value = equation;
};

let buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.value);
    let display = document.getElementById("inputBox");
    if (result != 0) {
      equation = "" + result;
    }
    if (display.value === "0") {
      display.value = "";
    }
    if (pointer === 1) {
      operand1 = display.value + "" + button.value;
      display.value = operand1;
    } else {
      operand2 = display.value + "" + button.value;
      display.value = operand2;
    }
    updateEquation(button.value);
    // console.log(
    //   "op1,op2,res,p,cop,eq = ",
    //   operand1,
    //   operand2,
    //   result,
    //   pointer,
    //   currentOperation,
    //   equation
    // );
  });
});
let operators = document.querySelectorAll(".button-operator");
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    let operation = operator.id;
    let display = document.getElementById("inputBox");

    switch (operation) {
      case "multiply":
      case "subtract":
      case "add":
      case "divide":
      case "percent":
        if(result != 0) {
            equation = "" + result;
            operand1 = result;
            updateEquation("");
            result = 0;
        }
        if (pointer === 1) {
          pointer = 2;
          display.value = 0;
          if (operation !== "del") {
            currentOperation = operation;
          }
        }
        break;
      case "equals":
        if (pointer === 2) {
          operand1 = parseFloat(operand1);
          operand2 = parseFloat(operand2); // This ensures correct parsing
          // console.log(
          //   "op1,op2,res,p,cop,eq = ",
          //   operand1,
          //   operand2,
          //   result,
          //   pointer,
          //   currentOperation,
          //   equation
          // );
          switch (currentOperation) {
            case "add":
              result = operand1 + operand2;
              break;
            case "subtract":
              result = operand1 - operand2;
              break;
            case "multiply":
              result = operand1 * operand2;
              break;
            case "divide":
              result = operand1 / operand2;
              break;
            case "percent":
              result = operand1 * (operand2 / 100);
              break;
          }
          display.value = result;
          operand1 = result;
          pointer = 1;
        }
        break;
      case "ac":
        operand1 = 0;
        operand2 = 0;
        result = 0;
        pointer = 1;
        display.value = 0;
        equation = "";
        document.getElementById("equation").value = "";
        break;
      case "del":
        display.value = display.value.slice(0, -1);
        if (pointer === 1) {
          operand1 = parseFloat(display.value);
        } else {
          operand2 = parseFloat(display.value);
        }
        equation = equation.slice(0, -1);
        updateEquation("");
        break;
    }

    if (operation !== "equals" && operation !== "ac" && operation !== "del") {
      updateEquation(operator.textContent);
      currentOperation = operation;
    }
    // if (operation !== "equals") {
    //   currentOperation = operation;
    // }
    // console.log(
    //   "op1,op2,res,p,cop,eq = ",
    //   operand1,
    //   operand2,
    //   result,
    //   pointer,
    //   currentOperation,
    //   equation
    // );
  });
});
