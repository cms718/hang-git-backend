var express = require("express");
var router = express.Router();
const Player = require("../models/Player");

router.get("/", async (req, res) => {
  try {
    const players = await Player.find({});
    res.json(players);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const player = new Player({
    name: req.body.name,
    score: req.body.score,
  });
  try {
    const savePlayer = await player.save();
    res.json(savePlayer);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
