
const UserModel = require("../models/userModel");
const User = require("../models/user")
const AuthConst = require("../Const/AuthConst")
userModel = new UserModel()

module.exports = class userController {


    help(req, res) {

        console.log("Mne ploho!!!")
        res.send('this is a Боль');

    }

    register(req, res) {

        let user = new User()

        user.username = req.body.username
        user.email = req.body.email
        user.password = req.body.password

        user.phoneNumber = req.body.phoneNumber === undefined ? null : req.body.phoneNumber

        userModel.register(user).then((bool) => {
            console.log("vishel s Promise")
            if (bool) {
                res.status(200).send("Пользователь создан")}
        }).catch((err) => {
            console.log(err);
            res.status(400).send(err)
        });
    }

    login(req, res) {
        
        userModel.login(req.body.login, RegularExpressions.REGULAR_EMAIL.test(req.body.login), password).then((bool) => {
            console.log("vishel s Promise")
            if (bool) {
                res.status(200).send("Пользователь создан")}
        }).catch((err) => {
            console.log(err);
            res.status(400).send(err)
        });
        

    }












}
