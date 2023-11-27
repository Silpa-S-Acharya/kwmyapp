const mongoose = require('mongoose');
//const mongoURI = ''                                        //mongodb+srv://Silpa:silpa@cluster0.33xdbd7.mongodb.net/kwappdb?retryWrites=true&w=majority

const mongoDB = async() => {
    await mongoose.connect('mongodb://localhost:27017/kwappdb');
    console.log("connected");
    const fetched_data = await mongoose.connection.db.collection("users");
    
    fetched_data.find({}).toArray( function(err,data){
        if(err) console.log(err);
        else console.log();
    });

    const fetch_data = await mongoose.connection.db.collection("details");
    
    fetch_data.find({}).toArray( function(err,data1){
        if(err) console.log(err);
        else console.log();
    })
    
}

// SID: US7c765ff91e8f6c6970efe70b4d46e7b8
{/*const mongoAD = async() => {
    await mongoose.connect('mongodb://localhost:27017/kwappdb'
    );
    console.log("connected");
    const fetcheddata = await mongoose.connection.db.collection("applications");
    fetcheddata.find({}).toArray( function(err,data){
        if(err) console.log(err);
        else console.log();
    })
}

*/}
module.exports = mongoDB;
//module.exports = mongoAD;
