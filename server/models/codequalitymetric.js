'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CodeQualityMetric extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CodeQualityMetric.init({
    complexity: DataTypes.INTEGER,
    bugs: DataTypes.INTEGER,
    technicalDebt: DataTypes.INTEGER,
    commitId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CodeQualityMetric',
  });
  return CodeQualityMetric;
};