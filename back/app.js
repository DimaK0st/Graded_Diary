const express = require("express");
const app = express();
const userRouter = require("./routes/userRouter.js");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/user', userRouter);



app.listen(3000);