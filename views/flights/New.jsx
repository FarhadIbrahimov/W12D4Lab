import React from "react";
import DefaultLayout from './DefaultLayout';

export default function New({newFlight}){

    console.log('hello', newFlight)
    return (
        <DefaultLayout>
        <div className="container">
            <h1>Add new flight</h1>

            <form action="/flights" method="POST">

                <label htmlFor="airline">Airline: </label>
                <input type='text' id='airline' name='airline'></input> <br /><br />

                <label htmlFor="flightNo">Flight #: </label>
                <input type='number' id='flightNo' name='flightNo'></input><br /><br />

                <label htmlFor="departs">Departs:</label> <br />
                <input type='datetime-local' id='departs' name='departs' defaultValue={newFlight.departs.toISOString().slice(0, 16)}></input><br /><br />

                <label htmlFor="airport">Choose an Airport:</label>
                <div className="box">
                    <select name="airport" id="airport">
                        <option value="AUS">AUS</option>
                        <option value="DAL">DAL</option>
                        <option value="LAX">LAX</option>
                        <option value="SAN">SAN</option>
                        <option value="SEA">SEA</option>
                    </select>
                </div>
                
                <br />
                <br />

                <button>Submit</button>
            </form>

            <form action="/flights">
                <button className="btn-2">Back</button>
            </form>
        </div>
        </DefaultLayout>
    )
}