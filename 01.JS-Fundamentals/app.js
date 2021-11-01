/* globals console */
/*jshint strict:false */

////For-Loop
// var condition = true;

// if (condition) {
//     console.log('It is true');
// }

// for(let i = 0; i < 10; i += 1) {
//     console.log(i);
// }


////Examples
// var x = 123,
//     y = 134,
//     bigger;

// bigger = x;

// if (bigger < y) {
//     bigger = y;
// }
// console.log(`The bigger number is ${bigger}.`);

//var s = 'Mika';
// console.log(`my name is ${s}`);


// //If-Else-Condition//
// var isUserLogged = true;

// if (isUserLogged) {
//     console.log(`Show profile`);
// }
// else {
//     console.log(`"SHow login form`);
// }

// var dayOfWeek = 5;
// var dayName = `Monday`;


// //Switch-Condition
// switch (dayName) {
//     case `Monday`:
//     case `Tuesday`:
//     case `Wednesday`:
//     case `Thurday`:
//     case `Friday`:
//         console.log(`Work day`);
//         break;

//     case `Saturday`:
//     case `Sunday`:
//         console.log(`Weekedn`);
//         break;

// }

// switch (dayOfWeek) {
//     case 1:
//         console.log(`Monday`);
//         break;
//     case 2:
//         console.log(`Tuesday`);
//         break;
//     case 3:
//         console.log(`Wednesday`);
//         break;
//     case 4:
//         console.log(`Thursday`);
//         break;
//     case 5:
//         console.log(`Friday`);
//         break;
//     case 6:
//         console.log(`Saturday`);
//         break;
//     case 7:
//         console.log(`Sunday`);
//         break;
//     default:
//         break;
// }


//While-Condition
var max = 10,
    sum = 0,
    n;

n = 0;

while (n <= max) {
    sum += n;
    n += 1;
}
console.log(sum);


//Prime 
var number = 49,
    isPrime,
    d,
    maxDeviser;

maxDeviser = Math.sqrt(number);

isPrime = true;
d = 2;

while (isPrime && d <= maxDeviser) {
    if (number % d === 0) {
        isPrime = false;
    }
    d += 1;
}
console.log(`${number} is prime? --> ${isPrime}`);


//Product
var from = 7,
    to = 10,
    product;

product = 1;
while (from <= to) {
    product *= from;
    from += 1;
}
console.log(product);

//Decimal in Binary
var dec = 14;

// var bin = '';
// while (dec) {
//     // bin = dec % 2 + bin;
//     // dec /= 2;
//     // dec |= 0;

//     bin = (dec & 1) + bin;
//     dec >>= 1;
// }

//Or
var bin = dec.toString(2);

console.log(bin);

//For-Loop
var i,
    max = 10,
    power = 1;

for (i = 0; i, 10; i += 1) {
    console.log(`Number: ${i}`);
}
for (i = 0; i < max; i += 1) {
    console.log(power);
    power <<= 1;
}

//Prime number in an interval
var from = 5,
    to = 1000;
var number,
    i,
    maxDevisor,
    isPrime;

isPrime = true;

for (number = from; number <= to; number += 1) {
    isPrime = true,
    maxDevisor = Math.sqrt(number);
    for (i = 2; i <= maxDevisor; i += 1) {
        if (0 === number % i) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${number} is prime`);    
    }
}
