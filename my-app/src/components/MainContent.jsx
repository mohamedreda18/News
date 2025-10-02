import React from 'react'
import NewsGrid from './NewsGrid'
import SideBar from './SideBar'

const MainContent = () => {
    return (
        <div className='"max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3  mt-[2rem] '>
            <div className=' md:col-span-2'>
                <NewsGrid />
            </div>
            <div>
                <SideBar/>
            </div>
        </div>
    )
}

export default MainContent
