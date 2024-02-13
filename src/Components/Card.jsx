import React from "react";
import colors from "../Content/Card.json"; // Import the JSON file

const Card = ({ article }) => {
    console.log(article)
  return (
    <div className="card" style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
      <img
        src={article.image_url}
        className="card-img-top"
        alt={article.title}
        style={{
          objectFit: "cover",
          height: "200px", // You can adjust the height as needed
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      />
      <div
        className="card-body"
        style={{
          backgroundColor: colors.card.background,
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
        }}
      >
        <h5
          className="card-title"
          style={{
            color: colors.card.title,
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "0.5rem",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {article.title}
        </h5>
        <p
          className="card-text"
          style={{
            color: colors.card.description,
            fontSize: "1rem",
            marginBottom: "1rem",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {article.description}
        </p>
        <a
          href={article.link}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: colors.card.button,
            borderColor: colors.card.buttonBorder,
            transition:
              "background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease",
            "&:hover": {
              backgroundColor: "green", // Example hover color
              borderColor: "red", // Example hover color
            },
          }}
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default Card;
