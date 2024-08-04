const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", {
    title: "Odin Inventory App Next",
    name: "Equipment",
  });
});

module.exports = router;
