/* globals console */
/*jshint strict:false */

// function pringLogoDecl() {
//     console.log(`JavaScript Fundamentals`);
//     console.log(`Dependancy Injection`);
// }
// //Call the Function
// pringLogoDecl();

// //Function Expresion, The Expresion is called right away, bacause of the ()
// var printLogoExpr = function () {
//     console.log(`JavaScript Fundamentals`);
//     console.log(`Dependancy Injection`);
// }();

// //Triangle

// function printLine(count) {
//     var line = "",
//         i;
//     for (i = 0; i < count; i += 1) {
//         line += `${i + 1}`;
//     }
//     console.log(line);
// }

// function printTriangle(n) {
//     var row;
//     for (row = 0; row < n; row += 1) {
//         printLine(row + 1);

//     }
//     for (row = n - 2; row >= 0; row -= 1) {
//         printLine(row + 1);
//     }
// }

// printTriangle(5);

// //Prime Number
// function isPrime(number) {
//     var devisor,
//         maxDevisor = Math.sqrt(number);

//     for (devisor = 2; devisor <= maxDevisor; devisor += 1) {
//         if (0 === number % devisor) {
//             return false;
//         }
//     }

//     return true;
// }

// isPrime(15);

// //Array

// var arr = new Array(5);
// arr[10] = 5;
// console.log(arr);

// var numbers = [1, 2, 3, 4],
//     i;

// //[0: numbers.length - 1]
// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);

// for (i = 0; i < numbers.length; i += 1) {
//     console.log(numbers[i]);
// }

// //Index times 5
// var n = 10;
// var array = [],
//     i;

// for (i = 0; i < n; i += 1) {
//     array[i] = i * 5;
// }

// console.log(array);

// //Reversed Arreay
// var arr = [1, 2, 3, 4, 5, 6, 7, 8],
//     i,
//     j,
//     reversedArr = [];

// for (i = 0; i, arr.length; i += 1) {
//     j = arr.length - i - 1;
//     reversedArr[j] = array[i];
// }

// console.log(array);
// console.log(reversedArr);

//Array - Examples
var arr = [12, 13, 14, 15],
    i,
    squares = [],
    item,
    index = 0;


for (i = 0; i < arr.length; i += 1) {
    console.log(`arr[${i}] = ${arr[i]}`);
}

for (i = 0; i < arr.length; i += 1) {
    squares[i] = arr[i] * arr[i];
}
console.log(squares[i]);

for (item of arr) {
    console.log(item * item);
}

//push & unshift
//pop 7 shift

console.log(arr);

arr.push(`Tail`); //adds an element to the end of the array
console.log(arr);

arr.unshift(`Head`); //adds an element to the begining of the array
console.log(arr);

var tail = arr.pop; //deletes an element from the end of the array
console.log(arr);

var head = arr.shift;
console.log(arr);//deletes the first element of the array
console.log(head);

var arr = [`Head`, 15, 16, 17, 18, `Tail`];
console.log(arr.join);
console.log(arr.join(`!---!---!`));

//Concatinating
var x = [1, 2, 3],
    y = [`One`, `Two`, `Three`],
    result = [];

result = [].concat(x, y);//equivalent to result = [...x, ...y];
console.log(x);
console.log(y);
console.log(result);

x.push(...y); // Push every element from y
console.log(x);


y = x.slice(1, 3); //from 1st to 3rd without the 3rd
console.log(y);

//Splice --> Removes count elements, starting from index position
//       --> Adds elements at position index
//       --> Returns a new array, containing the removed elements]

var x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
x.splice(2, 3, `Five`); //deletes on index 2 3 elements and adds `Five
console.log(x);

x.splice(7, 1); //deletes on index 7 1 element
console.log(x);

x.splice(8, 0, `John`);//inserts in the array, without deleting
console.log(x);




