"use strict";

const passport = require('passport');
const bcrypt = require('bcrypt');
const Member = require('../models/table/member');


class User {
    constructor(body) {
        this.body = body;
    }

    async signUp() {
        const { userid, password } = this.body.user;

        try {
            const exUser = await Member.findOne({ where: { userid }});
            if(exUser) {
                return { success: false };
            }
            const hash = await bcrypt.hash(password, 12);
            await Member.create({
                userid,
                userpw: hash,
            });
            return { success: true };

        } catch (error) {
            console.error(error);
            return { success: false };
        }
        
    }

    // async login() {
    //     const client = this.body;
    //     try {
    //         const {userid, password} = await Member.getUser(client);
            
    //         if(id) {
    //             if(id === client.user.userid && pw === client.user.password){
    //                 return { success: true, userid: id};
    //             }
    //             return { success: false, msg: "비밀번호가 다릅니다."};
    //         }
    //         return { success: false, msg: "존재하지않는 아이디입니다."};
           
    //     } catch (error) {
    //         return { success: false, msg: "아이디와 비밀번호가 다릅니다."};
    //     }
    // }
}

module.exports = User;