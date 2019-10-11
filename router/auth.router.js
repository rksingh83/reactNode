const exprss =  require('express');
const {User} = require('../models/user');
const bcrypt = require('bcrypt');
const Joi =  require('joi');
const jwt  = require('jsonwebtoken');
const config = require('config');

const mongoose = require('mongoose');
const router = exprss.Router();

router.post('/',async (req,res)=>{
     
    const {error} = validate(req.body);
    if(error){
       res.status(400).send(error.details[0].message);
       return;
    };
    
    
     
    
     try{       
              const {email,password} = req.body;   
              let user = await User.findOne({email});
              if(!user) return res.status(400).send('Email Or Passwaord Does not match')
              const isValidUser = await  bcrypt.compare(req.body.password,user.password);
              if(!isValidUser) return res.status(400).send('Email Or Passwaord Does not match')
             const token   = user.generateAuthToken()
              const sendRes = {token:token,userid:user._id,userName:user.name,email:user.email,role:user.role}
              return res.header('X-auth-token',token).send(sendRes)
     }
     catch(e){
     ;
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



              function validate(user){
                  const userShema = {
                      
                       password:Joi.string().min(3).max(250).required(),
                       email:Joi.string().required().email()
                  }
                  return Joi.validate(user,userShema)
               }

module.exports =router;
