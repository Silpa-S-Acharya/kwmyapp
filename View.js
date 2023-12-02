import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


export default function View() {
  const [user,setUser]=useState({})
  const {id}=useParams()


  useEffect (()=>{

  },[])

  return (
    <>
    <div className="container rounded bg-white mt-5 mb-5">
      <nav>
        <ul id="navbar" className="nav justify-content-end">
          <li className="active">
            <a className="nav-link " href="/">Home</a>
          </li>
          <li className="ms-2">
            <a className="nav-link" href="/Logout">Logout</a>
          </li>
        </ul>
      </nav>
      

      <div className="container emp-profile">
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Profile Settings</h4>
            </div>
            <div className="row mt-2">

              <ul className="list-group">
                <li id='d' className="list-group-item mt-2">
                  <span><i className="fa-solid fa-user px-3"></i> Full Name</span> <strong className='ms-2'></strong>
                </li>
                <li id='d' className="list-group-item mt-2">
                  <span><i className="fa-solid fa-envelope px-3"></i>Email </span> <strong className='ms-2'></strong>
                </li>
                <li id='d' className="list-group-item mt-2">
                  <span> <i className="fa-solid fa-phone-volume px-3"></i> Mobile Number</span> <strong className='ms-2'></strong>
                </li>
                <li id='d' className="list-group-item mt-2">
                  <span><i className="fa-solid fa-user-shield px-3"></i> Card no:</span> <strong className='ms-2'></strong>
                </li>
                <li id='d' className="list-group-item mt-2">
                  <span><i className="fa-solid fa-user-shield px-3"></i> District</span> <strong className='ms-2'></strong>
                </li>
                <li id='d' className="list-group-item mt-2">
                  <span> <i className="fa-solid fa-person-half-dress px-3"></i> Gender</span> <strong className='ms-2'></strong>
                </li>
              </ul>
              <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
          </div>

        </div>
      </div>
    </div>
    </>


  )
}
