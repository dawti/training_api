/**
 * 
 * Author:Dawtie
 * Route for login 
 */


 const user = require("../controllers/loginController.js");
  
 const express = require("express");
 const router=express.Router();

// Create a new User Account
router.post("/", user.create);

// Retrieve all usertype of this user account
router.get("/all", user.getAll);


// Login to account
router.post("/login", user.signIn);

// Retrieve all usertype of this user account
router.get("/:id", user.findAll);

// Update account details
router.put("/:id", user.update);

// Delete an account
router.delete("/:id", user.delete);

module.exports=router;