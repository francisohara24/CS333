/**
 * @file   variableDeclarationAndScope.js
 * @brief  Program to variable declaration and scoping rules in JavaScript.
 * @author Francis O'Hara
 * @date   4/12/25
 */
/** RULE: Variables may be declared using either the `var`, `let`, or `const` keyword. */
var foo;
let bar;
const baz = 42;



/**
 * RULE: Variables declared using the `var` keyword are function-scoped if declared within a function.
 *       - Function-scoped `var` variables can be accessed in any region of the function including in nested if blocks, else blocks, while blocks, etc.
 *         but may not be accessed outside the function.
 */
function func1() {
    if (true) {
        /** Declaration of function-scoped `var` variable in nested if block. */
        var functionScopedVarVariable = 42;
    }

    /** Legal access of function-scoped `var` variable outside nested if block but within function scope. */
    console.log("functionScopedVarVariable: " + functionScopedVarVariable);     // Output: 42
}
func1();

/** Illegal access of function-scoped `var` variable outside function scope. */
// console.log("functionScopedVarVariable: " + functionScopedVarVariable);         // ReferenceError


function func2(){
    /** Declaration of function-scoped `var` variable in function scope. */
    var functionScopedVarVariable = 42;

    if (true){
        /** Redeclaration of function-scoped `var` variable within if block.
         * Since `var` variables are always function-scoped, the redeclared variable refers to the exact same variable as the function
         * scoped variable declared above and will overwrite its value.
         * */
        var functionScopedVarVariable = 43;
        console.log(functionScopedVarVariable);         // Output: 43
    }

    /** Legal access of function-scoped var variable.
     *  Value of function-scoped `var` variable changes from `42` to `43` because the redeclared `var` variable in nested if-block
     *  is also function scoped and overwrites previous value of `functionScopedVarVariable`.
     *  */
    console.log("functionScopedVarVariable: " + functionScopedVarVariable);     // Output: 43

}
func2();



/**
 * RULE: Variables declared using the `let` keyword are block scoped.
 *       - They may only be accessed in the block of code in which they were declared.
 *         (e.g. `if` block, `while` block, curly braces)
 */
function func3() {
    if (true){
        /** Declaration of if-block-scoped `let` variable */
        let letVariable = 42;
        console.log("letVariable: " + letVariable);     // Output: 42
    }

    /** Illegal access of if-block-scoped `let` variable outside if-block scope. */
    // console.log("letVariable: " + letVariable);     // ReferenceError
}
func3();


function func4() {
    /** declaration of function-scoped letVariable. */
    let letVariable = 42;
    console.log("letVariable: " + letVariable);       // Output: 42

    if (true) {
        /**
         * Redeclaration of letVariable within if-block scope.
         * This will declare a new if-block-scoped letVariable that temporarily overshadows the function-scoped letVariable declared above.
         */
        let letVariable = 43;
        console.log("letVariable: " + letVariable);       // Output: 43
    }

    /** Legal access of function-scoped letVariable.
     *  Value of function-scoped letVariable has not changed since it is distinct from the if-block-scoped letVariable.
     */
    console.log("letVariable: " + letVariable);       // Output: 42
}
func4();



/**
 * RULE: Variables declared using the `const` keyword are read-only (They have a constant value).
 *      - These variables must always be given an initial value, and declaring a const variable without an initializer
 *        is not allowed.
 *      - Like `let` variables, `const` variables are block-scoped and can only be accessed inside the block of code in which they were declared.
 *         (e.g. `if` block, `while` block, curly braces)
 */
/** Legal declaration of `var` and `let` variables without initializer. */
var varVariable;
let letVariable;

/** Illegal declaration of `const` variable without initializer. */
// const constVariable;

/** Legal declaration of `const` variable. */
const constVariable = 42;

/** Illegal attempt to change value of const variable */
// constVariable = 43;

function func5(){
    if (true) {
        /** Declaration of if-block-scoped const variable */
        const blockScopedConstVariable = 42;
        console.log("blockScopedConstVariable: " + blockScopedConstVariable);       // Output: 42
    }

    /** Illegal access of if-block-scoped `const` variable outside if block. */
    // console.log("blockScopedConstVariable: " + blockScopedConstVariable);       // ReferenceError
}
func5();



/**
 * RULE: Declaration of variables with the same identifier within the same scope is only allowed for `var` variables.
 *       - `let` and `const` variables may not be redeclared within the same scope.
 */
/** legal redeclaration of var variable */
var sameScopedVarVariable = 42;
var sameScopedVarVariable = 43;     // No SyntaxError

/** Illegal redeclaration of let variable */
// let sameScopedLetVariable = 42;
// let sameScopedLetVariable = 43;     // SyntaxError

/** Illegal redeclaration of const variable */
// const sameScopedConstVariable = 42;
// const sameScopedConstVariable = 43;     // SyntaxError



/**
 * RULE: A variable declared outside of any function is globally scoped and is accessible within any function regardless of
 *       whether it was declared using the `var`, `let`, or `const` keyword.
 *       - Only globally scoped variables may be shared between functions.
 */
/** declaration of global `let`, `var`, and `const` variables */
var globalVarVariable = 42;
let globalLetVariable = 43;
const globalConstVariable = 44;

function func6() {
    /** Legal access of global `let`, `var`, and `const` variables in `func6` scope. */
    console.log("globalVarVariable: " + globalVarVariable);     // Output: 42
    console.log("globalLetVariable: " + globalLetVariable);     // Output: 43
    console.log("globalConstVariable: " + globalConstVariable);    // Output: 44

    /** Declaration of local `let`, `var`, and `const` variables in `func6` scope */
    var func6VarVariable = 1;
    let func6LetVariable = 2;
    const func6ConstVariable = 3;
}
func6();


function func7() {
    /** Legal access of global `let`, `var`, and `const` variables in `func7` scope. */
    console.log("globalVarVariable: " + globalVarVariable);     // Output: 42
    console.log("globalLetVariable: " + globalLetVariable);     // Output: 43
    console.log("globalConstVariable: " + globalConstVariable);     // Output: 44

    /** Illegal access of local, `func6`-scoped  `let`, `var`, and `const` variables outside `func6` scope. */
    // console.log("func6VarVariable: " + func6VarVariable);      // ReferenceError
    // console.log("func6LetVariable: " + functionScopedLetVariable);      // ReferenceError
    // console.log("func6ConstVariable: " + functionScopedConstVariable);     // Reference Error
}
func7();



/**
 *  RULE: `var` variable declarations are hoisted/raised to the beginning of their scope, and can therefore be referenced
 *      before they have been declared.
 *      - Only the variable's declaration is hoisted but not the initialization/assignment. Hence, the hoisted `var` variable
 *        will have a value of `undefined` where ever it is referenced before its declaration.
 *      - `let` and `const` variable declarations are not hoisted, so accessing a `let` or `const` variable before its declaration
 *        will yield a `ReferenceError`.
 */
function func8(){
    /** Legal access of `var` variable before declaration due to hoisting. */
    console.log("varVariable1: " + varVariable1);       // Output: undefined

    /** Declaration of `var` variable accessed above. */
    var varVariable1 = 42;

    /** Illegal access of `let` and `const` variables before declaration. */
    // console.log("letVariable1: " + letVariable1);       // ReferenceError
    // console.log("constVariable1: " + constVariable1);   // ReferenceError

    /** Declaration of `let` and `const` variables after attempt to access */
    let letVariable1 = 42;
    const constVariable1 = 43;
}
func8();



/**
 * RULE: It is possible to declare a variable without using the `let`, `var`, or `const` keyword, and this results in the variable receiving a global scope
 *      regardless of whether it was defined within a function or other block.
 *      - This practice is not recommended as it is error-prone.
 */
function func9(){
    /** Legal declaration of global variable in function scope by omitting `var`, `let`, and `const` keyword. */
    globalVariable = "I am a global variable!";

    if (true){
        /** Legal definition of global variable in if-block-scope by omitting `var`, `let`, and `const` keyword. */
        globalVariable2 = 42;
    }
}
func9();

/** Legal access of global variable despite definition in function scope. */
console.log("globalVariable: " + globalVariable)        // Output: "I am a global variable!"
console.log("globalVariable2: ", globalVariable2)       // Output: 42