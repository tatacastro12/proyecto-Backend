const express = require ('express')

const router = express.Router();

router.post("/songs",(req, res)=> {
  res.send('create song')
})

module.exports = router
