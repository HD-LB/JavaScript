const passField = document.querySelector("#pass-Field");
const button = document.querySelector("#enter");
const msgField = document.querySelector("#message");

const checkPassword = (function () {
    const CORRECT_PASSWORD = "pesho";

    return function () {
        const enteredPassword = passField.value;
        passField.value = ""; //deleting the password from the field

        return new Promise((resolve, reject) => {

            if (enteredPassword === "") {
                reject("Empty password");
            }

            else if (enteredPassword === CORRECT_PASSWORD) {
                resolve(true);
            }
            else {
                resolve(false);
            }
        });

    };
}());

button.addEventListener("click", () => {
    checkPassword()
        .then(logInSucces => {
            if (logInSucces) {
                msgField.innerHTML = "succes";
            }
            else {
                msgField.innerHTML = "Wrong password";
            }
        },
            errMessage => {
                msgField.innerHTML = `Error: ${errMessage}`;
            }        
    );
});