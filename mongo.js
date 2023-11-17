const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/kwappdb")
    .then(() => {
        console.log("mongodb connected");
    })
    .catch(() => {
        console.log('failed');
    })

const newSchema = new mongoose.Schema({
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
    }/*,
    age:{
        type:Number,
        required:true,
        trim:true,
        
    },
    
    gender:{
        type:String,
        required:true,
        trim:true,
    },
    dob:{
        type:Date,
        required:true,
        trim:true,
        
    },
    cardno:{
        type:Number,
        required:true,
        trim:true,
    },
    district:{
        type:String,
        required:true,
        trim:true,
        
    },
    category:{
        type:String,
        required:true,
        trim:true,
    
    },
    panchayat:{
        type:String,
        required:true,
        trim:true,
        
    },
    block:{
        type:String,
        required:true,
        trim:true,
        
    },
    phoneno:{
        type:Number,
        required:true,
        trim:true,
        
    }*/

})
//const users =  mongoose.model("users",newSchema)
//module.exports=users

const appSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        

    },
    address: {
        type: String,
        required: true,
        trim: true,
        
    },
    age: {
        type: Number,
        required: true,
     

    },

    gender: {
        type: String,
        required: true,
        
    },
    dob: {
        type: String,
        required: true,
        trim: true,

    },
    cardno: {
        type: Number,
        required: true,
    
    },
    district: {
        type: String,
        required: true,
       

    },
    category: {
        type: String,
        required: true,
        

    },
    panchayat: {
        type: String,
        required: true,
      

    },
    block: {
        type: String,
        required: true,
       

    },
    phoneno: {
        type: Number,
        required: true,
        

    },
    email: {
        type: String,
        required: true,
        
    }



})


const users = mongoose.model("users", newSchema)

const applications = mongoose.model("applications", appSchema)
module.exports = { users:users, 
    applications:applications }


