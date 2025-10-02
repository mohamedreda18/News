import React from 'react'
import Trending from '../components/Trending'
import BreakingNews from '../components/BreakingNews'
import MainContent from '../components/MainContent'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Trending/>
      <BreakingNews/>
        <MainContent/>
        <Footer/>
    </div>
  )
}

export default Home
