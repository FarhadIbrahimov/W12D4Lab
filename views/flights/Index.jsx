import React from "react";
import DefaultLayout from "./DefaultLayout";

function Index({ flights }) {
  return (
    <DefaultLayout>
      {/* In HTML, the <td> and <th> elements are used within tables to define cells in rows. Both elements are used to structure tabular data, but they have slightly different purposes: */}
      {/*<td> (Table Data Cell)  */}
      {/*<th> (Table Header Cell)  */}
      {/* <tr> element is used to define a table row within an HTML table */}
      <div className="container">
        <h1>All flights</h1>
        <table>
          <tr>
            <th>Airline</th>
            <th>Flight #</th>
            <th>Departs</th>
            <th>Details</th>
          </tr>
          {flights.map((flight) => (
            <tr key={flight._id}>
              {console.log(flight.departs)}
              <td>{flight.airline}</td>
              <td>{flight.flightNo}</td>
              <td>{flight.departs.toLocaleDateString()}</td>
              <td>
                <a href={`/flights/${flight._id}`}>
                  <button>Info</button>
                </a>
              </td>
            </tr>
          ))}
        </table>

        <a href="/flights/New">
          <button className="btn-2">New</button>
        </a>
      </div>
    </DefaultLayout>
  );
}

export default Index;
