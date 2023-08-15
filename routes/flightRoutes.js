const express = require("express");
const router = express.Router();
const flightController = require("../controllers/flightController");
const flight = require("../models/flightData");

// INDUCES

// Index
router.get("/", flightController.index);

// New
router.get("/new", flightController.new);

// Update
router.put("/:id", flightController.update);

// Create
router.post("/", flightController.create);

// Seed
router.post("/seed", flightController.seed);

router.get("/:id", flightController.show);
module.exports = router;
