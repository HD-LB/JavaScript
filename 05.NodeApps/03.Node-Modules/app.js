/* globals __dirname */ //__dirname - current directory

const fs = require("fs"); //fs - file system

const fetch = require("node-fetch"); 

//const printerModule = reqire("./utils/printer");

// let printer = printerModule.getPrinter();
// let Printer = printerModule.Printer(); //class

//Newer Way 
const {getPrinter, Printer} = reqire("./utils/printer"); //destructuring assignments

fs.readdirSync(__dirname)
    .forEach((fiel) => {
        printer.print(file);
    });