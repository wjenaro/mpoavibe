
require('dotenv').config(); // Load environment variables
const { Sequelize } = require('sequelize');

// Create a new Sequelize instance using environment variables
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT,
  }
);
//test database connectiion =------------

// Define a database object to export
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Test database connection
sequelize.authenticate()
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.error('Unable to connect to the database:', err));

module.exports = db;
