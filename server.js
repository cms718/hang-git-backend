const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();

app.use(express.json());

mongoose.connect(
  process.env.DB_HOST,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log(`Connected! Listening on port ${process.env.DB_HOST}`)
);
