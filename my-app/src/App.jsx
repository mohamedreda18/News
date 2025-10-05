import React from 'react'
import './App.css'
import { Routes, Route, Router } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Business from './pages/Business';
import Entertainment from './pages/Entertainment';
import General from './pages/General';
import Health from './pages/Health';
import Science from './pages/Science';
import Sports from './pages/Sports';
import Technology from './pages/Technology';
import ArticlesPage from './pages/ArticlesPage';
import Footer from './components/Footer';
import SearchResults from './pages/SearchResults';

export function App() {

  return (
    <div >
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Business' element={<Business />} />
        <Route path='/Entertainment' element={<Entertainment />} />
        <Route path='/General' element={<General />} />
        <Route path='/Health' element={<Health />} />
        <Route path='/Science' element={<Science />} />
        <Route path='/Sports' element={<Sports />} />
        <Route path='/Technology' element={<Technology />} />
        <Route path='/articles/:title' element={<ArticlesPage />} />
        <Route path="/search" element={<SearchResults />} />

      </Routes>
      <Footer />

    </div>
  )
}

export default App
