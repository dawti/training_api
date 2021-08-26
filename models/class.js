'use strict';
 const {
   Model
 } = require('sequelize');
 module.exports = (sequelize, DataTypes) => {
   class Class extends Model {
     /**
      * Helper method for defining associations.
      * This method is not a part of Sequelize lifecycle.
      * The `models/index` file will call this method automatically.
      */
     static associate(models) {
       // define association here
     }
   };
   Class.init({
     name: DataTypes.STRING,
     startDate: {
      type: DataTypes.DATE,
      field: 'start_date' 
    },
    endDate: {
      type: DataTypes.DATE,
      field: 'end_date' 
  }
   }, {
     sequelize,
     modelName: 'class',
   });
   Class.associate = (models) => {
     Class.belongsTo(models.teacher);
    
    }
   return Class;
 };
 