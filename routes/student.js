/**
 * 
 * Author:Arsheena
 * Route for student 
 */

 const student = require("../controllers/studentController.js");
  
 const express = require("express");
  const router=express.Router();

 // Add a new student 
 router.post("/", student.create);  
 
 // Retrieve a student
 //router.get("/:id", student.findOne);

 // Retrieve all student
 router.get("/", student.findAll);

 // Retrieve all student
 router.get("/teach/:id", student.findStudentsByTeacher);

 // Update student details
 router.put("/:id", student.update);

 // Delete student
 router.delete("/:id", student.delete);

 // Delete all students
 //router.delete("/", student.deleteAll);
 
 module.exports=router;