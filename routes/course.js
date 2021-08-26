/**
 * 
 * Author:Arsheena
 * Route for course 
 */

 const course = require("../controllers/courseController.js");
  
 const express = require("express");
  const router=express.Router();

 // Add a new course 
 router.post("/", course.create);  
 
 // Retrieve a course
 //router.get("/:id", course.findOne);

 // Retrieve all course
 router.get("/", course.findAll);

 // Update course details
 router.put("/:id", course.update);

 // Delete course
 router.delete("/:id", course.delete);

 // Delete all courses
 //router.delete("/", course.deleteAll);
 
 module.exports=router;