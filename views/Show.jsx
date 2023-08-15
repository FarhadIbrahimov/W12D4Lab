import React from "react";

export default function Show({ SingleFlightData }) {
  let { airline, flightNo, departs, _id } = SingleFlightData;
  return (
    <div>
      <h1>Flight Details</h1>

      <div>
        <p>Airline: {airline}</p>
        <p>Flight No: {flightNo}</p>
        {/* using the JavaScript toLocaleDateString function to format the date
          as a string , because rendering an object directly in JSX is not allowed in React*/}
        <p>Departure: {departs.toLocaleDateString()}</p>
        <form action={`/flights/${_id}?_method=DELETE`} method="POST">
          <button>DELETE</button>
        </form>
        <br />
        <a href="/flights">
          <button>BACK</button>
        </a>
        <br />
        <br />
        <a>
          <button>EDIT</button>
        </a>
      </div>
    </div>
  );
}
