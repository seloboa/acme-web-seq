const router = require('express').Router();
const db = require('../db/db');
const {Page, Content} = require('../db/models');

router.get('/',async (req,res,next)=>{
  try{
    const content = await Content.findAll({
      where:{
        pageId: 1
      }
    })
    res.send(content);
  }catch(err){
    next(err);
  }
})

module.exports = router;
