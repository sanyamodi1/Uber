/* 
This is the first file of any backend project.
This file is responsible for creating the server and listening to the port.
This file is also responsible for importing the app.js file and running it.
The server is created using http.createServer() and then listening to the port.
The port is set to 3000 or the port provided by the environment variable.
After the server is created we can start working on app.js.
*/

const http = require("http");
const app = require("./app");
const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});
