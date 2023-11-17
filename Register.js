import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios"
const Register = () => {

    const history = useNavigate();
    //const [id, idchange] = useState("");
    const [fname, namechange] = useState("");
    const [password, passwordchange] = useState("");
    const [email, emailchange] = useState("");
    //const [phone, phonechange] = useState("");
    //const [country, countrychange] = useState("india");
    //const [address, addresschange] = useState("");
    //const [gender, genderchange] = useState("female");

    async function submit(e){
        e.preventDefault();
        try{
            await axios.post("http://localhost:4000/Register",{
                fname,email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    alert("User already exist");
                    toast.success('Registered successfully.')
                }
                else if(res.data==="notexist"){
                    history("/home",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("Wrong details");
                console.log(e);
            })
        }
        catch(e){
            alert("Wrong details");
            console.log(e);
        }
    }

    return (
        <div className="'register template justify d-flex justify-content-center align-items-center vh-100 bg-primary '">
            <div>
                <form className="'form_container p-3 rounded bg-white'" action="POST">
                    <div className="card">
                        <div className="card-header">
                            <h1>User Registeration</h1>
                        </div>
                        <div className="card-body">

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Full Name <span className="errmsg">*</span></label>
                                        <input value={fname} onChange={e => namechange(e.target.value)} type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Email <span className="errmsg">*</span></label>
                                        <input value={email} onChange={e => emailchange(e.target.value)} type="email" className="form-control"/>
                                    </div>
                                </div>
                        

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Password <span className="errmsg">*</span></label>
                                        <input value={password} onChange={e => passwordchange(e.target.value)} type="password" className="form-control"/>
                                    </div>
                                </div>
                               
                            </div>

                        </div>
                        <div className="card-footer">
                            <button type="submit" onClick={submit} className="btn btn-primary">Register</button>
                            <p></p>
                            <Link to="/" className="btn btn-danger">Close</Link>
                        </div>
                    </div>
                </form>
            </div>


        </div>
    );
}

export default Register;
