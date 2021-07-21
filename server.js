const mongoose = require("mongoose");
require("dotenv/config");

mongoose.connect(
  process.env.DB_URI,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log(`Connected to DB`)
);

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
