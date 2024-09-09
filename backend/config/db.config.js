const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Define models here (e.g., db.User = require('./models/user.model')(sequelize, Sequelize));

module.exports = { db };
