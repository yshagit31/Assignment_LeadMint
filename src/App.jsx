import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'
 function App() {
  return (
    <div className='bg-slate-950 p-3'>
    <Router >
      <Routes>
          <Route path="/"  element= {<Register/>}> </Route>
          <Route path="/login" element ={<Login/>} ></Route>
          <Route path="/home/*" element={<Home></Home>} ></Route>
      </Routes>
    </Router>
    </div>

  )
}

export default App
