import React from 'react'
import './style.css';
//import { bgImg } from '../Images/logogreen.jpeg';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';
//import { useNavigate } from "react-router-dom";


function Login() {
  const history=useNavigate();
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  
  async function login(e){
  e.preventDefault();

  try{

    await axios.post("http://localhost:4000/",{
      email,password
    })
    .then((res)=>{
      if(res.data==="exist"){
        history("/Home",{state:{id:email}})

      }
      else if(res.data==="notexist"){
        alert("User have not sign up")

      }
    })
    .catch(e=>{
      alert("Wrong details")
      console.log(e);
    })
  }

  catch{
    console.log(e);
  }
 }
  return (
    <section className='login'>
        <div className='login template justify d-flex justify-content-center align-items-center vh-100 bg-primary '>
          <div className='form_container p-5 rounded '>
            
            <form action='POST'>
              <h3>Login</h3>
                <div className='text-center'>
                  <label htmlFor='email'> Email </label>
                    <input type='email' name="email" id="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" className='form-control'/>
                </div>
                <div className='mb-2'>
                  <label htmlFor='password'> Password </label>
                  <input type='password' name="password" id="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" className='form-control'/>
                </div>
                <div>
                  <label htmlFor='check'  className='custom-input-label ms-2'>
                  Remember Me
                  </label>
                  <input type='checkbox' name="check" id="check" className='custom-control-custom-checkbox'/>
                </div>

                <div className='d-grid'>
                      <button type='submit' onClick={login} className='btn btn-primary' >Sign in</button>
          
          </div>
          <p className='text-end-mt-2'>
            Forgot<a href="">Password?</a> <Link to='/Register' className='ms-2'>Register</Link>
          </p>
      </form>
      </div>
    </div>
    </section>

  )
}

export default Login
