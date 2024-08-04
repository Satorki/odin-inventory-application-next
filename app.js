const express = require("express");
const path = require("path");
const indexRoutes = require("./routes/index");
require("dotenv").config();

const PORT = process.env.PORT;
const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", indexRoutes);
app.set("views", path.join(__dirname, "src/views"));

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
