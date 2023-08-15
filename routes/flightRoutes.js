const express = require("express");
const router = express.Router();
const flightController = require("../controllers/flightController");
const flight = require("../models/flightData");

// INDUCES

// Index
router.get("/", flightController.index);

// New
router.get("/new", flightController.new);

//Delete
// router.delete("/:id", flightController.destroy);

// Update
router.put("/:id", flightController.update);

// Create
router.post("/", flightController.create);

// Seed
router.post("/seed", flightController.seed);

//Show
router.get("/:id", flightController.show);

module.exports = router;
