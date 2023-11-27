const express = require('express')
const router = express.Router()

router.post('/userData',(req,res)=>{
    try{
        console.log(global.users)
        res.send([global.users])
    }
    catch(error){
        console.error(error.message);
        res.send("Server error")

    }
})

module.exports = router;