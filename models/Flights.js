const mongoose = require("mongoose");
const { destinationSchema } = require("./Destination");
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  airline: {
    type: String,
    require: true,
    enum: {
      values: [
        "American",
        "Southwest",
        "United",
        "Delta",
        "Frontier",
        "JetBlue",
      ],
      values: ["American", "Southwest", "United"],
      message: "{VALUE} is not supported",
    },
  },
  flightNo: {
    type: Number,
    require: true,
  },
  departs: {
    type: Date,
    require: true,
    min: "2023-12-30",
    max: "2025-12-30",
  },
  airport: {
    type: String,
    required: true,
    enum: {
      values: ["AUS", "DAL", "LAZ", "SAN", "SAN", "SEA"],
      message: "{VALUE} is not supported",
    },
  },

  destinations: [destinationSchema],
});

const Flights = mongoose.model("flights", flightSchema);

module.exports = Flights;
