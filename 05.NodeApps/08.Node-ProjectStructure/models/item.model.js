class Item {
    static isValid(model) {
        return typeof model !== "undefined" &&         
            typeof model.text === "string" &&
            model.text.lenght > 3;
    }
}

module.exports = Item;



