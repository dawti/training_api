'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class School extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  School.init({
    name: {
                    type: DataTypes.STRING,
                    field: 'school_name'
                },
        
                regnum: {
                    type: DataTypes.INTEGER,
                    field: 'register_number'
                },
        
                email: {
                    type: DataTypes.STRING
                },
        
                address: {
                    type: DataTypes.STRING
                },
        
                mobile: {
                    type: DataTypes.INTEGER
                },
        
                logo: {
                    type: DataTypes.STRING
                }
  }, {
    sequelize,
    modelName: 'school',
  });
  School.associate = (models) => {
   
    School.belongsTo(models.login);
    School.hasMany(models.studreg);
    School.hasMany(models.teacher);

  }
  return School;
};