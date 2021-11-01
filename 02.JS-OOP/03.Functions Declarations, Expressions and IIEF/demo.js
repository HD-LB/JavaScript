
/* globals console */
/*jshint strict:false */

// function func(x, y) {
//     return x + y;
// }

// console.log(func(4, 7));
// console.log(func.length);


// const modifiers = [
//     function (x) { return x + 7; },
//     function (x) { return x * 2; },
//     function (x) { return 45; }
// ];

// modifiers.map(f => f(x)).forEach(x => console.log(x));


// function maxElement() {
//     let maxElement = arguments[0];
//     for (let i = 1; i < arguments.length; i+=1) {
//         maxElement = Math.max(maxElement, arguments[i]);
//     }  
//     return maxElement;
// }
// console.log(maxElement(2, 8, 4, 3, 9, 0));

[1, 2, 3, 4, 5].map(x => x * 2)
.forEach(x => console.log(x)); 
 
//Factorial Recursion
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return factorial(n - 1) * n;
}
console.log(factorial(5));

//Fibonacci
function fibonacci(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    return fibonacci (n - 2) + fibonacci ( n - 1);
}
console.log(fibonacci(10));


// //Immidiately Invoked Function Expressions - functions expressions can be invoked immediately after they are defined 
// const counter = (function () {
//     let value = 0;

//     function getNext() {
//         value +=1;
//         return value;
//     }

//     return getNext();
// }) ();

// console.log(counter()); //1
// console.log(counter()); //2
// console.log(counter()); //3