const zeroBox = document.getElementById("zero-box");
const calculation = document.getElementById("calculation");
const clearBox = document.getElementById("clear-box");
const total = document.getElementById("total");
const equalBox = document.getElementById("equal-box");
const numberBox = document.querySelectorAll(".number-box"); // this will return an array of all elements with class number-box
const operatorBox = document.querySelectorAll(".operator-box"); // this will return an array of all elements with class operator-box
const operatorBox1 = document.querySelectorAll(".operator-box1");
const operatorBox2 = document.querySelector(".operator-box2");

for (let i = 0; i < numberBox.length; i++) {
  numberBox[i].addEventListener("click", () => {
    // this adds an event listener to elements with class of number-box
    calculation.innerHTML += i + 1; // this is because arrays are zero based
    total.innerHTML = "";
  });
}

for (let i = 0; i < operatorBox.length; i++) {
  operatorBox[i].addEventListener("click", () => {
    switch (i) {
      case 0:
        calculation.innerHTML += "<span class='add-color'>+</span>";
        total.innerHTML = "";
        break;
      case 1:
        calculation.innerHTML += "<span class='add-color'>-</span>";
        total.innerHTML = "";
        break;
      case 2:
        calculation.innerHTML += "<span class='add-color'>×</span>";
        total.innerHTML = "";
        break;
      case 3:
        calculation.innerHTML += "<span class='add-color'>÷</span>";
        total.innerHTML = "";
        break;
      default:
        break;
    }
  });
}

for (let i = 0; i < operatorBox1.length; i++) {
  operatorBox1[i].addEventListener("click", () => {
    switch (i) {
      case 0:
        calculation.innerHTML += "<span class='add-color'>.</span>";
        total.innerHTML = "";
        break;
      case 1:
        calculation.innerHTML += "<span class='add-color'>(</span>";
        total.innerHTML = "";
        break;
      case 2:
        calculation.innerHTML += "<span class='add-color'>)</span>";
        total.innerHTML = "";
        break;
    }
  });
}

zeroBox.addEventListener("click", () => {
  calculation.innerHTML += 0;
  total.innerHTML = "";
});

clearBox.addEventListener("click", () => {
  calculation.innerHTML = "";
  total.innerHTML = "";
});

operatorBox2.addEventListener("click", () => {
  let expression = calculation.innerHTML;

  // Check if the last character is an operator
  const lastCharacter = expression.slice(-1);
  const operators = ["+", "-", "×", "÷", ".", "(", ")"];

  if (operators.includes(lastCharacter)) {
    // If the last character is an operator, remove it
    expression = expression.slice(0, -1);
  } else {
    // If the last character is not an operator, remove the last number or operator

    // Find the last number or operator including the <span> tags
    const lastElementMatch = expression.match(/<span[^>]*>[^<]*<\/span>|[^<]/g);
    const lastElement = lastElementMatch[lastElementMatch.length - 1];

    // Remove the last number or operator from the expression
    expression = expression.slice(0, -lastElement.length);
  }

  calculation.innerHTML = expression;
});

equalBox.addEventListener("click", () => {
  let expression = calculation.innerHTML;

  // Removing the <span> elements added for color styling
  expression = expression.replace(/<span class="add-color">/g, "");
  expression = expression.replace(/<\/span>/g, "");

  // Changing the operators to Javascript recognized operators
  expression = expression.replace(/×/g, "*");
  expression = expression.replace(/÷/g, "/");
  expression = expression.replace(/−/g, "-");
  expression = expression.replace(/＋/g, "+");

  let calculationResult = eval(expression);
  total.innerHTML = calculationResult;
  calculation.innerHTML = "";
});

// document.addEventListener("keydown", function (event) {
//     const key = event.key;

//     if (/\d/.test(key)) {
//       // Check if the pressed key is a number
//       calculation.innerHTML += key;
//       total.innerHTML = "";
//     } else if (key === "+") {
//       calculation.innerHTML += "+";
//     } else if (key === "-") {
//       calculation.innerHTML += "-";
//     } else if (key === "*") {
//       calculation.innerHTML += "×";
//     } else if (key === "/") {
//       calculation.innerHTML += "÷";
//     } else if (key === "Enter") {  // Evaluate the expression when Enter key is pressed

//       let expression = calculation.innerHTML;

//       expression = expression.replace(/×/g, "*");
//       expression = expression.replace(/÷/g, "/");
//       expression = expression.replace(/−/g, "-");
//       expression = expression.replace(/＋/g, "+");

//       let calculationResult = eval(expression);
//       total.innerHTML = calculationResult;
//       calculation.innerHTML = "";
//     } else if (key === "Escape") {       // Clear the expression when Escape key is pressed
//         calculation.innerHTML = ""
//         total.innerHTML = ""
//     }
//   });
