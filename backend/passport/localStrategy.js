const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const Member = require('../models/table/member');

module.exports = () => {
  passport.use(new LocalStrategy({
    usernameField: 'userid',
    passwordField: 'password',
  }, async (userid, password, done) => {
    try {
      console.log("local에서 userid", userid);

      const exUser = await Member.findOne({ where: { userid } });
      if (exUser) {
        const result = await bcrypt.compare(password, exUser.userpw);
        if (result) {
          done(null, exUser); //사용자가 조회된 경우
        } else {
          done(null, false, { msg: '비밀번호가 일치하지 않습니다.' });
        }
      } else {
        done(null, false, { msg: '가입되지 않은 회원입니다.' });
      }
    } catch (error) {
      console.error(error);
      done(error); //db조회중 에러 발생할 경우
    }
  }));
};