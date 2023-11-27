import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";


export default function Login() {

  let navigate = useNavigate()
  const [credentials, setcredentials] = useState({ email: "", password: "" })


  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    const json = await response.json()
    console.log(json);
    if (!json.success) {
      alert("Enter valid credentials");
    }
    if (json.success) {
      navigate("/");
    }

    else {
      toast.error("Invalid inputs");
    }

  }
  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value })
  }

  return (
    <div className='login template justify d-flex justify-content-center align-items-center vh-100 bg-primary '>
      <div className='form_container p-5 rounded '>
        <form onSubmit={ handleSubmit }>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" name="email" value={credentials.email} onChange={onChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" name="password" value={credentials.password} onChange={onChange} className="form-control" id="exampleInputPassword1" />
          </div>

          <button type="submit" className="btn btn-success">Submit</button>
          <Link to="/createuser" className='m-3 btn btn-danger'>New User</Link>
        </form>
      </div>
    </div>
  )
}
