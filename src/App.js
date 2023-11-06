//import logo from './logo.svg';
//import { Routes } from 'react-router-dom';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Head from './Component/Head';
import Login from './Component/Login';
import Register from './Component/Register';
import Footer from './Component/Footer';
import Home from './Component/Home';
//import './bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';

function App() {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch("http://localhost:4000/")
    .then(res => res.json())
    .then(data =>setData(data.message))
    .catch(err => console.log(err));
  })
  return (
    <div className="App">
      <ToastContainer theme='colored'></ToastContainer>
    <Head></Head>
      <BrowserRouter>
        <Routes>
        /*<Route path='/' element={<Home></Home>}/>*/
          <Route path='/Login' element={<Login></Login>}/>
          <Route path='/Register' element={<Register></Register>}/>
        </Routes>
      </BrowserRouter>
    <Footer></Footer>
    </div>
  );
}

export default App;
