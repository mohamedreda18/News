import React from 'react'
import NewsGrid from './NewsGrid'
import SideBar from './SideBar'

const MainContent = () => {
  return (
    <div className='"max-w-6xl mx-auto px-4 grid grid-cols-3'>
    <div className='col-span-2'>
      <NewsGrid />
      </div>
      <SideBar/>
    </div>
  )
}

export default MainContent
