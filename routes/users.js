const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.send("registers a user");
});
module.exports = router;
