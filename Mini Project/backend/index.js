const express = require('express')
//const mongoose = require('mongoose')
const app = express()
const port = 5000
const mongoDB = require("./db")
//const mongoAD = require("./db")
mongoDB();
//mongoAD();


app.use((req,res,next) => {
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();    
  
})
app.use(express.json())
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/ApplyUser"));
app.get('/', (req, res) => {
  res.send('Hello World kwapp!')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})