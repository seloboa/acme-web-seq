const router = require('express').Router();
const db = require('../db/db');
const {Page, Content} = require('../db/models');
const homePage = require ('../views/mainView');

router.get('/:id',async (req,res,next)=>{
  try{
    const pages = await Page.findAll();
    const contents = await Content.findAll({
      where:{
        pageId: req.params.id
      }
    })
    res.send(homePage(pages, contents, req.params.id));
  }catch(err){
    next(err);
  }
})

module.exports = router;
