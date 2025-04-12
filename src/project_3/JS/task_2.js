/**
 * @file   task_2.js
 * @brief  Program to demonstrate how to implement binary search in JavaScript.
 * @author Francis O'Hara
 * @date   4/12/25
 */

/**
 * Returns the index of a given item in a sorted array using the binary search algorithm.
 *
 * @param arr        The sorted array to be searched.
 * @param target     The item to be searched for in the array.
 * @returns {number} A non-negative integer denoting the index of the target item in array `arr`.
 *                   Returns -1 if the target item was not found in the array.
 */
function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.trunc((start + end) / 2);
    let target_index = -1;

    while (start <= end) {
        if (arr[middle] === target) {
            target_index = middle;
            break;
        }
        if (arr[middle] > target) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.trunc((start + end) / 2);
    }

    return target_index;
}


/** Example Usage 1 */
arr1 = [11, 15, 19, 34, 42, 47, 49, 81, 82, 90]
target = 19;
result = binarySearch(arr1, target);

console.log("arr1: " + arr1);

if (result === -1) {
    console.log("The target " + target + " was not found in the array.")
} else {
    console.log("The target " + target + " was found at index " + result + " of the array.\n")
}


/** Example Usage 2 */
arr2 = [11, 15, 19, 34, 42, 47, 49, 81, 82, 90]
target = 2;
result = binarySearch(arr2, target);

console.log("arr2: " + arr2);

if (result === -1) {
    console.log("The target " + target + " was not found in the array.")
} else {
    console.log("The target " + target + " was found at index " + result + " of the array.")
}
