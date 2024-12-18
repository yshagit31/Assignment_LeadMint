import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Analytics from './Analytics';
import Users from './Users';        
import Transactions from './Transactions'; 

const Home = () => {
  
    return (
        <div className="bg-white min-h-screen flex">
        <NavBar />    
        <div className="flex-grow p-0 ">
          <Routes>
            <Route path="/" element={<Analytics />}></Route>
            <Route path="/users" element={<Users />} />
            <Route path="/transactions" element={<Transactions />} />
          </Routes>
          </div>
        </div>
    
    );
};

export default Home;
