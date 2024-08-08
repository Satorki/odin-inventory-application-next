const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");

router.get("/", (req, res) => {
  const itemList = [
    {
      name: "car1",
    },
    { name: "car2" },
    { name: "car3" },
  ];

  res.render("index", {
    title: "Odin Inventory App Next",
    description: "List of the cars:",
    itemList: itemList,
  });
});

// ADD ITEM
router.get("/add-item", (req, res) => {
  res.render("addItem", {
    title: "Add Item",
    description: "Please Add a car",
  });
});
router.post(
  "/add-item",
  asyncHandler((req, res) => {
    console.log(req.body);
    res.status(200).send("Car added");
    res.redirect("/");
  })
);

// SHOW ITEM
// router.get("/:id", (req, res) => {
//   const itemId = "id";

//   res.render("item", {
//     title: "item",
//     itemData: itemId,
//   });
// });

module.exports = router;
