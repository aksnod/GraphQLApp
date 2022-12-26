const mongoose = require("mongoose");

mongoose.connect("mongodb://mongo_db:27017/crud", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 // useCreateIndex: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "error connecting to db"));

db.once("open", () => console.log("database connected successfully"));

module.exports = db;
