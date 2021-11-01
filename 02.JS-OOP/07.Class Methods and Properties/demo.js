/*globals console */

class Cat {
    constructor(name) {
        this._name = name;
    }

    meow() {
        console.log(`${this._name} says meow.`);
    }
}

const c = new Cat("Kitty");
c.meow();