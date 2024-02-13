import React from "react";
import Content from "../Content/Constant.json";

const Main = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center main-page">
      <div className="text-center">
        <h1>{Content.title}</h1>
        <p>{Content.description}</p>
        <ul className="list-group">
          {Content.categories.length > 1 &&
            Content.categories.map((category, index) => (
              <li key={index} className="list-group-item">
                {category}
              </li>
            ))}
        </ul>
        <p>{Content.exploreMessage}</p>
        <button className="btn btn-primary">{Content.buttonText}</button>
      </div>
    </div>
  );
};

export default Main;
