require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const connectToDB = require('./config/connectToDB');

connectToDB();
app.get("/",(req,res)=>{
    res.send("index page")
})


app.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`);
})
