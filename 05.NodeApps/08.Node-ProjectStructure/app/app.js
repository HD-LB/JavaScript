const express = require("express");
const bodyParser = require("body-parser");

const init = (data) => {
    const app = express();

    //config start
    app.set("view engins", "pug");
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));  
    //config end

    require("./routers").attachTo(app, data);

   

    return Promise.resolve(app);
};


module.exports = {
    init,
};