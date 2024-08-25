const sequelize = require('./models');
const CodeQualityMetric = require('./models/CodeQualityMetric');

sequelize.sync({ force: true }) // Use force: true to drop and recreate the table each time
  .then(() => {
    console.log('Database & table created!');
  })
  .catch(err => console.error('Error creating table:', err));
