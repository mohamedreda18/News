import React from 'react'
import './App.css'
import { Routes, Route, Router } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Business from './pages/Business';

export function App() {

  return (
    <div >
     
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Business' element={<Business/>}/>
        </Routes>
      
    </div>
  )
}

export default App
