/**
 * Author:Arsheena Azmi
 * Controller for Studreg
*/
const model = require("../models");
// write modelname 
const Studreg =model.db.studreg;
const Class =model.db.class;
const Course =model.db.course;
const Teacher =model.db.teacher;
//const Op =model.db.Op;

// Create and Save a new Studreg
exports.create = (req, res) => {
 
  // Create a Studreg
  const studreg = {
    firstName: req.body.firstName,
    lastName:req.body.lastName,
    dob: req.body.dob,
    email: req.body.email,
    gender: req.body.gender,
    mobile: req.body.mobile,
    address: req.body.address,
    doj: req.body.doj
    
  };

  // Save Studreg in the database
  Studreg.create(studreg)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Studreg."
      });
    });
};

// Retrieve all given Studreg Info from the database.
exports.findAll = (req, res) => {
  const id = req.params.id;

  Studreg.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Studreg."
      });
    });
};

// Retrieve all given Studreg Info from the database.
exports.findStudentsByTeacher = (req, res) => {
  const id = req.params.id;

  Studreg.findAll({
    include : [
      { 
        model: Class, 
        required: true,
        include: [{model: Course,
                   required: true,
                   include: [{model: Teacher,
                    where: { id: id },
                    required: true
                     }] 
                    }]}
    ]
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Studreg."
      });
    });
};

// Retrieve all given Studreg Info from the database.
exports.findOne = (req, res) => {
  const id = req.params.id;

  Studreg.findByPk( {  where: { id: id } } )
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Studreg."
      });
    });
};


// Update a Studreg by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Studreg.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Studreg was updated successfully."
        });
      } else {
        res.send({
          message: "Cannot update Studreg with id=${id}. "
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Studreg with id=" + id
      });
    });
};

// Delete a Studreg with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Studreg.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Studreg was deleted successfully!"
        });
      } else {
        res.send({
          message: "Cannot delete Studreg with id=${id}. Maybe Studreg was not found!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Studreg with id=" + id
      });
    });
};