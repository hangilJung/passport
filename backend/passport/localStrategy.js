const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const Member = require('../models/table/member');

module.exports = () => {
  passport.use(new LocalStrategy({
    usernameField: 'userid',
    passwordField: 'userpw',
  }, async (userid, userpw, done) => {
    try {
      const exUser = await Member.findOne({ where: { userid } });
      if (exUser) {
        const result = await bcrypt.compare(userpw, exUser.userpw);
        if (result) {
          done(null, exUser);
        } else {
          done(null, false, { message: '비밀번호가 일치하지 않습니다.' });
        }
      } else {
        done(null, false, { message: '가입되지 않은 회원입니다.' });
      }
    } catch (error) {
      console.error(error);
      done(error);
    }
  }));
};