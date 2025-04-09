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
    if (true){
        /** Declaration of function scoped `var` variable in nested if block. */
        var functionScopedVarVariable = 42;
    }

    /** Legal access of function-scoped `var` variable outside nested if block but within function scope. */
    console.log("functionScopedVarVariable: " + functionScopedVarVariable);     // 42
}
func1();

/** Illegal access of function-scoped `var` variable outside function scope. */
// console.log("functionScopedVarVariable: " + functionScopedVarVariable);         // ReferenceError



/**
 * RULE: Variables declared using the `let` keyword are block scoped.
 *       - They may only be accessed in the block of code in which they were declared.
 *         (e.g. `if` block, `while` block, curly braces)
 */
function func2() {
    let letVariable = 42;
    if (letVariable === 42) {
        let letVariable = 43;      // refers to new if-block-scoped letVariable
        console.log("letVariable: " + letVariable);       // output: 43
    }
    console.log("letVariable: " + letVariable);       // output: 42
}

func2();


/**
 * Variables declared using the `const` keyword are read-only (They have a constant value).
 *      - These variables must always be given an initial value, and declaring a const variable without an initializer
 *        is not allowed.
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


/**
 * RULE: Declaration of variables with the same identifier within the same scope is only allowed for `var` variables.
 *       - `let` and `const` variables may not be redeclared within the same scope.
 */
/** legal redeclaration of var variable */
var sameScopedVarVariable = 42;
var sameScopedVarVariable = 43;

/** Illegal redeclaration of let variable */
// let sameScopedLetVariable = 42;
// let sameScopedLetVariable = 43;

/** Illegal redeclaration of const variable */
// const sameScopedConstVariable = 42;
// const sameScopedConstVariable = 43;


/**
 * RULE: A variable declared outside of any function is globally-scoped and is accessible within any function regardless of
 *       whether it was declared using the `var`, `let`, or `const` keyword.
 *       - Variables declared within a function that have not been previously declared in the global scope are only accessible
 *          within the function in which they were declared.
 *       - (i.e. Only global variables can be shared between functions).
 */
/** declaration of Global `let`, `var`, and `const` variables */
var globalVarVariable = 42;
let globalLetVariable = 43;
const globalConstVariable = 44;

function func3() {
    /** legal access of global `let`, `var`, and `const` variables in function scope. */
    console.log(globalVarVariable);
    console.log(globalLetVariable);
    console.log(globalConstVariable);

    /** declaration of local `let`, `var`, and `const` variables. */
    var functionScopedVarVariable = 1;
    let functionScopedLetVariable = 2;
    const functionScopedConstVariable = 3;
}

func3();


let a = 34;

function func4() {
    /** legal access of global `let`, `var`, and `const` variables in function scope. */
    console.log(globalVarVariable);
    console.log(globalLetVariable);
    console.log(globalConstVariable);

    /** illegal access of local `let`, `var`, and `const` variables in a different function. */
    // console.log(functionScopedVarVariable);
    // console.log(functionScopedLetVariable);
    // console.log(functionScopedConstVariable);
    a = a + 56;
    if (true) {
        console.log(a);
    }
    console.log(a);

}

func4();


/**
 * RULE: Global `let` and `var` variables can also be modified within a function's scope, but `const` variables can never be modified.
 */
var globalVarVariable2 = 1;
let globalLetVariable2 = 1;
const globalConstVariable2 = 1;

function func5() {
    /** legal reassignment of global `var` and `let` variables within function scope. */
    globalVarVariable2 = globalVarVariable2 + 1;
    gobalLetVariable2 = globalLetVariable2 + 1;

    /** illegal reassignment of global `const` variable within function scope. */
    // globalConstVariable2 = globalConstVariable2 + 1;
}

func5();
console.log(globalVarVariable2);
console.log(globalLetVariable2);

// TODO: Correct stuff here. Global let variables cannot be modified in function scope. They can only be accessed.
/** RULE: Redeclaring a global `let` variable with the same identifier within a function's scope creates a new function-scoped variable
 *        that is distinct from the global variable.
 *       - However, Redeclaring a global `var` variable with the same identifier within a function's scope does not create a new function-scoped variable
 *         but modifies the value of the existing global variable.
 */
var globalVarVariable3 = 1;
let globalLetVariable3 = 2;

