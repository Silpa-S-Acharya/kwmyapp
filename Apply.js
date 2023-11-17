import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios"
const Apply = () => {

  //const history = useNavigate();
  //const [id, idchange] = useState("");
  const [fname, namechange] = useState("Usha Suresh");
  const [address, addresschange] = useState("Kalthoor house, kuriannoor p.o");
  const [age, setage] = useState("50");
  const [gender, genderchange] = useState("Female");
  const [district, setdistrict] = useState('Pathanamthitta');
  const [panchayat, setpanchayat] = useState("Thottapuzhasserry");
  const [block, setblock] = useState("Koipuram");
  const [phoneno, setphoneno] = useState("9778536265");
  const [category, setcategory] = useState("OBC");
  const [dob, setdob] = useState("05/22/1973");
  const [cardno, setcardno] = useState("KL12002006003 39");
  const [email, emailchange] = useState("usha@gmail.com");


  async function apply(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/Apply", {
        fname, address, age, gender, dob, cardno, district, category, panchayat, block, phoneno, email

      })
        .then((res) => {
          if (res.appdata === "submitted") {

            toast.success('Registered successfully.');
          }
          /*else 
          if (res.ordata === "not submitted") {
            history("/home", { state: { id: email } })
          }*/
        })
        .catch((e) => {
          toast.error('Failed:');

        });
    }
    catch (e) {
      //alert("Wrong details");
      console.log(e);
    }
  }

  return (
    <div className="'register template justify d-flex justify-content-center align-items-center vh-100 bg-primary '">
      <div>
        <form className="'form_container p-3 rounded bg-white'" action="POST">
          <div className="card">
            <div className="card-header">
              <h1>Fill the application</h1>
            </div>
            <div className="card-body">

              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Full Name <span className="errmsg">*</span></label>
                    <input value={fname} onChange={e => namechange(e.target.value)} type="text" className="form-control" />
                  </div>
                </div>


                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Address <span className="errmsg">*</span></label>
                    <input value={address} onChange={e => addresschange(e.target.value)} type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Age <span className="errmsg">*</span></label>
                    <input value={age} onChange={e => setage(e.target.value)} type="number" className="form-control" />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Gender <span className="errmsg">*&nbsp; &nbsp;</span></label>
                    <input type="radio" checked={gender === 'Male'} onChange={e => genderchange(e.target.value)} name="gender" value="Male" id='gender' className='app-check' />
                    <label>Female </label>&nbsp;&nbsp;
                    <input type="radio" checked={gender === 'Female'} onChange={e => genderchange(e.target.value)} name="gender" value="Female" id='gender' className='app-check' />
                    <label>Male</label>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Date of birth <span className="errmsg">*</span></label>
                    <input value={dob} onChange={e => setdob(e.target.value)} type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Card no: <span className="errmsg">*</span></label>
                    <input value={cardno} onChange={e => setcardno(e.target.value)} type="text" placeholder="KL12002006003 39" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>District</label>&nbsp;&nbsp;<select value={district} onChange={e => setdistrict(e.target.value)}>
                      <option>Thiruvananthapuram</option>
                      <option>Kollam</option>
                      <option>Pathanamthitta</option>
                      <option>Alappuzha</option>
                      <option>Kottayam</option>
                      <option>Idukki</option>
                      <option>Ernakulam</option>
                      <option>Thrissur</option>
                      <option>Palakkad</option>
                      <option>Malappuram</option>
                      <option>Kozhikode</option>
                      <option>Wayanad</option>
                      <option>Kannur</option>
                      <option>Kasaragod</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Category</label>&nbsp;&nbsp;
                    <select value={category} onChange={e => setcategory(e.target.value)}>
                      <option>General</option>
                      <option>OBC</option>
                      <option>SC/ST</option>
                    </select>                </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Panchayat <span className="errmsg">*</span></label>
                    <input value={panchayat} onChange={e => setpanchayat(e.target.value)} type="text" className="form-control" />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Block <span className="errmsg">*</span></label>
                    <input value={block} onChange={e => setblock(e.target.value)} type="text" className="form-control" />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Phone no <span className="errmsg">*</span></label>
                    <input value={phoneno} onChange={e => setphoneno(e.target.value)} type="tel" placeholder="1234567890" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Email <span className="errmsg">*</span></label>
                    <input value={email} onChange={e => emailchange(e.target.value)} type="email" className="form-control" />
                  </div>
                </div>
              </div>

            </div>
            <div className="card-footer">
              <button type="submit" onClick={apply} className="btn btn-primary">Submit</button>
              <p></p>
              <Link to="/" className="btn btn-danger">Close</Link>

            </div>
          </div>
        </form>
      </div>


    </div>
  );
}

export default Apply;
