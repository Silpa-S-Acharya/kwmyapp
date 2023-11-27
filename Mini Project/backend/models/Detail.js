const mongoose = require('mongoose')


const { Schema } = mongoose;
const AppSchema = new Schema({
    fname: String,
    email: String,
    address: String,
});

module.exports = mongoose.model("details", AppSchema)
//module.exports = mongoose.model("applications",AppSchema)