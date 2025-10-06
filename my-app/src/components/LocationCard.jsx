import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router';

const LocationCard = () => {
  const navigate = useNavigate();

  const[query , setQuery] = useState("")


  function handleLocation(e){
    e.preventDefault();
    if(!query.trim()) return ;

    navigate(`/search?q=${query}`)

    console.log(query)

  }

  return (
    <div className=' mx-auto px-4 mt-6'>
      <div>
        <h2 className='text-xl font-bold'>
          Location News
        </h2>
      </div>
      <div className='shadow-2xl '>

      <form className='space-y-4 px-5' onSubmit={handleLocation}>
        <div className=''>
          <label htmlFor="location" className='block mt-[30px]  mb-4'>
            Get Location specific News
          </label>
          <input
            value={query}
            onChange={(e)=> setQuery(e.target.value)}
           type="text" id='location' placeholder='Enter Your Location' className='p-4 border w-full focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-200'/>
        </div>
        <button type='submit' className='py-3 px-5 bg-red-700 text-white mb-5 cursor-pointer'>
          SUBMIT
        </button>
      </form>

      </div>
    </div>
  )
}

export default LocationCard
