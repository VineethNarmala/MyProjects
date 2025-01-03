let display = document.querySelector(".display");
let numbers = document.querySelectorAll(".num");
let operator = document.querySelectorAll(".operator");
let equal = document.querySelector(".equals");
let cancel = document.querySelector(".cancel");
let inputValues = [];
let resultValues = [];
let digits = "";
let answer=[];

cancel.addEventListener("click", () => {
  if(inputValues.length===0){
    answer.pop(answer.length);
    display.textContent="refresh page";
  }
  else
  {
  inputValues.pop();
  display.textContent = inputValues.join("");
  }
  //answer.pop();
  
});

numbers.forEach((el) => {
  el.addEventListener("click", () => {
    let value = el.getAttribute("data-value");
    inputValues.push(value);
    updatedisplay();
  });
});

operator.forEach((el) => {
  el.addEventListener("click", () => {
    let opValue = el.getAttribute("data-value");
    inputValues.push(opValue);
    updatedisplay();
  });
});

function updatedisplay() {
  let displayText = inputValues.join("");
  display.textContent = displayText;
}

equal.addEventListener("click", () => {
  inputValues.forEach((el, i) => {
    if (el === "+" || el === "-" || el === "*" || el === "/" || el === "%") {
      resultValues.push(digits);
      resultValues.push(el);
      digits = "";
    } else {
      digits+= el;
      if (inputValues.length - 1 === i) {
         resultValues.push(digits);
      }
    }
  });
  for (i = 0; i <= resultValues.length - 3; i++) {
    if (resultValues[i + 1] === "+") {
      Values = parseFloat(resultValues[i]) + parseFloat(resultValues[i + 2]);
      resultValues[i + 2] = Values;
    } else if (resultValues[i + 1] === "-") {
      Values = parseFloat(resultValues[i]) - parseFloat(resultValues[i + 2]);
      resultValues[i + 2] = Values;
    } else if (resultValues[i + 1] === "*") {
      Values = parseFloat(resultValues[i]) * parseFloat(resultValues[i + 2]);
      resultValues[i + 2] = Values;
    } else if (resultValues[i + 1] === "/") {
      Values = parseFloat(resultValues[i]) / parseFloat(resultValues[i + 2]);
      resultValues[i + 2] = Values;
    } else if (resultValues[i + 1] === "%") {
      Values = parseFloat(resultValues[i]) % parseFloat(resultValues[i + 2]);
      resultValues[i + 2] = Values;
    }
    i = i + 1;
    
     answer.push(resultValues[resultValues.length - 1]);
      display.innerText = answer;
  }
  inputValues = ""; 
  resultValues == " ";
});

// for (i = 0; i <= resultValues.length - 3; i++) {
//     switch(resultValues[i + 1]){
//      case "+":
//      Values = parseFloat(resultValues[i]) + parseFloat(resultValues[i + 2]);
//       return resultValues[i + 2] = Values;
//      break;
//      case "-":
//       Values = parseFloat(resultValues[i])-parseFloat(resultValues[i + 2]);
//        return resultValues[i + 2] = Values;
//      break;
//      case "*":
//       Values = parseFloat(resultValues[i])*parseFloat(resultValues[i + 2]);
//        return resultValues[i + 2] = Values;
//       break;
//       case"/":
//       Values = parseFloat(resultValues[i])/parseFloat(resultValues[i + 2]);
//        return resultValues[i + 2] = Values;
//       break;
//       case "%":
//         Values = parseFloat(resultValues[i])%parseFloat(resultValues[i + 2]);
//         return resultValues[i + 2] = Values;
//        break;
//        default:
//         return error

//   }
// }

// let currentInput="";
// let previousInput="";
// let operators="";
//   console.log(numbers);

//   numbers.forEach(button=>{
//         button.addEventListener("click",()=>{
//         let value=button.getAttribute("data-value");
//         currentInput+=value;
//         display.textContent=currentInput;
//         updatedisplay();

//               });
//     });

//       operator.forEach(button=>{
//       button.addEventListener("click",()=>{
//        operators=button.getAttribute("data-value");
//        display.textContent= currentInput+operators;
//        if(currentInput!==""){
//         previousInput=currentInput;
//         currentInput=""; //
//        updatedisplay();
//     }

// });
// });

// equal.addEventListener("click",()=>{
//   if(previousInput!==" " && currentInput!==" " && operators!==" "){
//     let num1=parseFloat(previousInput);
//     let num2=parseFloat(currentInput);
//     let result;
//     switch(operators){
//      case "+":
//       result=num1+num2;
//       break;
//       case "-":
//         result=num1-num2;
//         break;
//         case "/":
//           result=num2!==0 ? num1/num2: "error";
//           break;
//           case "*":
//             result=num1*num2;
//             break;
//             case "%":
//               result=num2!==0? num1/num2:"error"
//             default:
//               result="error"
//     }

//   display.innerHTML=result;
//   previousInput=result.toString();
//   currentInput="";
//   operators="";
//   updatedisplay();
//   }
// });

// function updatedisplay(){
//   display.textContent=`${previousInput} ${operators} ${currentInput}`;
// };
