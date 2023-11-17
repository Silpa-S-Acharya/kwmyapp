import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';
function Home() {
  const location = useLocation();
  //const [data, setdata] = useState()
  return (
    <div className="homepage">


      <h1>Hello {location.state.id} and welcome</h1>
      <nav>
        <div>
          <ul id="navbar">
            <li className='active'><Link to='/Home' className='ms-2'>Home</Link></li>
            <li><Link to='/About' className='ms-2'>About</Link></li>
            <li><Link to='/Apply' className='ms-2'>Apply</Link></li>
            <li><Link to='/Contact' className='ms-2'>Contact</Link></li>
            <li><Link to='/Logout' className='ms-2'>Logout</Link></li>
          </ul>
        </div>
      </nav>


    </div>
  )
}

export default Home
