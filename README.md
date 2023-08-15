This repository contains code for a web application that displays flight details using React components and a Node.js backend.

## Table of Contents

- [Show.jsx](#showjsx)
- [Controller Functions](#controller-functions)
  - [`index`](#index)
  - [`create`](#create)
  - [`newFlight`](#newflight)
  - [`update`](#update)
  - [`seed`](#seed)
  - [`show`](#show)
- [Adding the "Show" Route](#adding-the-show-route)

## Show.jsx

The `Show.jsx` file is a React component responsible for displaying detailed flight information. It utilizes the following concepts:

- Importing the `React` module.
- Receiving the `SingleFlightData` prop containing flight details.
- Conditional rendering based on the presence of `SingleFlightData`.
- Using the `toLocaleDateString` function to format the departure date.
- Displaying flight details or a "Flight not found" message.

```jsx
import React from "react";

export default function Show({ SingleFlightData }) {
  return (
    <div>
      <h1>Flight Details</h1>
      {SingleFlightData ? (
        <div>
          <p>Airline: {SingleFlightData.airline}</p>
          <p>Flight No: {SingleFlightData.flightNo}</p>
          <p>Departure: {SingleFlightData.departs.toLocaleDateString()}</p>
        </div>
      ) : (
        <h2>Flight not found</h2>
      )}
    </div>
  );
}
```

## Controller Functions

The controller file (`flightController.js`) includes several functions that handle different aspects of the application's functionality.

### `index`

The `index` function retrieves flight data from the database and renders an "Index" view. It uses the `Flights.find()` method to fetch flight information from the database and then renders the data in a view called "Index".

### `create`

The `create` function handles the creation of new flights. It receives data from a form submission and attempts to create a new flight entry in the database using the `Flights.create()` method. If successful, it redirects the user to the flight list page (`/flights`). If there's an error during the creation process, it logs the error and redirects to an error page.

### `newFlight`

The `newFlight` function renders a "New" view that allows users to input details for creating a new flight. It ensures that the required credentials (`airline`, `flightNo`, and `departs`) are provided before rendering the input form. If the required fields are not provided, it sends a 401 (_Unauthorized response status code indicates that the client request has not been completed because it lacks valid authentication credentials for the requested resource_) status and a message indicating that credentials are missing.

### `update`

The `update` function handles the updating of flight information. It uses the `Flights.findByIdAndUpdate()` method to update the flight details in the database based on the provided `id` parameter. If the update is successful, it redirects the user to the updated flight details page. If there's an error, it logs the error and redirects to the flight list page.

### `seed`

The `seed` function is used for populating the database with sample flight data. It first deletes all existing flight data using `Flights.deleteMany()` and then inserts new data using `Flights.create()` with sample data from the `flightData` module. If there's an error during the seeding process, it logs the error.

### `show`

The `show` function retrieves and displays detailed flight information. It uses the `Flights.findById()` method to fetch flight details from the database based on the provided `id` parameter. If the flight data is found, it renders the "Show" view with the flight details. If the flight data is not found, it sends a 404 status and a "Flight not found" message.

## Adding the "Show" Route

To enable users to view detailed flight information, added a "show" route that corresponds to the `show` function in the controller. Followed these steps to add the route:

1. **`flightRoutes.js`** file contains the routing configuration for my Express application.

2. **Imported the Controller:** At the top of the `routes.js` file, imported the `flightController` module that contains the controller functions.

   ```javascript
   const flightController = require("../controllers/flightController");
   ```

3. **Added the Show Route:** Below the existing routes, added a new route that corresponds to the show function in the controller. This route handles requests with a flight ID parameter (e.g., /flights/:id).

```javascript
// Show
router.get("/:id", flightController.show);
```
