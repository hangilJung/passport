"use strict";

const User = require('../models/User');
const passport = require('../passport');

const process = {
    signUp: async (req, res) => {
        const user = new User(req.body);                
        const response = await user.signUp();
        return res.send(response);
    },

};

module.exports = {
    process,
}