const Flights = require("../models/Flights");
const flightData = require("../models/flightData");

async function index(req, res) {
  let result;

  try {
    result = await Flights.find();
  } catch (err) {
    console.log("Failed to create a Fruit document: ", err);
  }
  res.render("Index", { result });
}

async function create(req, res) {
  const { airline, flightNo, departs } = req.body;
  if (!airline || !flightNo || !departs) {
    res.status(401).send("Please provide Credentials");
  } else {
    try {
      const newFlight = await Flights.create(req.body);
      console.log("CREATE", newFlight);
      res.redirect(`/flights/${newFlight._id}`);
    } catch (error) {
      console.log("Failed to create a new flight", error);
      res.redirect("/flights");
    }
  }
}

async function update(req, res) {
  // res.redirect('/flights')

  try {
    await Flights.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/flights/${req.params.id}`);
  } catch (err) {
    console.log("Failed to create: ", err);
    res.redirect(`/flights`);
  }
}

async function seed(req, res) {
  try {
    await Flights.deleteMany({});
    await Flights.create(flightData);
  } catch (err) {
    console.log("Failed to create: ", err);
  }
  res.redirect("/flights");
}

async function show(req, res) {
  try {
    let SingleFlightData = await Flights.findById(req.params.id);
    console.log(SingleFlightData);
    if (SingleFlightData) {
      res.render("Show", { SingleFlightData });
    } else {
      res.status(404).send("<h1>Flight not found</h1>");
    }
  } catch (error) {
    console.log("Failed to retrieve flight details", error);
    res.redirect("/flights");
  }
}

function newFlight(req, res) {
  res.render("New");
}

async function destroy(req, res) {
  console.log("DESTROY", req.params.id);
  try {
    await Flights.findByIdAndDelete(req.params.id);
    res.redirect("/flights");
  } catch (error) {
    console.log("mongo error: ", error);
  }
}

module.exports = {
  index,
  seed,
  new: newFlight,
  update,
  create,
  show,
  destroy,
};
