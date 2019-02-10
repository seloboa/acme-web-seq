const db = require('../db');

const Employee = db.define('employee', {
  name: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  title: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Employee;
