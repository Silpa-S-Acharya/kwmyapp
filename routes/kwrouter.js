const express=require('express')
const upload = require('../multer/config')
const { register } = require('../controllers/logic')


//create an object for router class in express
const router=new express.Router()

//register employee post
router.post('/user/register',upload.single('user_profile'),register)
module.exports=router