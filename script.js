let display = document.querySelector('#display');
let operatorSymbols = ['+', '-', '*', '/'];

// numbers
let numbers = document.querySelectorAll('.num');
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', function () {
    display.textContent == '0' ? display.textContent = numbers[i].value : display.textContent += numbers[i].value;
  });
}

// operators
let operator = document.querySelectorAll('.operator');
for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener('click', function () {
    let usedOperator = display.textContent.slice(-1);
    if (operatorSymbols.indexOf(usedOperator) > -1) {
      let arr = display.textContent.split('');
      arr[arr.length - 1] = operator[i].value;
      display.textContent = arr.join('');
    } else {
      display.textContent += operator[i].value;
    }
  });
}

let equals = document.querySelector('#equals');
equals.addEventListener('click', function () { //if equals button clicked, do the calculation
  // check if last digit is operator, if it is add a zero
  if (operatorSymbols.indexOf(display.textContent.slice(-1)) > -1) {
    display.textContent += '0';
  }
  display.textContent = eval(display.textContent); //display the result
});

// decimals
let decimals = document.querySelector('#decimal');
decimals.addEventListener('click', function () {
  let lastDigit = display.textContent.slice(-1);
  if (display.textContent.indexOf('.') > -1) {
    // find the position of the last decimal used
    let decimalPosition = display.textContent.indexOf('.');
    let lastDecimal;
    while (decimalPosition !== -1) {
      lastDecimal = decimalPosition;
      decimalPosition = display.textContent.indexOf('.', decimalPosition + 1);
    }
    // find the position of the last operator used
    let lastOperator, cLen = display.textContent.length;
    for (let i = cLen - 1; i >= 0; i--) {
      if (operatorSymbols.indexOf(display.textContent[i]) > -1) {
        lastOperator = i;
        break;
      }
    }
    // if an operator comes before another number then it is the next number to be calculated 
    if (lastOperator > lastDecimal) {
      display.textContent += decimals.value;
    }
  } else if (operatorSymbols.indexOf(lastDigit) === -1) {
    display.textContent = display.textContent += decimals.value;
  }
});

//reset

let reset = document.querySelector('#reset');
reset.addEventListener('click', function () { //if the CE button is clicked, reset the calculator
  display.textContent = '0';
});

// clear

let clear = document.querySelector('#clear');
clear.addEventListener('click', function () { //if the AC button is clicked, clear the display
  display.textContent = '0';
});
