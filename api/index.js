const { json } = require("express");
const express = require("express");
const cors = require("cors");
const data = require("./data.json");
const app = express();
const PORT = 8080;




app.use(cors());
app.get("/movie",(req,res) =>{
    res.send((data));
})



console.log("data",data)

app.listen(PORT, (req,res) =>{
    console.log("server start");
})