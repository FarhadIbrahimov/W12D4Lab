const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: {
    type: String,
    require: true,
    enum: {
      values: ["AUS", "DAL", "LAZ", "SAN", "SAN", "SEA"],
      message: "{VALUE} is not supported",
    },
  },
  arrival: {
    type: Number,
    require: true,
  },
});

const Destination = mongoose.model("destinations", destinationSchema);

module.exports = {
  destinationSchema,
  Destination,
};
