import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";

export default function Signup() {
    let navigate = useNavigate()

    const[ credentials,setcredentials ] = useState({ fname:"",email:"",password:"",mobno:"" })


    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch("http://localhost:5000/api/createuser",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({ fname:credentials.fname,email:credentials.email,password:credentials.password,mobno:credentials.mobno})
        });
        const json = await response.json()
        console.log(json);
        if(!json.success){
            alert("Enter valid credentials");
        }
        else{
            toast.success("Registered successfully");
            navigate("/Apply")
        }

    }
    const onChange =(event)=>{
        setcredentials({...credentials,[event.target.name]:event.target.value})
    }
    return (
        <div className='login template justify d-flex justify-content-center align-items-center vh-100 bg-primary '>
            <div className='form_container p-5 rounded '>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="fname" className="form-label">Full Name</label>
                        <input type="text" name="fname" value={credentials.fname} onChange={onChange} className="form-control" id="fname" aria-describedby="fname" />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name="email" value={credentials.email} onChange={onChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="mobno" className="form-label">Mobile no</label>
                        <input type="integer" name="mobno" value={credentials.mobno} onChange={onChange} className="form-control" id="mobno" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name="password" value={credentials.password} onChange={onChange} className="form-control" id="exampleInputPassword1" />
                    </div>

                    <button type="submit" className="btn btn-success">Submit</button>
                    <Link to="/apply" className='m-3 btn btn-danger'>Already a user</Link>
                </form>
            </div>
        </div>
    )
}
