const { response } = require("mongoose")
const users=require('./model/kwmodel')


export const register = async (req,res) => {
    const file = req.file.filename 
    const { fname, lname, email, gender, password, confirm_password } = req.body 
    if (!fname || !lname || !email || !gender || !password || !confirm_password ){
        res.status(404).json("All inputs are required")
    }
    try{
        const preEmployee=await users.findOne({email})
        if (preEmployee) {
            res.status(403).json("Employee present")
        }
        else{
                //create object for new employee
            const newEmployee = new employees({ fname, lname, email, gender, password, confirm_password })=
            await newEmployee.save()
    
            res.status(400).json(newEmployee)
    
        }
    }
    catch{
        res.status(400).json("Logic Error")
    }

}