/*globals console*/

class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    } 
}

let p = new Person("John", 45);
console.log(p);