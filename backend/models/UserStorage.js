"user strict";

const connection = require('../databases/db');

class UserStorage {

    static save(userInfo) {
        return new Promise((resolve, reject) => {
            const user = {
                userid : userInfo.user.userid,
                password : userInfo.user.password,
            };       
            
            const query = 'insert into member values(?,?)';

            connection.query(query, [user.userid, user.password], (err, results) => {
               if(results.affectedRows > 0) {
                   resolve({success: true} );
               } 
            });
        });        
    };

    static getUser(userInfo) {
        return new Promise((resolve, reject) => {
            const user = {
                userid : userInfo.user.userid,
                password : userInfo.user.password,
            };  

            const query = 'select * from member where id=? and pw=?';

            connection.query(query, [user.userid, user.password], (err, results) => {                
                if(err) {
                    reject(`${err}`);
                } else {
                    resolve(results[0]);
                }              
             });
        });
    };
}

module.exports = UserStorage;