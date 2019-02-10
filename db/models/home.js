const db = require('../db');

const Home = db.define('home', {
  name: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Home;
