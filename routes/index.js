const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");

router.get("/", (req, res) => {
  res.render("index", {
    title: "Odin Inventory App Next",
    name: "Equipment",
  });
});

// ADD CAR
router.post(
  "/",
  asyncHandler((req, res) => {
    console.log(req.body);
    res.status(200).send("Car added")
  })
);

module.exports = router;
