/**
 * Author:Arsheena Azmi
 * Controller for course
*/
const model = require("../models");
// write modelname 
const Course =model.db.course;
//const Op =model.db.Op;

// Create and Save a new course
exports.create = (req, res) => {
 
  // Create a Course
  const course = {
    name: req.body.name,
    total_hour:req.body.total_hour
  };

  // Save Course in the database
  Course.create(course)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Course."
      });
    });
};

// Retrieve all given Course Info from the database.
exports.findAll = (req, res) => {
  const id = req.params.id;

  Course.findAll( /* {  where: { id: id } } */ )
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Course."
      });
    });
};


// Update a Course by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Course.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Course was updated successfully."
        });
      } else {
        res.send({
          message: "Cannot update Course with id=${id}. "
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Course with id=" + id
      });
    });
};

// Delete a Course with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Course.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Course was deleted successfully!"
        });
      } else {
        res.send({
          message: "Cannot delete Course with id=${id}. Maybe Course was not found!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Course with id=" + id
      });
    });
};