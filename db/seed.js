const db = require('./db');
const {Home, Employee, Contact} = require('./models');
const initDb = require('./index');

initDb(true)=>{
  const createHome = Home.create({
    name: 'Welcome Home 1',
    content: 'xoxoxo'
  })

}
