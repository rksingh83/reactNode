const mongoose = require('mongoose');
const Joi =  require('joi');
const jwt  = require('jsonwebtoken');
const config = require('config');
const userShema = new mongoose.Schema({
     name:{
       type:String,
       minlength:3,
       maxlength:225,
       required:true
     },
     email:{
          type:String,
          minlength:3,
          maxlength:50,
          unique:true,
          required:true,
     },
     password:{
     type:String,
     required:true,
     minlength :5,
     maxlength:20246
     }
})
userShema.methods.generateAuthToken = function(){
      return jwt.sign({_id:this._id},'priverKey')
}
const User = mongoose.model('User',userShema);



function userValidate(user){
     const userShema = {
          name:Joi.string().min(3).max(50).required(),
          password:Joi.string().min(3).max(500).required(),
          email:Joi.string().required().email()
     }
     return Joi.validate(user,userShema)
  }
exports.User = User;
exports.validate =  userValidate;