/**
 * @file   task_5.js
 * @brief   Program to demonstrate how functions are treated in JavaScript as a datatype.
 * @author Francis O'Hara
 * @date   4/14/25
 */
/** Functions in JavaScript can be assigned to variables.
 *      - This is because functions in JavaScript are merely a subtype of Object.
 *      - Parentheses () following a reference to a function will call the function.
 */
// assigning function to variable
let functionVar = function func1() {
    console.log("Hello, World!");
}

// calling function referenced by variable
functionVar();
console.log();


/** functions can be passed as arguments to higher order functions.
 *      - parenthesis following a function reference calls the function.
 * */
// function to be passed as argument to higher order function
function nameSentenceMaker(name) {
    return `Hello ${name}! Welcome aboard!`;
}

// higher order function with functional parameter `nameFunc`
function nameAndAgeSentencePrinter(name, age, nameFunc) {
    console.log(nameFunc(name));
    console.log(`You are ${age} years old!`);
}

nameAndAgeSentencePrinter("John Doe", 40, nameSentenceMaker);
console.log();


/** functions can be returned by higher order functions. */
// higher order function that returns another function
function calculator(operation) {
    switch (operation) {
        case 1:
            return function add(operand1, operand2) {
                return operand1 + operand2;
            }
        case 2:
            return function subtract(operand1, operand2) {
                return operand1 - operand2;
            }
        case 3:
            return function multiply(operand1, operand2) {
                return operand1 * operand2;
            }
        case 4:
            return function divide(operand1, operand2) {
                return operand1 / operand2;
            }
        default:
            console.log("Invalid Operation! Operation number must be between 1 and 4 inclusive!");
    }
}

let returnFunction1 = calculator(1)
console.log(returnFunction1(1, 3));

let returnFunction2 = calculator(3);
console.log(returnFunction2(4, 2));
console.log();


/** JavaScript supports the creation of anonymous or lambda functions.
 *  This is achieved using the arrow syntax =>.
 */
// Output: [Function (anonymous)]
console.log(
    // definition of anonymous function
    (name) => {
        return `Hello, World! You are welcome, ${name}!`;
    }
)

// passing anonymous function as argument to higher order function `binaryOperation`
function binaryOperation(operationFunction, operand1, operand2){
    console.log(`The result of the operation is ${operationFunction(operand1, operand2)}.`);
}
binaryOperation((operand1, operand2) => {return operand1 * operand2}, 21, 2);       // output: The result of the operation is 42.