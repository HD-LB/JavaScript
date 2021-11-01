
const { Router } = require("express");

const items = [{
    id: 1,
    name: "John"
}];


const attach = (app) => {
    const router = new Router();

    router
        .get("/", (req, res) => {
            res.send(items);
        })
        .post("/", (req, res) => {
            const item = req.body;
            item.id = items.length + 1;
            items.push(item);
            res.status(201) //201 => created
                .send(true);
        });
        app.use("/api/items)", router);
};

module.exports = attach;