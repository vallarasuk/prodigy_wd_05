import React from "react";
import CustomNavbar from "./CustomNavbar";
import Card from "./Card";
import useNewsData from "./useNewsData";

const Business = () => {
  const news = useNewsData("business");

  return (
    <>
      <CustomNavbar />
      <div className="container">
        <h1>Latest Business News</h1>
        <p>
          Stay updated with the latest business news from around the world.
          Discover insights, trends, and analysis on various business topics
          including finance, technology, startups, and more.
        </p>
        <div className="row">
          {news.map((article, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <Card article={article} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Business;
