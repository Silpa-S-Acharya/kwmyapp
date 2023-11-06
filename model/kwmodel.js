//const { default: mongoose } = require("mongoose");

const eschema = new mongoose.Schema({
    id:{
        type:String,
        required:true,
        trim:true,

    },
    password:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
    name:{
        type:String,
        required:true,
        trim:true,

    },

    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
    gender:{
        type:String,
        required:true,

    },

    profile:{
        type:String,
        required:true,
    }
})
const users=new mongoose.model('users',eschema)
module.exports=users