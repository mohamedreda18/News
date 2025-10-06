import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { API_KEY, BASE_URL } from "../utils/api";
import ArticleCard from "../components/ArticleCard";


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
    <div className="p-6 min-h-screen ">
      <div>
        <h1 className="text-2xl font-semibold mb-4">
          Results for: <span className="text-red-500">{query}</span>
        </h1>
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} image={article.urlToImage} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
