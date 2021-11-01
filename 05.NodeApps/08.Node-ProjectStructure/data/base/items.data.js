const BaseData = require("./base/base.data");
const Item = require("../models/item.model");
const { isObjectMember } = require("@babel/types");

class ItemsData extends BaseData {
    constructor(db) {
        super(db, Item, Item);
    }

    _isModelValid(model) {
        // custom validation
        return super._isModelValid;
    }

}

module.exports = ItemsData;  