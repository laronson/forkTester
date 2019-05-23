const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.json());


router.post("/ping", (req, res) => {
  console.log("in the service")
  res.json({message: "hello"})
})


module.exports = router;
