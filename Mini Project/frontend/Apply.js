import React from 'react'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'


export default function Apply() {
    //let navigate = useNavigate()

    const [credentials, setcredentials] = useState({ fname: "", email: "", address: "", mobno: "", gender: "", district: "", dob: "", panchayat: "", cardno: "" })


    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/applyuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fname: credentials.fname, email: credentials.email, address: credentials.address, mobno: credentials.mobno,
                gender: credentials.gender, district: credentials.district, dob: credentials.dob, panchayat: credentials.panchayat,
                cardno: credentials.cardno
            })
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
        setcredentials({ ...credentials, [event.target.name]: event.target.value })
    }
    return (

        <div className='register'>
            <div >
            <h1 className='h1apply' >Complete Your Profile</h1>
                <form onSubmit={handleSubmit} className='form_container p-5 rounded '>
                    <div className="col-lg-6">
                        <label htmlFor="fname" className="form-label">Full Name</label>
                        <input type="text" name="fname" value={credentials.fname} onChange={onChange} className="form-control" id="fname" />

                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="email" className="form-label">Email </label>
                        <input type="email" name="email" value={credentials.email} onChange={onChange} className="form-control" id="email" />

                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" name="address" value={credentials.address} onChange={onChange} className="form-control" id="address" />
                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="mobno" className="form-label">Mobile no</label>
                        <input type="text" name="mobno" value={credentials.mobno} onChange={onChange} className="form-control" id="mobno" />
                    </div>
                    <div className='col-lg-6'>
                        <label className='form-label' htmlFor="">Gender</label>&nbsp;&nbsp;
                        <input type="radio" name='gender' value={'Male'} onChange={onChange} id='m' /> <label className="form-label mt-2 ms-2" htmlFor="m">male</label>&nbsp;&nbsp;
                        <input type="radio" name='gender' value={'Female'} onChange={onChange} id='f' /><label className="form-label mt-1 ms-2" htmlFor="f">female</label>

                    </div>
                    {/* <div className="col-lg-6">
                        <label htmlFor="mobno" className="form-label">Gender</label>
                        <input type="text" name="gender" value={credentials.gender} onChange={onChange} className="form-control" id="gender" />
                    </div>*/}
                    <div className='col-lg-6'>
                    <label htmlFor="exampleI" className="form-label">District</label>
                    <select onChange={onChange} name='district' className="dropdown w-100 form-control" id="s1" >
                        <option className="dropdown-item disabled" aria-disabled="true" value="">Select ...</option>
                        <option className="dropdown-item" value={'Trivandrum'}>Trivandrum</option>
                        <option className="dropdown-item" value={'Kollam'}>Kollam</option>
                        <option className="dropdown-item" value={'Pathanamthitta'}>Pathanamthitta</option>
                        <option className="dropdown-item" value={'Alappuzha'}>Alappuzha</option>
                        <option className="dropdown-item" value={'Kottayam'}>Kottayam</option>
                        <option className="dropdown-item" value={'Idukki'}>Idukki</option>
                        <option className="dropdown-item" value={'Ernakulam'}>Ernakulam</option>
                        <option className="dropdown-item" value={'Thrissur'}>Thrissur</option>
                        <option className="dropdown-item" value={'Palakkad'}>Palakkad</option>
                        <option className="dropdown-item" value={'Malappuram'}>Malappuram</option>
                        <option className="dropdown-item" value={'Kozhikode'}>Kozhikode</option>
                        <option className="dropdown-item" value={'Wayanad'}>Wayanad</option>
                        <option className="dropdown-item" value={'Kannur'}>Kannur</option>
                        <option className="dropdown-item" value={'Kasaragod'}>Kasaragod</option>
                    </select>
                    </div>
                    
                    <div className="col-lg-6">
                        <label htmlFor="dob" className="form-label">Date of Birth</label>
                        <input type="date" name="dob" value={credentials.dob} onChange={onChange} className="form-control" id="dob" />
                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="panchayat" className="form-label">Panchayat</label>
                        <input type="text" name="panchayat" value={credentials.panchayat} onChange={onChange} className="form-control" id="panchayat" />
                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="cardno" className="form-label">Card no</label>
                        <input type="text" name="cardno" value={credentials.cardno} onChange={onChange} className="form-control" id="cardno" placeholder='KL12002006003-39' />
                    </div>

                    <button type="submit" className="btn btn-success">Submit</button>
                    <Link to="/" className='m-3 btn btn-danger'>Already a user</Link>
                </form>
            </div>

        </div>
    )
}
