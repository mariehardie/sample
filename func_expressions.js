function toCalculate(a, b, calculate) {
   return calculate(a,b);
}


const add = function toAdd(a, b) {
    return a + b;
};

const subtract = function toSubtract(a, b) {
    return a - b;
};

const multiply = function toMultiply(a, b) {
    return a * b;
};

const divide = function toDivide(a, b) {
    return a / b;
}


const operations = {
    addition: add,
    subtraction: subtract,
    multiplication: multiply,
    division: divide
};

const selectedOperation = "multiplication";
console.log(toCalculate(6, 3, operations[selectedOperation])); 