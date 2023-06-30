var operand1Value = "";
var operatorValue = "";
var operand2Value = "";
//var result;

function insertNumber(number) {
  console.log(number, "num");
  document.getElementById("textInput").value += number;
  if (operatorValue === "") {
    operand1Value += number;
  } else {
    operand2Value += number;
  }

  console.log(
    operand1Value,
    "operand1Value",
    operatorValue,
    "operatorValue",
    operand2Value,
    "operand2Value"
  );
}
function insertOperator(op) {
  console.log(op, "opppppppppppppp");
  document.getElementById("textInput").value = operand1Value + op;

  if (!operand1Value && (op === "*" || op === "/")) {
    // alert("fill  number first");
    document.getElementById("textInput").value = "fill number first";
    return;
  }
  if (!operand1Value) {
    operand1Value += op + operand1Value;
    //operatorValue = " ";
    console.log(operand1Value, "oprend1");
  } else {
    operatorValue += op;
    console.log(operatorValue, "operator");
  }
}
// console.log(
//   operand1Value,
//   "operand1Value",
//   "operand1Value",
//   operatorValue,
//   "operatorValue",
//   operand2Value,
//   "operand2Value"
// );

function equal() {
  var x = parseFloat(operand1Value);
  console.log(x);
  var operator = operatorValue;
  console.log(operator);
  var y = parseFloat(operand2Value);
  console.log(y);
  // if (operand1Value === "-x" && operand2Value === "+y") {
  // }
  switch (operator) {
    case "+":
      total = x + y;
      break;
    case "-":
      total = x - y;
      break;
    case "*":
      total = x * y;
      break;
    case "/":
      total = x / y;
      break;
  }
  // if (x <0 && y > 0){
  //    total = x-y
  // }
  // else{ total = x-y}

  document.getElementById("textInput").value = total;
  operand1Value = total;
  console.log(operand1Value, "operand1Valueoperand1Valueoperand1Value");
  operand2Value = "";
  operatorValue = "";
  //  if (operatorValue === ""){
  //   operand1Value += number;
  //  }
  //   else {operand2Value +=number;}
  //   console.log(total);
}
function clearCalculator() {
  operand1Value = "";
  operand2Value = "";
  operatorValue = "";
  //result = "";
  document.getElementById("textInput").value = "";
}

// function insert(num) {
//   document.form1.textview.value = document.form1.textview.value + num;
// }
// function equal() {
//   var exp = document.form1.textview.value;
//   if (exp) {
//     document.form1.textview.value = eval(exp);
//   }
// }
