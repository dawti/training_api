/**
 * Author:Dawtie
 * Controller for Class
 */
 const model = require("../models");
 const Class = model.db.class;
 
 
 
 // Add or Register a new Class
 exports.create = (req, res) => { 
 
   // Add a Class
   const std = {
    name: req.body.name,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
  
   };
 
   // Save Class in the database
   Class.create(std)
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while adding Class."
       });
     });
 };
 
 // Retrieve all Classs from the database.
 exports.findAll = (req, res) => {
   
   Class.findAll()
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while retrieving Classs."
       });
     });
 };
 
 // Find a Class with an id
 exports.findOne = (req, res) => {
   const id = req.params.id;
 
   Class.findByPk(id)
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message: "Error retrieving Class with id=" + id
       });
     });
 };
 
 // Update a Class by the id in the request
 exports.update = (req, res) => {
   const id = req.params.id;
   Class.update(req.body, {
     where: { id: id }
   })
     .then(num => {
       if (num == 1) {
         res.send({
           message: "Class details  updated successfully."
         });
       } else {
         res.send({
           message: `Cannot update Class with id=${id}. Maybe Class was not found or req.body is empty!`
         });
       }
     })
     .catch(err => {
       res.status(500).send({
         message: "Error updating Class with id=" + id
       });
     });
 };
 
 // Delete a Class with the specified id in the request
 exports.delete = (req, res) => {
   const id = req.params.id;
 
   Class.destroy({
     where: { id: id }
   })
     .then(num => {
       if (num == 1) {
         console.log("delete",num)
         res.send({
           message: "Class was deleted successfully!"
         });
       } else {
         res.send({
           message: `Cannot delete Class with id=${id}. Maybe Class was not found!`
         });
       }
     })
     .catch(err => {
       res.status(500).send({
         message: "Could not delete Class with id=" + id
       });
     });
 };
 
 // Delete all Classs from the database.
 exports.deleteAll = (req, res) => {
   Class.destroy({
     where: {},
     truncate: false
   })
     .then(nums => {
       res.send({ message: `${nums} Classs were deleted successfully!` });
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while removing all Classs."
       });
     });
 };
 
 