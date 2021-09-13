/**
 * Author:Dawtie
 * Controller for login
 */


 const model = require("../models");
 // write modelname 
 const Login =model.db.login;
 const Teacher = model.db.teacher;
 
 exports.getAll = (req, res) => {
 Login.findAll({
   attributes: ['loginid', 'userName', 'userType'],
   
 }).then(details => {
    res.send(details);
 });
 };
 

 
 // Create and Save a new useraccount
 exports.create = (req, res) => {
    
   // Create a user
     const account = {
     userName: req.body.username,
     // email:req.body.email,
     userType:req.body.usertype,
     password: req.body.password,
     loginDate:Date.now()
 
   };
 
   // Save User Account in the database
   Login.create(account)
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while creating the Account."
       });
     });
 };
 
 //Check if username and password is correct or not
 exports.signIn=(req,res)=>{
 
   Login.findAll( { 
     attributes: ['password'],
     where: {
       userName: req.body.username
   } } )
     .then(data => {
       logger.info(data[0].password);
       const pwdb=req.body.password
       logger.info(pwdb);
       if(req.body.password===pwdb){
         res.send("Login successful")
       }
       else res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while retrieving User account."
       });
     });
 }
 
 // Retrieve  given Account Info from the database.
 exports.findAll = (req, res) => {
   const id = req.params.id;
 
   Login.findAll( {  where: { loginid: id } } )
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while retrieving User account."
       });
     });
 };
 
 
 // Update an account by the id in the request
 exports.update = (req, res) => {
   const id = req.params.id;
 
   Login.update(req.body, {
     where: { id: id }
   })
     .then(num => {
       if (num == 1) {
         res.send({
           message: "Account was updated successfully."
         });
       } else {
         res.send({
           message: `Cannot update Account with id=${id}. `
         });
       }
     })
     .catch(err => {
       res.status(500).send({
         message: "Error updating Account with id=" + id
       });
     });
 };
 
 // Delete an Account with the specified id in the request
 exports.delete = (req, res) => {
   const id = req.params.id;
 
   Login.destroy({
     where: { id: id }
   })
     .then(num => {
       if (num == 1) {
         res.send({
           message: "Account was deleted successfully!"
         });
       } else {
         res.send({
           message: `Cannot delete Account with id=${id}. Maybe Account was not found!`
         });
       }
     })
     .catch(err => {
       res.status(500).send({
         message: "Could not delete Account with id=" + id
       });
     });
 };
 