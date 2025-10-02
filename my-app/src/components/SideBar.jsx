import React from 'react'
import image from '../assets/image2.png'
import LocationCard from './LocationCard'


const SideBar = () => {
    return (
        <div>
            <div className='max-w-6xl mx-auto px-4 mt-6 '>
                <div className='flex space-x-1.5 mb-[2rem]'>
                    <span className='text-red-500 font-bold '>Live</span>
                    <span><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14 21C17.866 21 21 17.866 21 14C21 10.134 17.866 7 14 7C10.134 7 7 10.134 7 14C7 17.866 10.134 21 14 21Z" fill="#C31815" />
                        <path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M14 24C19.5228 24 24 19.5228 24 14C24 8.47715 19.5228 4 14 4C8.47715 4 4 8.47715 4 14C4 19.5228 8.47715 24 14 24Z" stroke="#C31815" stroke-width="0.5" />
                        <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M14 27C21.1797 27 27 21.1797 27 14C27 6.8203 21.1797 1 14 1C6.8203 1 1 6.8203 1 14C1 21.1797 6.8203 27 14 27Z" stroke="#C31815" stroke-width="0.5" />
                    </svg>
                    </span>
                </div>
                <div>
                    <img src={image} alt="" />
                </div>
                <div>
                    <h2 className='font-bold text-2xl pt-4'>
                        Beloved Arizona coach loses battle with coronavirus
                    </h2>
                </div>
            </div>
            <LocationCard/>
        </div>
    )
}

export default SideBar
