const express=require("express");
const route=express.Router();
require("../db/conn");
const resumeSchema=require("../models/schema");

route.get("/",(req,res)=>{
          res.send("this my message from routes page");
})


route.post("/d",async(req,res)=>{
    try{
        await console.log(req.body.Fname);
        res.send("get msg");

    }catch (e) {
        res.send("error");
}
})

module.exports=route;