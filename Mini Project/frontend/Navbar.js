import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav>
                <ul id="navbar" className="nav justify-content-end">
                    <li className="active">
                        <a className="nav-link active" aria-current="page" href="/Home">Home</a>
                    </li>
                    <li className="ms-2">
                        <a className="nav-link" href="/Login">Login</a>
                    </li>
                    <li className="ms-2">
                        <a className="nav-link" href="/Signup">Signup</a>
                    </li>
                    <li className="ms-2">
                        <a className="nav-link" href="/Apply">Apply</a>
                    </li>
                    <li className="ms-2">
                        <a className="nav-link" href="/Maternlogin">Matern login</a>
                    </li>
                    <li className="ms-2">
                        <a className="nav-link" href="/Maternsignup">Matern signup</a>
                    </li>
                    

                </ul>
            </nav>
        </div>
    )
}
