const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");

router.get("/", (req, res) => {
  res.render("index", {
    title: "Odin Inventory App Next",
    description: "List of the cars:",
  });
});

// ADD CAR
router.get("/add-item", (req,res) => {
  res.render("addItem", {
    title:"Add Item",
    description: "Please Add a car"
  })
})
router.post(
  "/add-item",
  asyncHandler((req, res) => {
    console.log(req.body);
    res.status(200).send("Car added")
    res.redirect("/")
  })
);

module.exports = router;
