const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Subscription = sequelize.define('Subscription', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  planType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  expiresAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  paymentMethod: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Subscription;
