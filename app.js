const express=require("express");
const app=express();
const PORT=8000;
const bodyParser = require('body-parser');


const router=require('./routes/index');
app.use("",router);
//database conn
require("./db/conn");
const resumeSchema=require("./models/schema");

//body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());



// we cannot get data without this line we have to use this to get json
app.use(express.json());
//in order to get data use this line otherwise it will show undefined
app.use(express.urlencoded({extended:false}))


app.listen(PORT,()=>{
    console.log("started done ");
}) 