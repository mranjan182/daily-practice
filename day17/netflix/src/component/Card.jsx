import React from "react";
import './Card.css'
export const Card = ({image,name,title,prime}) => {
  return (
    <div className="card">
      <div className="image">
        <img src={image} alt="poster" />
      </div>
      <div className="content">
        <span>{title}</span>
        <h3>{name}</h3>
        <a href={prime}>
          <button>Watch Now</button>
        </a>

      </div>
    </div>
  );
};
