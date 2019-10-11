

const mongoose = require('mongoose') ;

const orderShema = new mongoose.Schema({
   user:{
     type :mongoose.Schema.Types.ObjectId ,
     ref :'User'
   }
   
})