const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Match = sequelize.define('Match', {
  userId1: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  userId2: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
});

module.exports = Match;
