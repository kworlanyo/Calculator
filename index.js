const calculation = document.querySelector(".calculation");
const total = document.querySelector(".total");
const equalBox = document.querySelector(".equal-box");
const backspace = document.querySelector(".backspace");
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText === "C") {
      calculation.innerText = "";
    } else {
      calculation.innerText += box.innerText;
    }
    total.innerText = "";
  });
});

backspace.addEventListener("click", () => {
  let expression = calculation.innerText;
  let newExpression = expression.slice(0, -1);
  calculation.innerText = newExpression;
});

equalBox.addEventListener("click", () => {
  try {
    let expression = calculation.innerText;

    // Changing the operators to Javascript recognized operators
    expression = expression.replace(/×/g, "*");
    expression = expression.replace(/÷/g, "/");
    expression = expression.replace(/−/g, "-");
    expression = expression.replace(/＋/g, "+");

    let calculationResult = eval(expression);
    total.innerText = calculationResult;
    calculation.innerText = "";
  } catch (error) {
    total.innerText = "Error";
  }
});

function add(input) {
  calculation.innerHTML += input;
  total.innerHTML = "";
}

document.addEventListener("keydown", function (event) {
  const key = event.key;

  switch (key) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      add(key);
      break;

    case "+":
      add("+");
      break;

    case "-":
      add("-");
      break;

    case "*":
      add("×");
      break;

    case "/":
      add("÷");
      break;

    case ".":
      add(".");
      break;

    case "(":
      add("(");
      break;

    case ")":
      add(")");
      break;

    case "Enter":
      try {
        let expression = calculation.innerText;

        // Changing the operators to Javascript recognized operators
        expression = expression.replace(/×/g, "*");
        expression = expression.replace(/÷/g, "/");
        expression = expression.replace(/−/g, "-");
        expression = expression.replace(/＋/g, "+");

        let calculationResult = eval(expression);
        total.innerText = calculationResult;
        calculation.innerText = "";
      } catch (error) {
        total.innerText = "Error";
      }
      break;

    case "Backspace":
      let expression2 = calculation.innerText;
      let newExpression = expression2.slice(0, -1);
      calculation.innerText = newExpression;
      break;

    case "Escape":
      calculation.innerText = "";
      total.innerText = "";
      break;

    default:
      break;
  }
});
