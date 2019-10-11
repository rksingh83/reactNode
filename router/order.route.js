

const exprss =  require('express');
const router  = exprss.Router();
const auth = require('./auth.js') ;

console.log(auth)
router.get('/' ,auth,(req,res)=>{
      return res.status(200).send(req.user);
})

module.exports = router ;