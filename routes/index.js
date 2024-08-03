const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return res.send("OK");
});

router.get("/index", (req, res) => {
  res.render("index", {
    subject: "EJS template engine",
    name: "our template",
    link: "https://google.com",
  });
});

module.exports = router;
