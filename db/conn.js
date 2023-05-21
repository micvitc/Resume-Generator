const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/shopregistration").then(()=>{
          console.log("connection successful");
}).catch((e)=>{
          console.log(e);
})