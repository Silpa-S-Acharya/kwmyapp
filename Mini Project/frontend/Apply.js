import React from 'react'
import {toast } from 'react-toastify'
import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react'


export default function Apply() {
    //let navigate = useNavigate()

    const [credentials, setcredentials] = useState({ fname: "", email: "", address: "" })


    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/applyuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ fname: credentials.fname, email: credentials.email, address: credentials.address })
        });
        const json = await response.json()
        console.log(json);
        if (!json.success) {
            alert("Enter all inputs");
        }
        else {
            toast.success("Submitted successfully");
            //navigate("/")
        }

    }
    const onChange = (event) => {
        setcredentials({ ...credentials,[event.target.name]: event.target.value })
    }
    return (

        <div className='login template justify d-flex justify-content-center align-items-center vh-100 bg-primary '>
            <div className='form_container p-5 rounded '>
                <form onSubmit = { handleSubmit }>
                    <div className="mb-3">
                        <label htmlFor="fname" className="form-label">Full Name</label>
                        <input type="text" name="fname" value={credentials.fname} onChange={onChange} className="form-control" id="fname"  />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email </label>
                        <input type="email" name="email" value={credentials.email} onChange={onChange} className="form-control" id="email"  />
                        
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" name="address" value={credentials.address} onChange={onChange} className="form-control" id="address" />
                    </div>
                    

                    <button type="submit" className="btn btn-success">Submit</button>
                    <Link to="/" className='m-3 btn btn-danger'>Already a user</Link>
                </form>
            </div>

        </div>
    )
}
