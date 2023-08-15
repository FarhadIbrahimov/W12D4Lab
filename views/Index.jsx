import React from 'react'

export default function Index({ result }) {
console.log(result);
function formatDateObject(date){
    const year = date.getFullYear();
    const month = String(date.getMonth()).padStart(2,'0');
    const day = String(date.getDate()).padStart(2,'0');
    
    return `${year}-${month}-${day}`;
}

  return (
    <div>
        {result.map((flight) => {
            return(
                <div>
                    <h1>{flight.airline}</h1>
                    <h2>{flight.flightNo}</h2>
                    <h2>{formatDateObject(flight.departs)}</h2>
                </div>
            )
        })}

        <form action="/flights/seed" method="POST">
            <button>SEED</button>
        </form>

        <form action="/flights/clear?_method=DELETE" method="POST">
            <button>CLEAR</button>
        </form>

    </div>
  )
}
