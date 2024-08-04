const express = require('express');
const colors = require("colors");
const dotenv = require("dotenv").config()
const morgan = require("morgan")
const app = express()
const userdata = require("./utility/userdata.json")
const PORT = 5000;

app.use(express.json())
app.get("/", (req,res)=>{
    res.send(userdata)
})

app.listen(PORT, ()=>{
    console.log(`server is listening on ${PORT}`.green)
})