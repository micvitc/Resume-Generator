const express=require("express");
const route=express.Router();
require("../db/conn");
const resumeSchema=require("../models/schema");

route.get("/",(req,res)=>{
          res.send("this my message from routes page");
})



// 08-06-2023
const bodyParser = require('body-parser');
route.use(bodyParser.urlencoded({ extended: true }));
route.use(bodyParser.json());
route.use(express.json());

route.use(bodyParser.json());

route.post('/personal',async (req, res) => {
    try {
        console.log(req.body);
        // Create a new instance of PersonalDetails model with data from request body
        const personal_Schema = new resumeSchema({
          Fname: req.body.Fname,
          Lname: req.body.Lname,
          age: req.body.age,
          email: req.body.email,
        });
    
        // Save the new personalDetails instance to the database
        await personal_Schema.save();
    
        // Return success message to client
        res.status(201).json({ message: 'Personal details saved successfully' });
      } catch (err) {
        // Return error message to client if an error occurs
        res.status(500).json({ error: err.message });
      }
});



route.post('/Address-details',async (req, res) => {
    try {
        // Create a new instance of PersonalDetails model with data from request body
        const address_Schema = new resumeSchema({
          address: req.body.address,
        });
    
        // Save the new personalDetails instance to the database
        await address_Schema.save();
    
        // Return success message to client
        res.status(201).json({ message: 'Personal details saved successfully' });
      } catch (err) {
        // Return error message to client if an error occurs
        res.status(500).json({ error: err.message });
      }
});









/////////////////////////////////////////////// 2nd person task///////////////////////////////////////////////////////////////
route.post('/Education', async (req, res) => {
    const formData = req.body;
  
    try {
      const newResume = await resumeSchema.create(formData);
      res.json(newResume);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  route.post('/Skills', async (req, res) => {
    const formData = req.body;
  
    try {
      const newResume = await resumeSchema.create(formData);
      res.json(newResume);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  route.get('/:title', async (req, res) => {
    const { ProjectName } = req.params;
    try {
      const post = await resumeSchema.find({ ProjectName: ProjectName });
      res.json(post);
    } catch (error) {
      res.status(500).send(error);
    }
  });


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////



module.exports=route;