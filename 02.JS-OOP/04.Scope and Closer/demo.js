
/* globals console */
/*jshint strict:false */

const peopleList = (function () {
    const people = [];

    function addPerson(name, age, gender) {
        if (typeof name !== "string") {
            throw "Name is not a string";
        }
        if (!name.match(/^[A-Z][a-z]*$/)) {
            throw "Name contains invalid symbols";
        }

        people.push({
            name,
            age,
            gender
        });
    }

    function getPeople() {
        return people.map(p => {
            return {
                name: p.name,
                age: p.age,
                gender: p.gender
            };
        });
    }

    return {
        addPerson: addPerson, //proparties : expressions, that have to be evaluated
        getPeople: getPeople
    };
}());

peopleList.addPerson("John", 45, true);

let pList = peopleList.getPeople();

pList[0].name = "invalid";
console.log(pList);