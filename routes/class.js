/**
 * Author:Jagan
 * Route for classes 
*/

const classes = require("../controllers/classController.js");
  
var express = require("express");
const router=express.Router();

// Create a new User Account
router.post("/", classes.create);

 // Retrieve all class
 router.get("/", classes.findAll);

// Retrieve all usertype of this user account
router.get("/:id", classes.findAll);

// Update account details
router.put("/:id", classes.update);

// Delete an account
router.delete("/:id", classes.delete);

module.exports=router;
