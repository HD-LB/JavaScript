/*  Task 1.
Write a function that sums an array of numbers: 
Numbers must be always of type Number
Returns null if the array is empty
Throws Error if the parameter is not passed (undefined)
Throws if any of the elements is not convertible to Number
*/

function sum() {
    return function (numbers) {
        for (let i = 0; i < numbers.length; i += 1) {
            if (Number.isNaN(Number(numbers[i]))) {
                throw "This is not a number.";
            }
        }

        if (numbers.length === 0) {
            return null;
        }
        return numbers.reduce((x, y) => x + (+y), 0);
    };
}

module.exports = sum;