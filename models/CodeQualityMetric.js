const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const CodeQualityMetric = sequelize.define('CodeQualityMetric', {
  repository_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  complexity_score: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  bugs: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  technical_debt: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  timestamp: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'code_quality_metrics',
  timestamps: false, // Disabling Sequelize's automatic timestamp fields (createdAt, updatedAt)
});

module.exports = CodeQualityMetric;
