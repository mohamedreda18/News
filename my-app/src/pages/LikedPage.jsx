

import React from 'react'
import { useContext } from 'react'
import ArticleCard from '../components/ArticleCard'
import { likeContext } from '../hooks/context'

const LikedPage = () => {


    const { likedCards } = useContext(likeContext)



    return (
        <div className="p-6 min-h-screen ">
      <div>
        <h1 className="text-2xl font-semibold mb-4">
          Liked Page
        </h1>
        <div className="grid md:grid-cols-3 gap-6">
          {likedCards.map((item, index) => (
            <ArticleCard key={index} {...item}  />
          ))}
        </div>
      </div>
    </div>
    )
}

export default LikedPage
