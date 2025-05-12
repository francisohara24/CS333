/**
 * @file   lltest
 * @brief  Contains tests for the LinkedList class implemented in `LinkedList.js`.
 * @author Francis O'Hara
 * @date   5/8/25
 */
const LinkedListModule = require("./LinkedList");
const LinkedList = LinkedListModule.LinkedList;

/**
 * Returns the square of the given number.
 *
 * @param num A NumberWrapper instance containing the number to be squared.
 */
function squareNumber(num) {
    num.number = num.number * num.number;
}

/**
 * Prints the given NumberWrapper instance as a number value to standard output.
 *
 * @param num
 */
function printNumber(num) {
    console.log(num.toString());
}

/**
 * Compares the number values of the given NumberWrapper instances for equality.
 *
 * @param num1
 * @param num2
 */
function compareNumber(num1, num2) {
    if (num1.number === num2.number) {
        return true;
    }
    return false;
}

/**
 * Wrapper class for the Number primitive.
 * Since primitive types in JavaScript are pass by value and JavaScript does not support explicit references to variables,
 * a wrapper class is needed to allow modifying content of a LinkedList of Numbers using a mapping function such as `SquareNumber()` above.
 * This wrapper class was therefore created to allow modifying the content of a LinkedList of Numbers since object types in JavaScript are pass reference by value.
 */
class NumberWrapper {
    constructor(number) {
        this.number = number;
    }

    toString() {
        return `${this.number}`
    }
}

class Student {
    constructor(name, gpa) {
        this.name = name;
        this.gpa = gpa;
    }

    toString() {
        return `{name: ${this.name}, gpa: ${this.gpa}}`;
    }
}

/**
 * Prints a string representing the given `Student` instance to standard output.
 * @param student
 */
function printStudent(student) {
    console.log(student.toString());
}

/**
 * Compares two Student instances for equality.
 * @param student1 The `Student` instance to be compared with `student2`.
 * @param student2 The `Student` instance to be compared with `student1`.
 * @returns {boolean} `true` if both students have the same name and gpa. Otherwise, `false`.
 */
function compareStudent(student1, student2) {
    return (student1.name === student2.name) && (student1.gpa === student2.gpa);
}

/**
 * Reset the gpa of the given student to 0.0.
 *
 * @param student A `Student` instance.
 */
function resetGPA(student) {
    student.gpa = 0.0;
}


/** Tests for LinkedList of type Number */
/*{
    let list;
    let target;
    let a;

    // instantiate a LinkedList
    list = new LinkedList();

    // push data to the list
    for (let i = 0; i < 20; i += 2) {
        list.push(new NumberWrapper(i));
    }

    // printing the list and testing map
    console.log("After initialization:");
    list.map(printNumber);

    list.map(squareNumber);

    console.log("\nAfter squaring:");
    list.map(printNumber);

    // testing removing data
    target = new NumberWrapper(16);
    a = list.remove(target, compareNumber);
    if (a != null) {
        console.log(`\nremoved: ${a.toString()}`);
    } else {
        console.log(`\nNo instance of ${target.toString()}`);
    }

    target = new NumberWrapper(11);
    a = list.find(target, compareNumber);
    if (a != null) {
        console.log(`\nFound: ${a.toString()}`);
    } else {
        console.log(`\nNo instance of ${target.toString()}`);
    }

    a = list.remove(target, compareNumber);
    if (a != null) {
        console.log(`\nRemoved: ${a.toString()}`);
    } else {
        console.log(`\nNo instance of ${target.toString()}`);
    }

    console.log("\nAfter removals:");
    list.map(printNumber);


    // testing appending data
    list.append(target);

    console.log("\nAfter append:");
    list.map(printNumber);


    // test clearing
    list.clear();

    console.log("\nAfter clear:");
    list.map(printNumber);


    // rebuild and test append and pop
    for (let i = 0; i < 5; i++) {
        list.append(new NumberWrapper(i));
    }


    console.log("\nAfter appending:");
    list.map(printNumber);

    a = list.pop();
    console.log(`\npopped: ${a.toString()}`);

    a = list.pop();
    console.log(`popped: ${a.toString()}`);


    console.log("\nAfter popping:");
    list.map(printNumber);

    console.log(`\nList size: ${list.size()}`);
    console.log("--------------------------------------------------------");

}*/


/**
 * Tests for LinkedList of type Student
 */
{
    let list;
    let a;
    let target;

    // create a list
    list = new LinkedList();

    // initial student data
    let names = ["Armin", "Eren", "Mikasa", "Levi", "Bertholdt"];
    let gpas = [3.3, 3.4, 3.5, 4.0, 4.3];

    // push data on the list
    for (let i = 0; i < 5; i++) {
        list.push(new Student(names[i], gpas[i]));
    }

    // printing the list and testing map
    console.log("After initialization:");
    list.map(printStudent);

    list.map(resetGPA);

    console.log("\nAfter resetting gpa:");
    list.map(printStudent);


    // testing removing data
    target = new Student("Levi", 0);
    a = list.remove(target, compareStudent);
    if (a != null) {
        console.log(`\nremoved: ${a.toString()}`);
    } else {
        console.log(`\nNo instance of ${target.toString()}`);
    }

    target = new Student("Zeke", 7.0);
    a = list.find(target, compareStudent);
    if (a != null){
        console.log(`\nFound: ${a.toString()}`);
    } else {
        console.log(`\nNo instance of ${target}`);
    }

    a = list.remove(target, compareStudent);
    if (a != null){
        console.log(`\nFound: ${a.toString()}`);
    } else {
        console.log(`\nNo instance of ${target}`);
    }

    console.log("\nAfter removals:");
    list.map(printStudent);


    // testing appending data
    list.append(target);

    console.log("\nAfter append:");
    list.map(printStudent);


    // test clearing
    list.clear();

    console.log("\nAfter clear:");
    list.map(printStudent);


    // rebuild and test append and pop
    for (let i = 0; i < 5; i++){
        list.append(new Student(names[i], gpas[i]));
    }

    console.log("\nAfter appending:");
    list.map(printStudent);

    a = list.pop();
    console.log(`\npopped: ${a.toString()}`);

    a = list.pop()
    console.log(`popped: ${a.toString()}`);

    console.log("\nAfter popping:");
    list.map(printStudent);

    console.log(`List size: ${list.size()}`);

}