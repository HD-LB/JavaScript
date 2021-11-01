const button = document.getElementById("root)");

// let clickCount = 0;

// const promise = new Promise((resolve, reject) => {
//     document.getElementById("button")
//         .addEventListener("click", () => resolve());
// });

// promise.then(value => {
//     console.log("Promis fulfilled");
// });


const getANumber = new Promise((resolve, reject) => {
    setTimeout(() => {
        let number = resolve(Math.random() * 6 + 1 | 0 ); //from 1 to 6

        if (number >= 5 ) {
            resolve(number);
        }
        else {
            reject(number);
        }
    }, 1000);
});

getANumber.then(
    number => console.log("Success " + number),
    number => console.log("Error " + number));