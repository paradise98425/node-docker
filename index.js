const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello world!!!</h1>")
})

const port = process.env.port || 3000;

app.listen(port, ()=> console.log(`listening on port ${port}`))