const express = require("express");
const router = express.Router();

//Post
//Index 
router.get("/",(req,res)=>{
    res.send("Post for users");
});

//Show 
router.get("/:id",(req,res)=>{
    res.send("Post for users id");
});

//Index 
router.get("/",(req,res)=>{            
    res.send("Post for posts");
});

//Delete
router.get("/:id",(req,res)=>{
    res.send("Post for users");
});

module.exports = router;        
