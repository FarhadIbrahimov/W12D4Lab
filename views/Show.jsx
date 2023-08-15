import React from "react";

export default function Show({ SingleFlightData }) {
  return (
    <div>
      <h1>Flight Details</h1>
      {SingleFlightData ? (
        <div>
          <p>Airline: {SingleFlightData.airline}</p>
          <p>Flight No: {SingleFlightData.flightNo}</p>
          {/* using the JavaScript toLocaleDateString function to format the date
          as a string , because rendering an object directly in JSX is not allowed in React*/}
          <p>Departure: {SingleFlightData.departs.toLocaleDateString()}</p>
        </div>
      ) : (
        <h2>Flight not found</h2>
      )}
    </div>
  );
}
