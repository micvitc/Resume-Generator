const express=require("express");
const router=express.Router();
const passport=require("passport");


router.get("/login/success",(req,res)=>{
          if(req.user){
                    res.status(200).json({
                              error:false,
                              message:"successfully lagged in",
                              user:req.user,
                    });
          }else{
                    res.status(403).json({error:true,message:"not authorized"});
          }
});


router.get("/login/failed",(req,res)=>{
          res.status(401).json({
                    error:true,
                    message:"login faliure, Here also you failed 🤣",
          });
});



router.get("google/callback",passport.authenticate("google",{
          successRedirect: process.env.CLIENT_URL,
          failureRedirect: "/login/failed",
          })
);


router.get("/google", passport.authenticate("google",["profile", "email"]));
router.get("/logout", (req,res)=>{
req.logout();
res.redirect(process.env.CLIENT_URL);
});

module.exports=router;