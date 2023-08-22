import React from "react";
import DefaultLayout from "./DefaultLayout";

export default function Show({ flight }) {
  console.log(flight);
  let { airport, airline, flightNo, departs, destinations, _id } = flight;

  let destinationArray = ["AUS", "DAL", "LAX", "SAN", "SEA"];

  for (let i = 0; i < destinationArray.length; i++) {
    for (let object of destinations) {
      if (object.airport === destinationArray[i]) {
        destinationArray.splice(i, 1);
      }
    }
  }

  return (
    <DefaultLayout>
      <div className="container">
        <h1>Flight Details</h1>
        <table>
          <tr>
            <th>Airport</th>
            <th>Airline</th>
            <th>Flight #</th>
            <th>Departs</th>
          </tr>
          <tr>
            <td>{airport}</td>
            <td>{airline}</td>
            <td>{flightNo}</td>
            <td>{departs.toLocaleDateString()}</td>
          </tr>
        </table>
        <h3>Destinations:</h3>
        <table>
          <tr>
            <th>Airport</th>
            <th>Arrival</th>
          </tr>
          {destinations
            ? destinations
                .sort((a, b) => a.arrival - b.arrival)
                .map((destination) => (
                  <tr key={destination._id}>
                    <td>{destination.airport}</td>
                    <td>{destination.arrival.toString()}</td>
                  </tr>
                ))
            : null}
        </table>

        <form action={`/flights/${_id}?_method=PUT`} method="POST">
          <h2>Add Destination:</h2>
          <label htmlFor="departs">Arrival: </label>
          <input
            type="datetime-local"
            id="departs"
            name="arrival"
            defaultValue={flight.departs.toISOString().slice(0, 16)}
          ></input>
          <br />
          <br />

          <label htmlFor="airports">Choose an Airport Destination: </label>
          <div className="box">
            <select name="airport" id="airports" required>
              {destinationArray.map((dest) => (
                <option value={dest}>{dest}</option>
              ))}
            </select>{" "}
            <br />
          </div>

          <button className="btn-2">Submit</button>
        </form>

        <form action="/flights">
          <button className="btn-2">Back</button>
        </form>
      </div>
    </DefaultLayout>
  );
}
