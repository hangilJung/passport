"use strict";

const User = require('../models/User');

const process = {
    signUp: async (req, res) => {
        const user = new User(req.body);                
        const response = await user.signUp();
        return res.send(response);
    },

    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);
    }
};

module.exports = {
    process,
}