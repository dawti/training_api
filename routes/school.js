/**
 * 
 * Author:Arsheena
 * Route for school 
 */

 const school = require("../controllers/schoolController.js");
  
 const express = require("express");
  const router=express.Router();

 // Add a new school 
 router.post("/", school.create);  
 
 // Retrieve a school
 //router.get("/:id", school.findOne);

 // Retrieve all school
 router.get("/", school.findAll);

 // Update school details
 router.put("/:id", school.update);

 // Delete school
 router.delete("/:id", school.delete);

 // Delete all schools
// router.delete("/", school.deleteAll);
 
 module.exports=router;