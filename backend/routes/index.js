var express = require('express');
var router = express.Router();
const ctrl = require('./home.ctrl');
const passport = require('passport');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

router.post('/api/login', isNotLoggedIn, (req, res, next) => {
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
        return req.login(user, (loginError) => {
            if(loginError) {
                console.error(loginError);
                return next(loginError);
            }
            const response = {success: true};
            return res.send(response);
        });
    })(req, res, next);
});
router.post('/api/signUp', isNotLoggedIn, ctrl.process.signUp);

router.get('/api/kakao', passport.authenticate('kakao'));

module.exports = router;
