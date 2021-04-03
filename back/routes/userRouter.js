const express = require("express");
const UserController = require("../controllers/userController.js");
const AuthController = require("../controllers/authController.js");
const userRouter = express.Router();
const userController = new UserController();
const authController = new AuthController();
 


userRouter.get("/help",authController.tester, userController.help );
userRouter.post("/register",authController.tester, userController.register);

module.exports = userRouter;