const express = require('express');
const app = express();
const routes = require('./routes/pages');
const port = process.env.PORT || 3000;

app.use('/pages', routes);

app.get('/',(req,res,next)=>{
  res.redirect('/pages');
})

app.listen(port, () => {
  console.log(`app listening on ${port}`);
});
