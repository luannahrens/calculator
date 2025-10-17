
const ADD = "+";
const SUBTRACT = "-";
const MULTIPLY = "X";
const DIVIDE = "/";
let a = 0;
let b = 0;
let operator;
let buttons = document.querySelectorAll('button');
let buttonNumbers = document.querySelectorAll('.btnNumber');
let buttonOperators = document.querySelectorAll('.btn-operator');
let display = document.querySelector('.display');

function add (a, b){
    console.log("add" + (a + b));
    return Number(a) + Number(b);
}

function subtract (a, b) {
    return a - b;
}

function multiply (a , b) {
    return a * b;
}

function divide (a, b){
    return a / b;
}

function clear (){
    a = 0;
    b = 0;
    operator = null;
}

function operate(operator, a, b){
    console.log("in operator: ",  operator);
    switch (operator) {
        case ADD:
            return add (a, b);
            break;
        case SUBTRACT:
            return subtract(a,b);
            break;
        case MULTIPLY:
            return multiply(a,b);
            break;
        case DIVIDE:
            return divide(a,b);
            break;
        // ... more cases
        default:
            // Code to execute if no case matches
            break; // Optional for the default case if it's the last in the block
    }
}


buttonNumbers.forEach(function(button) {
        button.addEventListener('click', function(event) {
            // Your event handling logic here
            if (!operator){
                if (a == 0) {
                    a = event.target.textContent;
                } else {
                    a += event.target.textContent;
                }
                console.log("a " + a);
                display.textContent = a;

            } else {
                if (b == 0) {
                    b = event.target.textContent;
                } else {
                    b += event.target.textContent;
                }
                console.log('b ' + b);
                display.textContent = b;
            }
            
        });
    });

buttonOperators.forEach(function(button) {
    button.addEventListener('click', function(event) {
        // Your event handling logic here
        operator = event.target.textContent;
        console.log('operator pressed: ', operator);
    });
});

let equalBtn = document.querySelector('.btn-equals');
equalBtn.addEventListener('click', function(event) {
    display.textContent = " ";        
    display.textContent = operate(operator, a, b);
    clear();
});

let clearBtn = document.querySelector('.btn-clear');
clearBtn.addEventListener('click', function(event) {
    display.textContent = " ";        
    clear();
});


//console.log("Operate add: " + operate("add",2,6)); //4
console.log("add: " + add(2,2)); // 4
console.log("subtract: " + subtract(2,2)); //0
console.log("multiply: " + multiply(2,2)); // 4
console.log("divide: " + divide(2,2)); //1

