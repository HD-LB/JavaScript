
const async = () => {
    return Promise.resolve();
};

const config = require("./config");

async()
    .then(() => require("./db").init(config.connectionString))
    .then((db) => require("./data/base").init(db))
    .then((data) => require("./app").init(data))
    .then((app) => {
        app.listen(config, () => console.log(`Magic happens at : ${config.port}`));
    });