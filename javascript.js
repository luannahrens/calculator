
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
let operator = "";
console.log("Operate add: " + operate("add",2,6)); //4
console.log("add: " + add(2,2)); // 4
console.log("subtract: " + subtract(2,2)); //0
console.log("multiply: " + multiply(2,2)); // 4
console.log("divide: " + divide(2,2)); //1

