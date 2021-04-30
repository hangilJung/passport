"use strict";

const User = require('../models/User');
const passport = require('passport');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const process = {
    signUp: async (req, res) => {
        const user = new User(req.body);               
        const response = await user.signUp();
        return res.send(response);
    },
    login: (req, res, next) => {
        passport.authenticate('local', (err, user, info) => {
            if(err) {
                console.error(err);
                return next(err);
            }
            if(!user) {
                const response = {success: false};
                console.log(info.message);
                return res.send(response);
            }
            return req.login(user, async (loginError) => {
                if(loginError) {
                    console.error(loginError);
                    return next(loginError);
                }
                const response = {success: true, user};
                await req.session.save();
                return res.send(response);
            });
        })(req, res, next);
    },
    logout: (req, res) => {
        req.logout();
        req.session.save(() => {
            res.send({logout: true});
        });
    },
    get: (req, res) => {
        if(req.user) {
            return res.send({ sess: true, user: req.user.userid });
        } else {
            return res.send({ sess: false});
        }         
    },
};

module.exports = {
    process,
}