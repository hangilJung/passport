const passport = require('passport');
const local = require('./localStrategy');
const kakao = require('./kakaoStrategy');
const Member = require('../models/table/member');

module.exports = () => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {  //매개변수 id는 세션에 저장됨 값(req.session.passport.user)
        Member.findOne({ where: { id }})
        .then(user => done(null, user))
        .catch(err => done(err));
    });

    local();
    kakao();
};