const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("get contacts");
});

router.post("/", (req, res) => {
  res.send("add contact");
});

router.put("/:id", (req, res) => {
  res.send("update contacts");
});
router.delete("/:id", (req, res) => {
  res.send("delete contacts");
});

module.exports = router;
