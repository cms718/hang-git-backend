var express = require("express");
var router = express.Router();
const Players = require("../models/Player");

router.get("/", async (req, res) => {
  try {
    const players = await Players.find({});
    res.json(players);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
