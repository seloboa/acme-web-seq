const db = require('./db');
const {Home, Employee, Contact} = requre('./models');

const initDb = (force = false) => {
  return db.authenticate().then(db.sync({force}));
};

module.exports = {
  initDb,
  models: {
    Home,
    Employee,
    Contact,
  },
};
