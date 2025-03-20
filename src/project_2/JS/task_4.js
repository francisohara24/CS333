/** instantiate Date instance with current date and time */
let date = new Date();

/** extract year from date instance */
let year = date.getFullYear();


/**
 * Checks whether the given `year` is a leap year.
 * @param {number} year The year to be checked.
 * @returns {boolean} A boolean that indicates whether `year` is a leap year. If `true`, `year` is a leap year. Otherwise,
 *                      `year` is not a leap year.
 */
function isLeap(year) {
    let leap = false;
    if (year % 4 === 0) {
        if (year % 100 === 1 || year % 400 === 0) {
            leap = true;
        }
    }
    return leap;
}

console.log("Hello World!\nToday's Date and Time: " + date);

if (isLeap(year)) {
    console.log(year + " is a leap year!");
}
else
    console.log(year + " is not a leap year!");
