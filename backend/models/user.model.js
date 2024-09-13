

// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/sequelize').sequelize; 

// const User = sequelize.define('User', {
//   fullName: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   interests: {
//     type: DataTypes.STRING
//   },
//   profilePicture: {
//     type: DataTypes.STRING
//   },
//   additionalInfo: {
//     type: DataTypes.STRING
//   },
//   date: {
//     type: DataTypes.DATE,
//     defaultValue: DataTypes.NOW
//   }
// });

// module.exports = User;
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config').sequelize;
const bcrypt = require('bcrypt');

const User = sequelize.define('User', {
  fullName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  interests: {
    type: DataTypes.STRING
  },
  profilePicture: {
    type: DataTypes.STRING
  },
  additionalInfo: {
    type: DataTypes.STRING
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
});

// Hash password before saving
User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
});

// Method to compare passwords
User.prototype.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = User;
