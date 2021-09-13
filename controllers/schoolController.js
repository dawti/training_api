/**
 * Author:Arsheena Azmi
 * Controller for school
*/
const model = require("../models");
// write modelname 
const School =model.db.school;
//const Op =model.db.Op;

// Create and Save a new school
exports.create = (req, res) => {
 
  // Create a School
  const school = {
    name: req.body.schoolName,
    regnum:req.body.registerNumber,
    email: req.body.email,
    address: req.body.address,
    mobile: req.body.mobile,
    logo: req.body.logo
  };

  // Save School in the database
  School.create(school)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the School."
      });
    });
};

// Retrieve all given School Info from the database.
exports.findAll = (req, res) => {
  const id = req.params.id;

  School.findAll( /* {  where: { id: id } } */ )
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving School."
      });
    });
};

//Remove this fun when original pull is done
// Retrieve a given School Info from the database.
exports.findOne = (req, res) => {
  const id = req.params.id;

  School.findOne(  {  where: { id: id } } )
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving School."
      });
    });
};
// Update a School by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  School.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "School was updated successfully."
        });
      } else {
        res.send({
          message: "Cannot update School with id=${id}. "
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating School with id=" + id
      });
    });
};

// Delete a School with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  School.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "School was deleted successfully!"
        });
      } else {
        res.send({
          message: "Cannot delete School with id=${id}. Maybe School was not found!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete School with id=" + id
      });
    });
};