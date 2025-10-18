
const ADD = "+";
const SUBTRACT = "-";
const MULTIPLY = "X";
const DIVIDE = "/";
const DIVIDE_ERROR = "Can't divide by 0!";
let a = 0;
let b = 0;
let result = 0;
let equals = false;
let operator;
let buttons = document.querySelectorAll('button');
let buttonNumbers = document.querySelectorAll('.btnNumber');
let buttonOperators = document.querySelectorAll('.btn-operator');
let display = document.querySelector('.display');

function add (a, b){
    let result = Number(a) + Number(b);
    return Math.round(result * 100) / 100;
}

function subtract (a, b) {
    let result =  a - b;
    return Math.round(result * 100) / 100;
}

function multiply (a , b) {
    let result = a * b;
    return Math.round(result * 100) / 100;
}

function divide (a, b){
    if (b == 0){
        clear();
        return DIVIDE_ERROR;

    } else {
        let result = a / b;
        return Math.round(result * 100) / 100;
    }
}

function clear (){
    a = 0;
    b = 0;
    operator = null;
    equals = false; 
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
    }
}


buttonNumbers.forEach(function(button) {
        button.addEventListener('click', function(event) {
            if (equals && operator == null){
                clear();
            }
            if (!operator) {
                
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
        // if another operator is pressed before equal key
        if (b != 0) {
            let result = operate(operator, a, b);
            display.textContent = result;
            a = result;
            b = 0;
        }
        operator = event.target.textContent;
        console.log('operator pressed: ', operator);
    });
});

let equalBtn = document.querySelector('.btn-equals');
equalBtn.addEventListener('click', function(event) {
    if (operator != null) { //testing
        let result = operate(operator, a, b);
        display.textContent = result;
        //check for divide by 0 error here
        if (result != DIVIDE_ERROR){
            a = result;
            b = 0;
            operator = null;
            equals = true;
        }
    }
});

let clearBtn = document.querySelector('.btn-clear');
clearBtn.addEventListener('click', function(event) {
    display.textContent = " ";        
    clear();
});


