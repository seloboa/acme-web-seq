const db = require('../db');

const Contact = db.define('contact', {
  type: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  numbers: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Contact;
