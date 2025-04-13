/**
 * @file   task_3.js
 * @brief  Code to demonstrate the type system in JavaScript.
 *         Contains code on how to construct primitive types and aggregate types, and operations supported by each type.
 * @author Francis O'Hara
 * @date   4/12/25
 */

/**
 * RULE: There are 7 primitive types in JavaScript which are
 *      1. Boolean
 *      2. Null
 *      3. Undefined
 *      4. String
 *      5. Number
 *      6. BigInt
 *      7. Symbol
 *      Aggregate types are constructed using Objects.
 */

/** Boolean value from Boolean literals */
let booleanVar1 = true;
let booleanVar2 = false;
console.log(`booleanVar1: ${booleanVar1}`)     // Output: true
console.log(`booleanVar2: ${booleanVar2}`)    // Output: false

/** Boolean value from return value of relational or equality operators */
let booleanVar3 = 1 > 4;
let booleanVar4 = 3 === 3.0
console.log(`booleanVar3: ${booleanVar3}`)    // Output: false
console.log(`booleanVar4: ${booleanVar4}`)    // Output: true

/** Arithmetic Operations on Boolean values */
console.log(`true + true: ${true + true}`);       // Output: 2
console.log(`true - true: ${true - true}`);       // Output: 0
console.log(`true * false: ${true * false}`);      // Output: 0
console.log(`true / false: ${true / false}`);      // Output: Infinity
console.log(`false / true: ${false / true}`);      // Output: 0
console.log(`true % false: ${true % false}`);      // Output: NaN
console.log("\n");


/** Null value from null literal */
let nullVar = null;
console.log(`nullVar: ${nullVar}`)   // Output: null

/** Arithmetic operations on null value */
console.log(`null + null: ${null + null}`);       // Output: 0
console.log(`null - null: ${null - null}`);       // Output: 0
console.log(`null * null: ${null * null}`);       // Output: 0
console.log(`null / null: ${null / null}`);       // Output: NaN
console.log(`null % null: ${null % null}`);       // Output: NaN
console.log("\n");


/** Undefined value from unassigned variable */
let undefinedVar1;
console.log(`undefinedVar1: ${undefinedVar1}`);      // Output: undefined

/** Undefined value from `undefined` literal */
let undefinedVar2 = undefined;
console.log(`undefinedVar2: ${undefinedVar2}`);     // Output: undefined

/** Arithmetic operations on undefined values */
console.log(`undefined + undefined: ${undefined + undefined}`);     // Output: NaN
console.log(`undefined - undefined: ${undefined - undefined}`);     // Output: NaN
console.log(`undefined * undefined: ${undefined * undefined}`);     // Output: NaN
console.log(`undefined / undefined: ${undefined / undefined}`);     // Output: NaN
console.log(`undefined % undefined: ${undefined / undefined}`);     // Output: NaN
console.log("\n");


/** String value from string literal */
let stringVar1 = "foobar";
let stringVar2 = 'foobar';
let stringVar3 = `${"foo" + "bar"}`;
console.log(`stringVar1: ${stringVar1}`);       // Output: foobar
console.log(`stringVar2: ${stringVar2}`);       // Output: foobar
console.log(`stringVar3: ${stringVar3}`);       // Output: foobar


/** Arithmetic operations on string values */
console.log(`"foo" + "bar": ${"foo" + "bar"}`)        // Output: foobar
console.log(`"foo" - "bar": ${"foo" - "bar"}`)        // Output: NaN
console.log(`"foo" * "bar": ${"foo" * "bar"}`)        // Output: NaN
console.log(`"foo" * 3: ${"foo" * 3}`)                // Output: NaN
console.log(`"foo" / "bar": ${"foo" / "bar"}`)        // Output: NaN
console.log(`"foo" % "bar": ${"foo" % "bar"}`)        // Output: NaN
console.log("\n");


/** Number value from Number literal */
let numberVar1 = 42;
let numberVar2 = 42.0;
let numberVar3 = 0b101010;
let numberVar4 = 0o52;
let numberVar5 = 0x2A;
let numberVar6 = Infinity;
let numberVar7 = -Infinity;
let numberVar8 = NaN;

console.log(`numberVar1: ${numberVar1}`)        // Output: 42
console.log(`numberVar2: ${numberVar2}`)        // Output: 42
console.log(`numberVar3: ${numberVar3}`)        // Output: 42
console.log(`numberVar4: ${numberVar4}`)        // Output: 42
console.log(`numberVar5: ${numberVar5}`)        // Output: 42
console.log(`numberVar6: ${numberVar6}`)        // Output: Infinity
console.log(`numberVar7: ${numberVar7}`)        // Output: -Infinity
console.log(`numberVar8: ${numberVar8}`)        // Output: NaN

/** Arithmetic operations on Number values */
console.log(`42 + 42: ${42 + 42}`)      // Output: 84
console.log(`42 - 42: ${42 - 42}`)      // Output: 0
console.log(`42 * 42: ${42 * 42}`)      // Output: 1764
console.log(`42 / 42: ${42 / 42}`)      // Output: 1
console.log(`42 % 42: ${42 % 42}`)      // Output: 0
console.log(`Number.MAX_VALUE * 2: ${Number.MAX_VALUE * 2}`)    // Output: Infinity
console.log(`Number.MAX_VALUE * -2: ${Number.MAX_VALUE * -2}`)   // Output: -Infinity
console.log(`1 / 0: ${1 / 0}`)      // Output: Infinity
console.log(`-1 / 0: ${-1 / 0}`)    // Output: -Infinity
console.log("\n");


/** BigInt value from BigInt literal */
let bigIntVar1 = 42n;
console.log(`bigIntVar1: ${bigIntVar1}`);       // Output: 42

/** BigInt value from BigInt factory function */
let bigIntVar2 = BigInt(42);
console.log(`bigIntVar2: ${bigIntVar2}`)        // Output: 42

/** Arithmetic operations on BigInt values */
console.log(`42n + 42n: ${42n + 42n}`)      // Output: 84
console.log(`42n - 42n: ${42n - 42n}`)      // Output: 0
console.log(`42n * 42n: ${42n * 42n}`)      // Output: 1764
console.log(`42n / 42n: ${42n / 42n}`)      // Output: 1
console.log(`42n % 42n: ${42n % 42n}`)      // Output: 0
console.log("\n");


/** Symbol value from Symbol factory function */
let symbolVar1 = Symbol("foo");
let symbolVar2 = Symbol("foo");
let SymbolVar3 = Symbol(42);

/** Illegal attempt o print Symbol value as Symbols do not have a string representation. */
// console.log(`symbolVar1: ${symbolVar1}`)    // TypeError
// console.log(`symbolVar2: ${symbolVar2}`)    // TypeError
// console.log(`symbolVar3: ${symbolVar3}`)    // TypeError

/** Symbols created using the Symbol factory function are always unique. */
console.log(`symbolVar1 === SymbolVar2: ${symbolVar1 === symbolVar2}`)

/** Symbols created using Symbol.for() function are only the same given the same input key */
let symbolVar4 = Symbol.for("bar");
let symbolVar5 = Symbol.for("bar");
console.log(`symbolVar4 === symbolVar5: ${symbolVar4 === symbolVar5}`);     // Output: true


/** Illegal use of arithmetic operations on Symbol values */
// console.log(`Symbol("foo") + Symbol("bar": ${Symbol("foo") + Symbol("bar")}`)    // TypeError
// console.log(`Symbol("foo") - Symbol("bar": ${Symbol("foo") - Symbol("bar")}`)    // TypeError
// console.log(`Symbol("foo") * Symbol("bar": ${Symbol("foo") * Symbol("bar")}`)    // TypeError
// console.log(`Symbol("foo") / Symbol("bar": ${Symbol("foo") / Symbol("bar")}`)    // TypeError
// console.log(`Symbol("foo") % Symbol("bar": ${Symbol("foo") % Symbol("bar")}`)    // TypeError

/** Legal use of Symbols to create unique object property keys less prone to collision. */
let studentId = Symbol("StudentId")
let student = {[studentId]: "12345", studentName: "John Doe", studentYear: "sophomore"};
console.log("\n")
console.log("\n");

/** JavaScript Objects are used to create Custom/Aggregate Types.
 *  - JavaScript supports both prototype-based Object-Oriented Programming in which objects are created directly, and
 *    class-based Object-Oriented Programming in which classes can be defined for instantiating objects.
 */

/** Object instance from Object Literal */
let dog1 = {"name": "Foo", "age": 8, weightInLbs: 32.5, isFriendly: true}
dog1.bark = () => {
    console.log(`${dog1.name} barks!`);
}
console.log(dog1);
dog1.bark();
console.log("\n");

/** Object instance from function constructor */
function Dog(name, age, weightInLbs, isFriendly) {
    this.name = name;
    this.age = age;
    this.weightInLbs = weightInLbs;
    this.isFriendly = isFriendly;
    this.bark = () => {
        console.log(`${this.name} barks!`);
    }
}

let dog2 = new Dog("Foo", 8, 32.5, true);
console.log(dog2);
dog2.bark();
console.log("\n");

/** Object instance from class*/
class Dog2 {
    constructor(name, age, weightInLbs, isFriendly) {
        this.name = name;
        this.age = age;
        this.weightInLbs = weightInLbs;
        this.isFriendly = isFriendly;
    }

    bark() {
        console.log(`${this.name} barks!`);
    }
}

let dog3 = new Dog2("Foo", 8, 32.5, true);
console.log(dog3);
dog3.bark();
console.log("\n");

/** accessing and modifying object properties */
console.log(`dog1.name: ${dog1.name}`)
console.log(`dog1['name']: ${dog1['name']}`)
console.log(`dog1.age: ${dog1.age}`)
console.log(`dog1["age"]: ${dog1["age"]}`)
dog1.bark()
dog1.name = "Bar";
dog1["age"] = 32;
dog1.bark = (sound) => {
    console.log(`${dog1.name} barks ${sound}!`);
}
console.log(`dog1.name: ${dog1.name}`)
console.log(`dog1.age: ${dog1.age}`)
dog1.bark("woof woof");
console.log("\n");

/** JavaScript arrays are objects */
let arr1 = ["foo", "bar", "baz", 42];
console.log(`typeof arr1: ${typeof arr1}`);
console.log("\n");