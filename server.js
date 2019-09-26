
const express = require('express');
const user  = require('./router/user');
const connectToDB = require('./dbconnection/connect');
const auth  = require('./router/auth.router')
connectToDB();
const app = express();
  //console.log()
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(express.json())
app.use('/api/user',user);
app.use('/api/auth',auth);
const port = 5000
app.listen(port,()=>console.log('connected to node server'))

