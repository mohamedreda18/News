import React from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';


export function App() {

  return (
    <div >
      <Header />

    <Home/>
    </div>
  )
}

export default App
