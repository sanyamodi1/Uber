/** 
 * This file contains the code to establish a connection with a MongoDB database using Mongoose.
 * 
 * The function `connectToDB` is responsible for connecting to the MongoDB database by using
 * the connection string provided in the environment variable `DB_CONNECT`. 
 * 
 * The connection string (`DB_CONNECT`) typically includes the database URI and authentication
 * details (e.g., username, password) to securely access the database.
 * 
 * The `mongoose.connect` method is used to initiate the connection. If successful, a success
 * message is logged to the console. If the connection fails, an error message is logged.
 * 
 * The `connectToDB` function is exported so it can be imported into other parts of the application
 * (like `app.js`) to be called and initiate the connection when the application starts.
 */

const mongoose = require('mongoose');

function connectToDB() {
    // Use mongoose to connect to the database using the connection string in the environment variable
    mongoose.connect(process.env.DB_CONNECT, {
        // Options can be added here for connection configuration
    })
    // If connection is successful, log success message
    .then(() => console.log("Connected to MongoDB"))
    // If connection fails, log the error
    .catch(err => console.log(err));
}

// Export the connectToDB function to be used in other files
module.exports = connectToDB;