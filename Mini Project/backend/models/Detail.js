const mongoose = require('mongoose')


const { Schema } = mongoose;
const AppSchema = new Schema({
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
    address: {
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
    }, 
    gender:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    dob:{
        type:Date,
        required:true,
        default:Date.now
    },
    panchayat:{
        type:String,
        required:true
    },
    cardno:{
        type:String,
        required:true,
        minlength:14,
        maxlength:16
    }
});

module.exports = mongoose.model("details", AppSchema)
//module.exports = mongoose.model("applications",AppSchema)
