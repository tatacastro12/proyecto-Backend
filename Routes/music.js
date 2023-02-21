const express = require ('express')

const router = express.Router();

router.post("/song", (req, res) => {
  const user = SongsSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router
