const Sequelize = require ('sequelize');

module.exports = new Sequelize ('acme-web-seq','','',{
  dialect: 'postgres',
  logging: false,
});
