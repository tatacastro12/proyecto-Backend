const express = require ('express')
const router = express.Router();
const songsSchema = require("../models/songs")

router.post("/songs", (req, res) => {
  const songs = songsSchema(req.body);
  songs
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router
