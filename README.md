# Flight Management System

This project is a Flight Management System that utilizes Mongoose for database interactions. The main goal of this project was to add the ability to specify the origin airport and a list of destinations for each flight.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

In this project, we learned how to use Mongoose, a powerful Object Data Modeling (ODM) library for MongoDB and Node.js, to manage a collection of flights and destinations. The project focused on creating a schema for destinations, modifying the flight model, and implementing various features to manage flight data effectively.

## Features

1. **Destination Schema**: Created a destination schema to structure subdocuments with properties such as `airport` (with enum validation) and `arrival` (date/time).

2. **Flight Model Update**: Added new properties to the flight model, including `airport` (with enum validation) and `destinations` (an array of destination subdocuments).

3. **Flight Input Form**: Modified the flight input form to include a `<select>` element for selecting the origin airport from predefined options.

4. **View Flight Details**: Implemented a feature where users can click on a "detail" link next to each flight to view all properties for that flight.

5. **Add Destinations**: Enabled users to add destinations to a flight, specifying the airport and arrival date/time.

6. **List Destinations**: Displayed a list of destinations (airport and arrival) for each flight on the details page.

## Technologies Used

- MongoDB: Database for storing flight and destination data.
- Mongoose: ODM library for MongoDB, used for creating schemas and interacting with the database.
- Node.js: JavaScript runtime environment for server-side development.
- Express.js: Web application framework for building routes and handling requests.
- HTML/CSS: Used for creating the user interface and styling.
- JavaScript: Programming language for implementing client-side and server-side logic.

## Getting Started

1. Clone the repository to your local machine.
2. Install the required dependencies using `npm install`.
3. Set up a MongoDB instance and configure the database connection.
4. Run the application using `node app.js`.

## Usage

1. Open the application in your web browser.
2. Use the flight input form to add new flights, specifying the origin airport and destination details.
3. View the list of flights, and click on the "detail" link to see more information about a specific flight.
4. On the details page, you can add destinations to the flight and view the list of destinations.

## Contributing

Contributions are welcome! If you find any issues or want to enhance the functionality, feel free to create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
