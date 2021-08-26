/**
 * 
 * Author:Dawtie 
 * Model class for teacher
 *  
 */
 'use strict';
 const {
   Model
 } = require('sequelize');
 module.exports = (sequelize, DataTypes) => {
   class Teacher extends Model {
     /**
      * Helper method for defining associations.
      * This method is not a part of Sequelize lifecycle.
      * The `models/index` file will call this method automatically.
      */
     static associate(models) {
       // define association here
     }
   };
   Teacher.init({
    firstName: {
      type: DataTypes.STRING,
      field: 'first_name' 
    },
    lastName: {
      type: DataTypes.STRING,
      field: 'last_name' 
    },
    salary: {
      type: DataTypes.INTEGER
  },
  experience: {
    type: DataTypes.FLOAT
  },
  gender: {
    type: DataTypes.STRING
  },
  mobile: {
    type: DataTypes.STRING
  }
   }, {
     sequelize,
     modelName: 'teacher',
   });
   Teacher.associate = (models) => {
     
     Teacher.belongsTo(models.school);
     Teacher.hasOne(models.class);
     

   }
   return Teacher;
 };
 

