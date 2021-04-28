var express = require('express');
var router = express.Router();
const ctrl = require('./home.ctrl');
const passport = require('passport');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

router.post('/api/signUp', isNotLoggedIn, ctrl.process.signUp);
router.post('/api/login', isNotLoggedIn, ctrl.process.login);
router.get('/api/kakao', passport.authenticate('kakao'));

module.exports = router;
