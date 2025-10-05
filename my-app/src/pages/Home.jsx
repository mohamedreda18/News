import React from 'react'
import Trending from '../components/Trending'
import BreakingNews from '../components/BreakingNews'
import MainContent from '../components/MainContent'
import Footer from '../components/Footer'
import Editors from '../components/Editors'

const Home = () => {
  return (
    <div className=' min-h-screen'>



      <Trending/>
      <BreakingNews/>
        <MainContent/>
        <Editors/>
    </div>
  )
}

export default Home
