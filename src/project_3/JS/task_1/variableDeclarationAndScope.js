/** Variables may be declared using either the `var`, `let`, or `const` keyword. */
var foo;
let bar;
const baz = 42;

/**
 * Rule 1: Variables declared using the `var` keyword are function-scoped or globally scoped
 */
var foo = 42;

function func1(){
    var bar = 45;
    console.log(bar);
}

function func2(){

}


// const variable without initializer is not allowed.