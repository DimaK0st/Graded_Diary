
const crypto = require('crypto');
const AuthConst = require("../Const/AuthConst")


module.exports = class authController {


    tester(req, res, next) {
/*
        let hash_pass
        let bool
        let pwd_res = crypto.pbkdf2(password, salt, 1, AuthConst.PASSWORD_LENGTH, AuthConst.DIGEST, (err, hash) => {
            console.log("Второй пароль_" + hash.toString(AuthConst.BYTE_TO_STRING_ENCODING))
            if (err) throw err;
            bool = (hash_pass === hash.toString(AuthConst.BYTE_TO_STRING_ENCODING));

            console.log(bool)

            if (bool) {
                next()
            }
        });*/
        console.log("В тестере")

        next()


    }




}