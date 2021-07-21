const mongoose = require("mongoose");
const players = require("./routes/player");
const cors = require("cors");
const express = require("express");
require("dotenv/config");

const app = express();

app.use("/players", cors(), players);

mongoose.connect(
  process.env.DB_URI,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log(`Connected to DB`)
);

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
