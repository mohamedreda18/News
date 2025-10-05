import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ArticleCard from '../components/ArticleCard'

const Sports = () => {
    const [Sports, setSports] = useState([]);
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [visibleCount, setVisibleCount] = useState(4)

    const loadMore = () => {
        setVisibleCount((prev) => prev + 4)
    }

    useEffect(() => {
        const loadSports = async () => {
            try {
                const response = await axios.get('https://newsapi.org/v2/top-headlines?category=Sports&apiKey=f273e871107a4ed7a9b7e03417a27c14')
                setSports(response.data.articles)
                setError(null) 
            } catch (error) {
                setError("Failed to load Sports news")
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        loadSports();
    }, [])

    return (
        <div className='container mx-auto px-4 mt-5 min-h-screen'>
            <div >
                <div className='w-full flex justify-center my-5'>
                    <h2 className=' text-2xl font-bold'>
                        Sports Articles
                    </h2>
                </div>
                <div className='grid  md:grid-cols-4 sm:grid-cols-1 gap-6'>
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        Sports.slice(0, visibleCount).map((item, index) => (
                            <ArticleCard
                                key={index}
                                image={item.urlToImage}
                                author={item.author}
                                title={item.title}
                                description={item.description}
                                url={item.url}
                                publishedAt={item.publishedAt} 
                            />
                        ))
                    )}
                </div>

                {error && <div className="error-message">{error}</div>}

                {!loading && Sports.length > visibleCount && (
                    <div className='flex justify-center my-6'>
                        <button onClick={loadMore} className='py-3 px-6 bg-transparent border border-red-500 font-medium cursor-pointer text-red-500'>
                            View More
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Sports