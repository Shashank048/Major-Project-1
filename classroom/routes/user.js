const express = require("express");
const router = express.Router();

//Index-user 
app.get("/",(req,res)=>{
    res.send("Get for users");
});

//Show -user 
app.get("/:id",(req,res)=>{
    res.send("Get for users id");
});

//Index-user 
app.get("/",(req,res)=>{
    res.send("Post for users");
});

//Delete-user 
app.get("/:id",(req,res)=>{
    res.send("Delete for users");
});

module.exports = router;
