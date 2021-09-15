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
const paginate = require('jw-paginate');

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

// Retrieve all given Studreg Info page by page from the database.
exports.findPage = (req, res, next) => {
  // example array of 150 items to be paged
  const items = [...Array(150).keys()].map(i => ({ id: (i + 1), name: 'Item ' + (i + 1) }));

  // get page from query params or default to first page
  const page = parseInt(req.query.page) || 1;

  // get pager object for specified page
  const pageSize = 5;
  const pager = paginate(items.length, page, pageSize);

  // get page of items from items array
  const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

  // return pager object and current page of items
  return res.json({ pager, pageOfItems });
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
  const name = req.params.name;

  Studreg.findAll({
    attributes:['id','firstName','lastName'],
    include : [
      { 
        model: Class, 
        attributes:['name'],
        required: true,
        include: [{model: Course,
                   attributes:['name'],
                   required: true,
                   include: [{model: Teacher,
                    where: { firstName: name },
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

  Studreg.findOne( {  where: { id: id } } )
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