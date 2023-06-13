const express=require("express");
const app=express();
const PORT=8000;
const bodyParser = require('body-parser');
require("dotenv").config();

// routes
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


// 04-06-2023
const cors=require("cors");
const passport = require("passport");
const cookieSession = require("cookie-session");
const passportSetup=require("./passport");
const authRoute=require("./routes/auth");
app.use("/auth",authRoute);


app.use(
    cookieSession({
    name: "session",
    keys: ["cyberwolve"],
    maxAge: 24*60*60*100,
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
    cors({
        origin: "http:/nocalhost:8000",
        methods:"GET,POST,PUT,DELETE",
        credentials: true,
    })
)



















app.listen(PORT,()=>{
    console.log("started done ");
}) 