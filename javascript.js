
function add (a, b){
    return a + b;
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

function operate(operator, a, b){
    switch (operator) {
        case "add":
            return add (a, b);
            break;
        case "subtract":
            return subtract(a,b);
            break;
        case "multiply":
            return multiply(a,b);
            break;
        case "divide":
            return divide(a,b);
            break;
        // ... more cases
        default:
            // Code to execute if no case matches
            break; // Optional for the default case if it's the last in the block
    }
}

let a = 0;
let b = 0;
let operator;
let buttons = document.querySelectorAll('button');
let buttonNumbers = document.querySelectorAll('.btnNumber');
//let buttonNumbers = document.getElementsByClassName('btnNumber');
let buttonOperators = document.querySelectorAll('.btn-operator');

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
            } else {
                if (b == 0) {
                    b = event.target.textContent;
                } else {
                    b += event.target.textContent;
                }
                console.log('b ' + b);
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


console.log("Operate add: " + operate("add",2,6)); //4
console.log("add: " + add(2,2)); // 4
console.log("subtract: " + subtract(2,2)); //0
console.log("multiply: " + multiply(2,2)); // 4
console.log("divide: " + divide(2,2)); //1

