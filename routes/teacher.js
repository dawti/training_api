/**
 * 
 * Author:Dawtie
 * Route for teacher 
 */

 const teacher = require("../controllers/teacherController.js");
  
 const express = require("express");
  const router=express.Router();

 // Add a new teacher 
 router.post("/", teacher.create);  
 
 // Retrieve a teacher
 router.get("/:id", teacher.findOne);

 // Retrieve all teacher
 router.get("/", teacher.findAll);

 // Update teacher details
 router.put("/:id", teacher.update);

 // Delete teacher
 router.delete("/:id", teacher.delete);

 // Delete all teachers
 router.delete("/", teacher.deleteAll);
 
 module.exports=router;