const Sequelize = require ('sequelize');

module.exports = new Sequelize ('acmewebseq','','',{
  dialect: 'postgres',
  logging: false,
});
