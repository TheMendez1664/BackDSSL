const crudRepository = require("../lib/crudRepository");
const User = require("../models/User");


class UserRepository extends crudRepository{
    constructor(){
        super(User);
    }

    //add any user-specific repository methods here
}

module.exports = new UserRepository();