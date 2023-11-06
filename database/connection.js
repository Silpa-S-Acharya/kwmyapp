const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/kwappdb').then(()=>{
    console.log('!!!!!!Mongodb Connected !!!!!!!!!!');
}).catch((err)=>{
    console.log(`......Mongodb connection error ${err}`);
});
//module.exports = connectDB;