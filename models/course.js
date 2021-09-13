
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Course.init({
    name: {
        type: DataTypes.STRING
    },
    total_hour: {
        type: DataTypes.FLOAT
    }
  }, {
    sequelize,
    modelName: 'course',
  });

  Course.associate = (models) => {
    Course.belongsToMany(models.class, { through: 'ClassCourses' });
    Course.belongsToMany(models.teacher, { through: 'teachercourses' });

   }

  return Course;
};