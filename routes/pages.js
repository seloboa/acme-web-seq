const router = require('express').Router();
const db = require('../db/db');
const {Page, Content} = require('../db/models');
const homePage = require ('../views/homeView');

router.get('/',async (req,res,next)=>{
  try{
    const content = await Content.findAll({
      where:{
        pageId: 1
      }
    })
    res.send(homePage(content));
  }catch(err){
    next(err);
  }
})

module.exports = router;
