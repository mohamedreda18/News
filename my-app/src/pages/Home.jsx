import React from 'react'
import Trending from '../components/Trending'
import BreakingNews from '../components/BreakingNews'
import MainContent from '../components/MainContent'

const Home = () => {
  return (
    <div>
      <Trending/>
      <BreakingNews/>
        <MainContent/>
    </div>
  )
}

export default Home
