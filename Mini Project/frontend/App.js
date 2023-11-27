//import logo from './logo.svg';
//import { Routes } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Head from './Component/Head';
//import Login from './Component/Login';
import Footer from './Component/Footer';
import Home from './screens/Home';
import Signup from './screens/Signup';
import Login from './screens/Login';
import Apply from './screens/Apply';
import Maternlogin from './screens/Maternlogin';
import Maternsignup from './screens/Maternsignup';
//import Navbar from './Component/Navbar';
//import './bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Button } from 'react-bootstrap';
//import  { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';


function App() {

  return (
    <div className="App">
      <ToastContainer theme='colored'></ToastContainer>
      <Head></Head>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/Login' element={<Login></Login>} />
          <Route path='/Signup' element={<Signup></Signup>} />
          <Route path='/Apply' element={<Apply></Apply>}/>
          {/*
          <Route path="/Maternlogin" element={<Maternlogin/>}/>
          <Route path="/Maternsignup" element={<Maternsignup></Maternsignup>}/>
          
          <Route path="/About" element={<About/>}/>
          <Route path="/Logout" element={<Logout></Logout>}/>*/}
        </Routes>
      </BrowserRouter>
      <Footer></Footer>

    </div>
  );
}

export default App;
