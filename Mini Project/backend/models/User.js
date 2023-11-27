const mongoose = require('mongoose')


const { Schema } = mongoose;
const UserSchema =  new Schema({
    fname: {
        type: String,
        required: true,
        trim: true,

    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    mobno: {
        type:String,
        required:true,
        trim:true,
        unique:true,
        minlength:10,
        maxlength:13
    }
});

module.exports = mongoose.model("users",UserSchema)
//module.exports = mongoose.model("applications",AppSchema)