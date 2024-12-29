/* 
^After creating the server.js file with the above code, we can start working on the app.js file.
^The app.js file is responsible for creating the express app and setting up the middleware.
^The app.js file is then imported into the server.js file and the server is created using the app.


*CORS - 
&CORS (Cross-Origin Resource Sharing) is a security feature implemented by web browsers that allows or restricts web applications running at one origin (domain) from making requests for resources on a different origin (domain).

&In simple terms, it controls how web pages from one domain can request resources (like APIs, images, or other data) from another domain.

?What is the Problem?

&By default, web browsers restrict web pages from making requests to a domain different from the one that served the web page. This is called the Same-Origin Policy.
^Example:
^Let's say you have a frontend hosted at http://localhost:3000 and a backend API at http://localhost:5000.
^Without CORS, if your frontend tries to fetch data from the backend, the browser will block the request due to the Same-Origin Policy.
^To allow the frontend at localhost:3000 to access the API at localhost:5000, you need to enable CORS on the backend. This can be done by using a middleware like the cors package in Express.
*/

// Load environment variables from .env file
const dotenv = require('dotenv');
dotenv.config();
// Import Express framework and CORS middleware
const express = require('express');
const cors = require('cors');
// Initialize Express app
const app = express();
const cookieParser = require('cookie-parser');
// Import database connection logic
const connectToDB = require('./db/db');
// Import user-related routes
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');

// Connect to the database
connectToDB();
// Enable CORS to handle cross-origin requests
app.use(cors());
// Middleware to parse JSON request bodies
app.use(express.json());
// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// Test route to check server functionality


app.get("/", (req, res) => {
    res.send("Hello world!");
}); 
// Mount user routes on the /users path
app.use('/users', userRoutes);
app.use('/captains', captainRoutes);
// Export the app for use in server.js
module.exports = app;
