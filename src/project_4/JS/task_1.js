/**
 * @file   task_1
 * @brief  Program to demonstrate how to implement a polymorphic bubble sort algorithm in JavaScript capable of sorting any time in any desired order.
 * @author Francis O'Hara
 * @date   5/4/25
 */
/**
 * Sorts the given array according to the given comparison function.
 *
 * @param arr the array to be sorted.
 * @param comparisonFunction Custom function for comparing each element of the array during sorting.
 */
function bubbleSort(arr, comparisonFunction) {
    for (let i = 0; i < arr.length; i++) {
        let hasSwapped = false;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (comparisonFunction(arr[j], arr[j + 1]) === 1) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                hasSwapped = true;
            }
        }
        if (!hasSwapped) {
            return;
        }
    }
}

/** Student class for testing custom sorting with comparison function.
 */
class Student {
    constructor(name, gpa) {
        this.name = name;
        this.gpa = gpa;
    }

    toString() {
        return `{name: '${this.name}', gpa: ${this.gpa}}`;
    }
}

/**
 * Comparison function that compares Student instances according to their GPA.
 *
 * @param student1 Student instance to be compared with `student2`
 * @param student2  Student instance to be compared with `student1`
 * @returns {number} Returns -1 if `student1` is greater than `student2`, -1 if `student1` is less than `student2`, and
 *                   0 if both students are equal.
 */
function compareStudent(student1, student2) {
    if (student1.gpa > student2.gpa) {
        return 1;
    } else if (student1.gpa < student2.gpa) {
        return -1;
    } else {
        return 0;
    }
}

/**
 * Comparison function for a sorting function that compares two Numbers in descending order.
 *
 * @param num1  The Number to be compared to `num2`.
 * @param num2  The Number to be compared to `num1`
 * @returns {number} Returns -1 if `student1` is greater than `student2`, -1 if `student1` is less than `student2`, and
 *                    0 if both students are equal.
 */
function compareNumbersInDescendingOrder(num1, num2) {
    if (num1 > num2) {
        return -1;
    } else if (num1 < num2) {
        return 1;
    } else {
        return 0;
    }
}

function main() {
    /**
     * Test `bubbleSort()` on sorting array of custom types (`Student` instances).
     */
    {
        let studentArray = [
            new Student("Erwin", 3.7),
            new Student("Levi", 4.0),
            new Student("Mikasa", 4.21),
            new Student("Armin", 4.3),
            new Student("Eren", 2.5),
            new Student("Pieck", 3.8),
            new Student("Falco", 3.8)
        ];

        console.log(`Before BubbleSort:`);
        for (student of studentArray) {
            console.log(`${student}`);
        }

        bubbleSort(studentArray, compareStudent);

        console.log(`\nAfter BubbleSort:`);
        for (student of studentArray) {
            console.log(`${student}`);
        }
    }

    /**
     * Test `bubbleSort()` on sorting array of Numbers.
     * The comparison function used sorts in descending order.
     */
    {
        let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

        console.log("Before BubbleSort:");
        console.log(numbers)

        bubbleSort(numbers, compareNumbersInDescendingOrder);

        console.log("\nAfter BubbleSort:");
        console.log(numbers)
    }

}

main();