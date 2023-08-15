const express = require("express");
require("dotenv").config();
const mongoConfig = require("./config");
const app = express();
const PORT = 3000;

mongoConfig();

const flightRoutes = require("./routes/flightRoutes");
const jsxEngine = require("jsx-view-engine");

const methodOverride = require("method-override");

app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

app.use(methodOverride("_method"));

app.use(express.urlencoded({ extended: true }));

app.use("/flights", flightRoutes);

app.get("/", (req, res) => {
  res.send("homepage");
});

app.listen(PORT, () => {
  console.log("Listening on port: " + PORT, process.env.MONGO_URL);
});
