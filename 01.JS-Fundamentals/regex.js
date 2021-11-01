/* globals console */
/*jshint strict:false */

let regex = /Dumbledoor.*Hogwards/g;//g - global, looks for it everywhere
let str = `Dumbledoor,
Dumbledoor Hoagwards,
Dumbledoor loves Hogwards,
Dumbledoor is the headmaster of Hogwards`;  

console.log(regex.test(str)); //true

console.log(regex.exec(str));//returns the description --> index: 1 and the whole Array

console.log(str.match(regex));//returns an array of all the matches

console.log(str.replace(/Dumbledoor/g, 'Someone else'));//looks globaly and replaces 