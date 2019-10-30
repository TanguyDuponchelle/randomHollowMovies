import React from "react";
import MoviesCard from "./MoviesCard";


const MosaiqueMovies = ({ movies }) => {

      
    return (
      <div className='containerMosaique'>
          <MoviesCard movies={movies} />
     </div>
    );
  }

export default MosaiqueMovies;
