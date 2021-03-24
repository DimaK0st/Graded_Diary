const express = require("express");
const userController = require("../controllers/userController.js");
const userRouter = express.Router();
 
 


userRouter.put("/register", userController.register);

module.exports = userRouter;