/** RULE: Identifiers can be assigned to variables, constants, functions, classes, properties of objects or properties of classes. */
let variableIdentifier;

const constantIdentifier = 42;

function functionIdentifier() {
    console.log("Hello world!");
}

class ClassIdentifier {
    classPropertyIdentifier = 42;
}

let foo = {objectPropertyIdentifier: 42};



/** RULE: Reserved words generally can't be used as identifiers in JavaScript.
 * The commented line of code will produce a syntax error if uncommented.
 */
// let if = 42;



/** RULE: Reserved words may be used as identifiers for properties of objects and properties of classes.
 */
/** object properties */
let object = {if: 42, else: 43, let: "hello"};

/** class properties */
class Foo {
    if = 42;    // public class property
    #else = hello;      // private class property
}



/**
 *  RULE: A keyword that is not a reserved word may be used as an identifier anywhere in a JavaScript program.
 *        The following is an example with the `async` keyword which is not a reserved word.
 */

/** `async` as variable identifer */
let async = 42;     // async as variable identifier

/** `async` as keyword for declaring asynchronous functions */
async function bar() {
    console.log("Hello, World!");
}



/**
 * RULE: The starting character of an identifier cannot be a number.
 *       The commented line of code below will produce a syntax error if uncommented.
 */
// let 3identifier = 42;



/**
 * RULE: Identifiers in JavaScript can use characters from the Unicode character set and are not restricted only to ASCII
 *      characters.
 * The following example demonstrates the use of Non-ASCII Unicode characters in a variable identifier.
 */
let ቍቐቖቘቚ = "hello";



/**
 * RULE: The starting character in an identifier must either be a dollar sign $, an underscore _, or a character in the
 *      ID_Start category of the Unicode character set.
 *      The following are 2 examples of identifiers with valid starting characters followed by 2 examples of an identifier
 *      with an invalid starting character.
 */
let $foo = "hello, world!";
let _foo = 42;
let ⶸfoo = 80.9;
// let #invalid1= "Invalid!";
// let %invalid2 = true;



/**
 * RULE: A continuing character of an identifier must either be a character in the ID_Continue category of the Unicode
 *       character set, a Zero Width Non-Joiner character \u200C, or a Zero Width Joiner Character \u200D.
 */
let A𐁐ﶒl𐱈;
let A\u200C\u200D;



/** RULE: Unicode escape sequences may be used as characters in an identifier in place of the actual Unicode symbol.
 *       The identifier `\u0041\u0042` is equivalent to `AB`.
 */
const \u0041\u0042 = "foobar";
console.log(AB);