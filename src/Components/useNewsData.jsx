import { useState, useEffect } from "react";
import axios from "axios";

const useNewsData = (category) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("https://newsdata.io/api/1/news", {
          params: {
            apikey: "pub_3802067e17a4a04c4052985782ae045ee4915",
            country: "in",
            language: "en",
            category: category,
          },
        });
        setNews(response.data.results || []);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();

    return () => {
      // Cleanup function if needed
    };
  }, [category]); // Re-run effect when the category changes

  return news;
};

export default useNewsData;
