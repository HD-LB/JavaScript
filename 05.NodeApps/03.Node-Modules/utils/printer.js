/* globals exports */


const print = (msg) => {
    console.log(msg);
};


module.exports = {
    print,
    Printer,
    getPrinter() {
        return new Printer();
    },
};