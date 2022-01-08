const express = require("express");
const userController = require("./src/controllers/user.controller.js");
require('dotenv').config()
var cors = require("cors");
const app = express();

const connect = require("./src/db.js");
const PORT =process.env.PORT || 6000;
app.use(express.json());
app.use(cors());

app.use("/post", userController);

app.listen(PORT, async () => {
  await connect();
  console.log("Server is running at "+ PORT);
});
