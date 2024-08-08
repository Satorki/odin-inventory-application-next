const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const pool = require("../db");

// ADD ITEM POST
router.get("/add-item", (req, res) => {
  res.render("addItem", {
    title: "Add Item",
    description: "Please Add a car",
  });
});

router.post(
  "/add-item",
  asyncHandler((req, res) => {
    const { name, description, company_id, category_id, price } = req.body;
    const newItem = pool.query(
      "INSERT INTO car (name, company_id, category_id, price) VALUES ($1, $2, $3, $4, $5)RETURNING *",
      [name, description, company_id, category_id, price]
    );
    res.json(newItem.rows[0]);
    res.status(200).send("Car added");
    res.redirect("/");
  })
);

// SHOW ITEMS GET
router.get(
  "/",
  asyncHandler((req, res) => {
    const result = pool.query("SELECT * FROM car");
    const itemList = result.rows;

    res.render("index", {
      title: "Odin Inventory App Next",
      description: "List of the cars:",
      itemList: itemList,
    });
  })
);

// SHOW ONE ITEM DETAIL GET
// router.get("/:id", (req, res) => {
//   const itemId = "id";

//   res.render("item", {
//     title: "item",
//     itemData: itemId,
//   });
// });

// UPDATE ITEM POST
// router.post("/:id", (req, res) => {
//   res.render("addItem", {
//     title: "Add Item",
//     description: "Please Add a car",
//   });
// });
// router.post(
//   "/add-item",
//   asyncHandler((req, res) => {
//     console.log(req.body);
//     res.status(200).send("Car added");
//     res.redirect("/");
//   })
// );

// DELETE ITEM POST
// router.post("/:id", (req, res) => {
//   res.render("addItem", {
//     title: "Add Item",
//     description: "Please Add a car",
//   });
// });
// router.post(
//   "/add-item",
//   asyncHandler((req, res) => {
//     console.log(req.body);
//     res.status(200).send("Car added");
//     res.redirect("/");
//   })
// );

module.exports = router;
