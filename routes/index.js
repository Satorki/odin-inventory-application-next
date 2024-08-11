const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const pool = require("../db");
require("dotenv").config();

function checkAdmin(req, res, next) {
  const adminCode = req.body.adminCode;

  if (adminCode === process.env.ADMINCODE) {
    next();
  } else {
    res.status(403).send("Unauthorized access - Invalid Admin Code");
  }
}

// ADD ITEM POST
router.get("/add-item", (req, res) => {
  res.render("addItem", {
    title: "Add Item",
    description: "Please Add a car",
  });
});

router.post(
  "/add-item",
  checkAdmin,
  asyncHandler(async (req, res) => {
    const { name, description, company_id, category_id, price } = req.body;
    const newItem = await pool.query(
      "INSERT INTO car (name, description, company_id, category_id, price) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [name, description, company_id, category_id, price]
    );
    res.redirect("/");
  })
);

// SHOW ITEMS GET
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const result = await pool.query(
      "SELECT car.id AS car_id, car.name AS car_name, car.description AS car_description, car.company_id, car.category_id, car.price, category.name AS category_name, company.name AS company_name FROM car INNER JOIN category ON car.category_id = category.id INNER JOIN company on car.company_id = company.id;"
    );

    const itemList = result.rows;
    res.render("index", {
      title: "Odin Inventory App Next",
      description: "List of the cars:",
      itemList: itemList,
    });
  })
);

// SHOW ONE ITEM DETAIL GET
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.params;

    // Sprawdź, czy `id` jest liczbą całkowitą
    if (isNaN(id)) {
      // Jeśli `id` nie jest liczbą, zwróć błąd 400
      return res.status(400).send("Invalid ID");
    }

    const result = await pool.query(
      "SELECT car.id AS car_id, car.name AS car_name, car.description AS car_description, car.company_id, car.category_id, car.price, category.name AS category_name, company.name AS company_name FROM car INNER JOIN category ON car.category_id = category.id INNER JOIN company on car.company_id = company.id WHERE car.id = $1;",
      [id]
    );

    const itemData = result.rows[0];

    res.render("item", {
      title: "item Detail",
      itemData: itemData,
    });
  })
);

// UPDATE ITEM POST
router.post(
  "/:id",
  asyncHandler(async (req, res) => {
    const carId = req.params.id;
    const { name, description, company_id, category_id, price } = req.body;
    const updateItem = await pool.query(
      "UPDATE car SET name = $1, description = $2, company_id = $3, category_id = $4, price = $5 WHERE id = $6",
      [name, description, company_id, category_id, price, carId]
    );
    res.redirect(`/${carId}`);
  })
);

// DELETE ITEM GET
router.get(
  "/:id/delete",
  asyncHandler(async (req, res) => {
    const carId = req.params.id;
    const deleteItem = await pool.query("DELETE FROM car WHERE id = $1", [
      carId,
    ]);
    res.redirect("/");
  })
);

module.exports = router;
