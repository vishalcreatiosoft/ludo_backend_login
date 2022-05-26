const express = require('express');
const router = new express.Router();
const loginservice = require('./loginService');
let i = 1;

router.get('',(req, res)=>{
  res.render('index');
})


router.post('/login',async(req, res)=>{
    
    console.log('Inside login route ')
    
    const response = await loginservice.userLogin(req, res);

    console.log('after pomelo ....',response);
    res.end();
      
  });

  //game-server.app.servers.connector.handler.userHandler.loginByUserName'




module.exports = router;
