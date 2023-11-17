const express = require("express")
const users = require("./mongo")
const applications = require("./mongo")
//const { users, applications } = require("./mongo");

const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


app.get("/",cors(),(req,res)=>{

})

app.post("/",async(req,res)=>{
    const {email,password}=req.body

    try{
        const check=await users.findOne({email:email})
        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }
    }
    catch(e){
        res.json("notexist")
    }
})



app.post("/register",async(req,res)=>{
    const {fname,email,password}=req.body
    const data = {
        fname:fname,
        email:email,
        password:password
    }

    try{
        const check=await users.findOne({email:email})
        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await users.insertMany([data])
        }
    }
    catch(e){
        res.json("notexist")
    }
})

app.post("/apply",async(req,res)=>{
    const {fname,age,address,gender,dob,cardno,district,category,panchayat,block,phoneno,email}=req.body
    const appdata = [{
        fname:fname,
        age:age,
        address:address,
        gender:gender,
        dob:dob,
        cardno:cardno,
        district:district,
        category:category,
        panchayat:panchayat,
        block:block,
        phoneno:phoneno,
        email:email
    }]

    .then((res) =>{
        res.json("Saved successfully");
    })
    .catch(error =>{
        console.log(error);
    })
    try{
        const check=await applications.findOne({email:email})
        if(check){
            res.json("exist")
        }
        else{
            
            await applications.insertMany([appdata]);
            res.json("submitted");
        }

    }
    catch(e){
        res.json("not submitted")
    }
})



app.listen(4000,()=>{
    console.log("port connected");
})