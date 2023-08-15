import React from 'react'

export default function New() {
  return (
    <div>
        <h1>Create Flight</h1>
        <form action='/flights' method='POST'>

            <label htmlFor='airline'>Airline</label>
            <input type='text' id='airline' name='airline'></input>

            <label htmlFor='flightNo'>Flight Number</label>
            <input type='text' id='flightNo' name='flightNo'></input>

            <label htmlFor='departs'>Departure</label>
            <input type='date' id='departs' name='departs'></input>

            <button>Submit</button>

        </form>
    </div>
  )
}
