const express = require('express') ;
const router = express.Router() ;
const multer = require('multer') ;
const storage = multer.diskStorage({
   destination:function(req,res,cb){
       cb(null,'uploads')              
   } ,
   filename:function(req,file,cb){
     cb(null,`${file.fieldname} - ${Date.now()}`)
   }              
})
const upload = multer({storage:storage})

router.post('/',upload.single('pic'),(req,res)=>{
    const file = req.file ;
    if(!file) return res.status(404).send('file not found') ;
    res.status(200).send(file)
})


module.exports = router