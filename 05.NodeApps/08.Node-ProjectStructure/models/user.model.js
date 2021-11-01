const BaseData = require("./base/base.data");
const User = require("../models/user.model");
const { thisExpression } = require("@babel/types");

class UserData extends BaseData {
    constructor(db) {
        super(db, User);
    }

    checkPassword(username, password) {
        return this.collection.findOne({
            username
        })
            .then((user) => {
                if(!user) {
                    throw new Error("Invalid user");
                }
                if (user.password !== password) {
                    throw new Error("Invalid password");
                }
                return true;
            });
    }
}

module.exports = UserData;