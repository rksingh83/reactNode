const exprss =  require('express');
const {User,validate} = require('../models/user');
const bcrypt = require('bcrypt')

const mongoose = require('mongoose');
const router = exprss.Router();

router.post('/',async (req,res)=>{
     
    const {error} = validate(req.body);
    if(error){
       res.status(400).send(error.details[0].message);
       return;
    };
     const {name,email,password} = req.body;
     let user = await User.findOne({email});
     if(user){
         res.status(400).send('Allready registered');
         return;
     }
      user = new User({name,email,password });
      const salt = await bcrypt.genSalt(10);
      user.password =  await bcrypt.hash(password,salt)
     
     try{          
                   
                  await user.save();
                  const token =user.generateAuthToken()
                  return res.header('X-auth-token',token).send(user)
     }
     catch(e){
       console.log(e.message);
       res.send(e)
     }

});

router.get('/',async (req,res)=>{
     
                   try{
                         let user =  await User.find();
                          return res.send(user)
                   }
                   catch(e){
                     console.log(e.message);
                     res.send(e)
                   }
              
              });

module.exports =router;
