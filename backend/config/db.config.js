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

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Define models here (e.g., db.User = require('./models/user.model')(sequelize, Sequelize));

module.exports = { db };
