const express = require("express");

const app = express();

//GET request
//POST
//PUT
//DELETE 
app.get("/", (req, res) => {
    // Query to the database
    res.send("<h1>Hello world</h1>")
})

const port = process.env.port || 3000;

app.listen(port, ()=> console.log(`listening on port ${port}`))