const db = require('./db');
const {Page, Content} = require('./models');
const {initDb} = require('./index');

initDb(true).then(async () => {
  const [homePage, employeesPage, contactPage] = await Promise.all([
    Page.create({name: 'Home'}),
    Page.create({name: 'Employees'}),
    Page.create({name: 'Contact'}),
  ]);

  const homeContent = await Promise.all([
    Content.create({name: 'Welcome Home 1', body: 'xoxoxo'}),
    Content.create({name: 'Welcome Home 2', body: 'xoxoxo'}),
  ]);

  const employeeContent = await Promise.all([
    Content.create({name: 'Larry', body: 'CTO'}),
    Content.create({name: 'Moe', body: 'CEO'}),
    Content.create({name: 'Curly', body: 'COO'}),
  ]);

  const contactContent = await Promise.all([
    Content.create({name: 'Phone', body: '212-555-1212'}),
    Content.create({name: 'Telex', body: '212-555-1213'}),
    Content.create({name: 'FAX', body: '212-555-1214'}),
  ]);

  const association = await Promise.all([
    homeContent.forEach(async content => {
      await content.setPage(homePage);
    }),
    employeeContent.forEach(async content => {
      await content.setPage(employeesPage);
    }),
    contactContent.forEach(async content => {
      await content.setPage(contactPage);
    }),
  ]);

  console.log('db seeded');
});
