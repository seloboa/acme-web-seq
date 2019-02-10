const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/',(req,res,next)=>{
  res.send('start');
})

app.listen(port, () => {
  console.log(`app listening on ${port}`);
});
