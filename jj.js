const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
// app.use(express.json());

app.post("/post",(req,res) => {
    const a = req.body
    res.send(a)
})

app.listen(3000)