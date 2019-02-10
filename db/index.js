const db = require('./db');
const {Page, Content} = require('./models');

const initDb = (force = false) => {
  return db.authenticate().then(() => {
    Page.hasMany(Content);
    Content.belongsTo(Page);

    console.log('syncing');
    return db.sync({force});
  });
};

module.exports = {
  initDb,
  models: {
    Page,
    Content,
  },
};
