'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Studreg extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Studreg.init({
    firstName: {
      type: DataTypes.STRING,
      field: 'first_name'
    },
    lastName: {
      type: DataTypes.STRING,
      field: 'last_name'
    },
    dob: {
      type: DataTypes.DATE
    },
    email: {
      type: DataTypes.STRING
    },
    gender: {
      type: DataTypes.STRING
    },
    mobile: {
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING
    },
    doj: {
      type: DataTypes.DATE
    }/* ,
    guardRelation: {
      type: DataTypes.STRING
    } */
  }, {
    sequelize,
    modelName: 'studreg',
  });
  Studreg.associate = (models) => {
    Studreg.belongsTo(models.class);
    Studreg.belongsTo(models.school);
    Studreg.belongsTo(models.login);
  }
  return Studreg;
};