const db = require('../db');

const Content = db.define('content', {
  name: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  body: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Content;
