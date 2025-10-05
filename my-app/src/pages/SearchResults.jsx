import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { API_KEY , BASE_URL } from "../utils/api";


const SearchResults = () => {
    
    const location = useLocation();
    const query = new URLSearchParams(location.search).get("q");
    
    const [articles, setArticle] = useState([]);
    const [loading, setLoading] = useState(true);
  console.log(query);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/everything?q=${query}&apiKey=${API_KEY}`
        );
        setArticle(response.data.articles);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    if (query) loadNews();
  }, [query]);

    if (loading) return <div className="p-10 text-center">Loading...</div>


  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">
        Results for: <span className="text-red-500">{query}</span>
      </h1>
      <div className="grid md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <img
              src={article.urlToImage}
              alt=""
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <h2 className="text-lg font-semibold">{article.title}</h2>
            <p className="text-sm text-gray-600">{article.description}</p>
            <a
              href={article.url}
              target="_blank"
              className="text-red-600 font-semibold mt-2 inline-block"
            >
              Read more →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
