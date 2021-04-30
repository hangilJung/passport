var express = require('express');
var router = express.Router();
const ctrl = require('./home.ctrl');
const passport = require('passport');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

router.post('/login', isNotLoggedIn, ctrl.process.login);
router.post('/signUp', isNotLoggedIn, ctrl.process.signUp);
router.post('/get', ctrl.process.get);

router.get('/logout', isLoggedIn, ctrl.process.logout);
router.get('/kakao', passport.authenticate('kakao'));


module.exports = router;
