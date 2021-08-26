/**
 * Author:Dawtie
 * Controller for teacher
 */
 const model = require("../models");
 const Teacher = model.db.teacher;
 
 
 
 // Add or Register a new teacher
 exports.create = (req, res) => { 
 
   // Add a teacher
   const teacher = {
     firstName: req.body.firstname,
     lastName: req.body.lastname,
     salary:req.body.salary,
     experience:req.body.experience,
     gender:req.body.gender,
     mobile:req.body.mobile,
     login_fk:req.body.login
   };
 
   // Save Teacher in the database
   Teacher.create(teacher)
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while adding teacher."
       });
     });
 };
 
 // Retrieve all Teachers from the database.
 exports.findAll = (req, res) => {
   
   Teacher.findAll()
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while retrieving teachers."
       });
     });
 };
 
 // Find a teacher with an id
 exports.findOne = (req, res) => {
   const id = req.params.id;
 
   Teacher.findByPk(id)
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message: "Error retrieving teacher with id=" + id
       });
     });
 };
 
 // Update a teacher by the id in the request
 exports.update = (req, res) => {
   const id = req.params.id;
   Teacher.update(req.body, {
     where: { id: id }
   })
     .then(num => {
       if (num == 1) {
         res.send({
           message: "Teacher details  updated successfully."
         });
       } else {
         res.send({
           message: `Cannot update teacher with id=${id}. Maybe teacher was not found or req.body is empty!`
         });
       }
     })
     .catch(err => {
       res.status(500).send({
         message: "Error updating teacher with id=" + id
       });
     });
 };
 
 // Delete a teacher with the specified id in the request
 exports.delete = (req, res) => {
   const id = req.params.id;
 
   Teacher.destroy({
     where: { id: id }
   })
     .then(num => {
       if (num == 1) {
         res.send({
           message: "Teacher was deleted successfully!"
         });
       } else {
         res.send({
           message: `Cannot delete Teacher with id=${id}. Maybe Teacher was not found!`
         });
       }
     })
     .catch(err => {
       res.status(500).send({
         message: "Could not delete Teacher with id=" + id
       });
     });
 };
 
 // Delete all teachers from the database.
 exports.deleteAll = (req, res) => {
   Teacher.destroy({
     where: {},
     truncate: false
   })
     .then(nums => {
       res.send({ message: `${nums} Teachers were deleted successfully!` });
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while removing all teachers."
       });
     });
 };
 
 