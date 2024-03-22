// Create a simple server using express.js
var express = require("express");

var app = express();

app.use(cors());

const port = process.env.PORT || 3000;


app.get("/", (req, res)=>{
    
})

app.post("/", (req, res) => {

})

app.put("/", (req, res) => {

})

app.delete("/", (req, res) => {

})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})

// Create a simple server using node.js

// const http = require("node:http");

// const hostname = "127.0.0.1";
// const port = 3000;

// const server = http.createServer((req, res)=>{
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/plain");
//     res.end("Hello World\n");
// });

// server.listen(port, hostname, ()=>{
//     console.log(`Server running at http://${hostname}:${port}`);
// })

