import React from "react";
import CustomNavbar from "./CustomNavbar";
import Card from "./Card"; 
import useNewsData from "./useNewsData";

const Education = () => {
  const news = useNewsData("education");  
  
  return (
    <>
      <CustomNavbar />
      <div className="container">
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

export default Education;
