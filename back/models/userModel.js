const dbHelper = require("../controllers/dbHelper");
const User = require("../models/user")
const crypto = require('crypto');
const AuthConst = require("../Const/AuthConst")
dataBase = new dbHelper()

module.exports = class userModel {


    register(user) {
        return new Promise((resolve, reject) => {
            if (user.username == undefined || user.email == undefined || user.password == undefined) {
                return reject("Не все обязательные поля заполнены")
            }
            else {
                let regularEmail = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]+\.[a-z]{2,8}$/
                if (!regularEmail.test(user.email)) {
                    return reject("Почта введена не верно")
                }

                let regularPhoneNumber = /^([\+]?)(([380]{3}?)([0-9]{2})|([38]{2}?)([\(]?)([0-9]{3})([\)]))([-]?)([0-9]{3})([-]?)([0-9]{2})([-]?)([0-9]{2})$/
                if (!regularPhoneNumber.test(user.phoneNumber)) {
                    return reject("Номер введён не верно")
                }





                let arrUser = new Array();
                let dbConnect = dataBase.getConnect()






                /*Шифрование пароля с учётом того что пришёл не зашифрованный*/
                let hash_pass
                let salt = crypto.randomBytes(AuthConst.SALT_LENGTH).toString(AuthConst.BYTE_TO_STRING_ENCODING);
                let pwd = crypto.pbkdf2(user.password, salt, 1, AuthConst.PASSWORD_LENGTH, AuthConst.DIGEST, (err, derivedKey) => {
                    if (err) return reject(err);
                    hash_pass = derivedKey.toString(AuthConst.BYTE_TO_STRING_ENCODING)
                    user.password = hash_pass + ":" + salt








                    for (let key in user) {
                        if (key != "idUser") {
                            console.log(key)
                            arrUser.push(user[key])
                        }
                    }
                    let sqlQuery = "insert users(username, email, password, phoneNumber) values (?,?,?,?) "
                    dbConnect.query(sqlQuery, arrUser, function (err, results) {
                        console.log("В БД")
                        if (err) { return reject(err) }
                        resolve(results)
                        console.log("В БД")

                    })
                });

            }
        });
    }












}