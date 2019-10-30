import React from "react";
import "./MoviesCard.css";

const MoviesCard = ({ movies }) => {
  return (
    <div className="cardBigContainer">
      {movies.map(movie => (
        <div className="cardContainer" key={movie.id}>
        <img className="cardImg" src={movie.posterUrl} alt={movie.title} />
        </div>
      ))}
    </div>
  );
};

export default MoviesCard;
