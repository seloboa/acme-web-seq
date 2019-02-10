const db = require('../db');

const Page = db.define('page', {
  name: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Page;
