const multer=require('multer')

const storage=multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'./uploads')
    },
    filename:(req,file,callback)=>{
        callback(null,`images-${Date.now()}-${file.originalname}`)
    }
})

//file filtering
const fileFilter=(req,file,callback)=>{
    if(file.mimetype=='image/png' || file.mimetype=='image/jpg' || file.mimetype=='image/jpeg' || file.mimetype=='image/JPEG' || file.mimetype=='image/PNG' ||file.mimetype=='image/PNG' ){
        callback(null,true)
    }
    else{
        callback(null,false)
        return callback(new Error('only accepts png/jpg/jpeg format files'))
    }
}
const upload=multer({storage,fileFilter})

module.exports=upload