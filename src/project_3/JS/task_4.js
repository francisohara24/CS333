/**
 * @file   task_4.js
 * @brief  Program to demonstrate control flow statements in JavaScript
 * @author Francis O'Hara
 * @date   4/13/25
 */

// Conditional - if, else, nested if, else if
/** If statement: conditional statement that executes a statement or block of statements if some condition is true. */
let var1 = 42;

if (var1 === 42)       // will execute single statement
    console.log("if block is executing...");

if (var1 === 42) {     // will execute block of statements
    console.log("statement 1: if block is executing...")
    console.log(`statement 2: var1 is ${42}`);
}

if (var1 === 0) {        // will not execute
    console.log("else block is executing...");
}
console.log("\n");


/** If...else statements: conditional statement that executes a statement/block of statements of the `if` branch if the condition is true.
 *                        Otherwise, executes the statement/block of the else branch.
 */
let var2;

//  if block will execute
var2 = "foobar";
if (var2 === "foobar") {
    console.log("if block is executing...");
} else {
    console.log("else block is executing...");
}

// else block will execute
var2 = "foo"
if (var2 === "foobar") {
    console.log("if block is executing...");
} else {
    console.log("else block is executing...");
}
console.log("\n");


/** If...else if...else statement: conditional statement that executes the `if` block if the `if` condition is true, the `else if`
 *                                 block if all prior `if` and `else if` conditions are false and the current `else if` condition is true,
 *                                 and the `else` block if all prior conditions are false.
 */
let var3;

// if block will execute
var3 = "foo";
if (var3 === "foo") {
    console.log("if block is executing...");
} else if (var3 === "foobar") {
    console.log("else...if block is executing...");
} else {
    console.log("else block is executing...");
}

// else...if block will execute
var3 = "foobar";
if (var3 === "foo") {
    console.log("if block is executing...");
} else if (var3 === "foobar") {
    console.log("else...if block is executing...");
} else {
    console.log("else block is executing...");
}

// else block will execute
var3 = "foobarbaz";
if (var3 === "foo") {
    console.log("if block is executing...");
} else if (var3 === "foobar") {
    console.log("else...if block is executing...");
} else {
    console.log("else block is executing...");
}
console.log("\n");


/** While loop: repeatedly executes a single statement/block of code as long as some condition is true.
 *      - Typically used when a block of code needs to be executed for an indefinite number of times.
 */
let i = 0;
while (i < 10) {
    console.log(`i = ${i}`);
    i++;
}
console.log("\n");


/** Do while loop: similar to while loop but starts by executing body of code before checking the loop condition.
 *      - Guarantees that the body of the loop runs at least once.
 */
let j = 0;
do {
    console.log(`j = ${j}`);
    j++;
} while (j < 10);
console.log("\n");


/** For Loop: alternative to a while loop that is used when a block of code needs to be executed for some definite number of times. */
/** C-style for loop */
for (let i = 0; i < 10; i++) {
    console.log(`i = ${i}`);
}

/** for...in loop: iterates over all enumerable property keys of an object assigning to the iteration variable the current property key in each iteration */
let object = {1: "Hydrogen", 2: "Helium", 3: "Lithium", 4: "Beryllium", 5: "Boron"};
for (let key in object) {
    console.log(`key: ${key}`);
}

/** for...of loop: iterates over the values of an iterable object. e.g. Arrays, strings, etc. */
let arr = ["hydrogen", "helium", "lithium", "beryllium", "boron"];
for (let value of arr) {
    console.log(`value: ${value}`);
}
console.log("\n");


/** break statement: control flow statement that terminates the current loop.
 *      - Only terminates the current loop (i.e. Outer loops in a nested loop will continue to execute.)
 *      - Applies to for, while, do...while loops and switch...case statements.
 */
// loop will terminate at i = 5
for (let i = 0; i < 10; i++) {
    console.log(`i = ${i}`);
    if (i === 5) {
        console.log("break encountered!");
        break;
    }
}
console.log("\n");

/** continue statement: control flow statement that skips to the next iteration of the current loop.
 * - Applies to for, while, and do...while loops.
 */
// loop will only execute for even numbered values of i
for (let i = 0; i < 10; i++) {
    if (i % 2 === 1) {
        continue;
    }
    console.log(`i = ${i}`);
}
console.log("\n");


/** switch...case statement: conditional statement that executes some block of code based on the value of some expression. */
// below switch...case statement will execute "Tuesday" block
let day = 2;

switch (day) {
    case 0:
        console.log("It's Sunday!");
        break;
    case 1:
        console.log("It's Monday!");
        break;
    case 2:
        console.log("It's Tuesday!");
        break;
    case 3:
        console.log("It's Wednesday!");
        break;
    case 4:
        console.log("It's Thursday!");
        break;
    case 5:
        console.log("It's Friday!");
        break;
    case 6:
        console.log("It's Saturday!");
        break;
    default:
        console.log("Enter a valid day!");
        break;
}
console.log("\n");


/** Ternary operator: used to define expressions that evaluate to different values based on whether some condition is `true` or `false`. */
let var4;

// will assign 'foo' to var4 since condition of ternary operator is true
var4 = (1 < 2) ? "foo" : "bar";
console.log(`var4: ${var4}`);

// will assign 'bar' to var4 since condition of ternary operator is false
var4 = (1 === 2) ? "foo" : "bar";
console.log(`var4: ${var4}`);
console.log("\n");


/** return statement: control flow statement for immediately exiting the current function execution and optionally returning a value */
function func1() {
    console.log("func1 statement 1 of 3 executing...");
    console.log("func1 statement 2 of 3 executing...");
    console.log("Encountered return statement!");
    return;
    // statements after return statement will not execute
    console.log("func1 statement 3 executing...")
}

func1();
console.log("\n");


/** try...catch: An error-handling control flow statement. Attempts to execute the try block typically containing error-prone code.
 *               If an error is encountered in the try block, its execution is paused and the catch block is executed.
 *               Otherwise, only the try block is executed. */
// Only try block executes
try {
    console.log("try block executing...")
    console.log("try block completed successfully!");
} catch {
    console.log("catch block executing...")
    console.log("catch block completed successfully!");
}
console.log();

// catch block executes
try {
    console.log("try block executing...")
    throw new Error("An error has been encountered!")
    console.log("try block completed successfully!");
} catch (error) {
    console.log(error.message);
    console.log("catch block executing...")
    console.log("catch block completed successfully!");
}
console.log("\n");


/** try...catch...finally statements: An error handling control flow statement similar to the try...catch statement but which
 *        includes a finally block that always gets executed regardless of whether an error was encountered.
 *      - The finally block is typically used to run cleanup code that has access to the scope of the try...catch block
 */
// finally block executes after try block
try {
    console.log("try block executing...")
    console.log("try block completed successfully!");
} catch {
    console.log("catch block executing...")
    console.log("catch block completed successfully!");
} finally {
    console.log("finally block executing clean up code...");
    console.log("finally block completed successfully!");
}
console.log();

// finally block executes after catch block
try {
    console.log("try block executing...")
    throw new Error("An error has been encountered!")
    console.log("try block completed successfully!");
} catch (error) {
    console.log(error.message);
    console.log("catch block executing...")
    console.log("catch block completed successfully!");
} finally {
    console.log("finally block executing clean up code...");
    console.log("finally block completed successfully!");
}
