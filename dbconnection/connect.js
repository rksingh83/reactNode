const db = require('../config/keys').mongoURI;
const mongoose = require('mongoose');
  async function connectToDB(){ 
     try{
    // console.log('connected to mongodb')               
     const connection = await mongoose.connect('mongodb://localhost/user');
       if(connection) console.log('connected to mongodb')
     }
     catch(ex){
        console.log(ex.message)
        console.log('getting error ')
     }
  }

  module.exports  = connectToDB