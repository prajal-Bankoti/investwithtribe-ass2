const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://cybervirus997:pluralsightU-3@cluster0.rwxtn.mongodb.net/courseDatabase?retryWrites=true&w=majority"
  );
};

module.exports = connect;
