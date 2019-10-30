import React from "react";
import './MoviesCard.css'


const MoviesCard = ({ movies }) => {

    return(
        <div>
            {movies.map(movie =>

                <div className='cardContainer' key={movie.id}>
                    <p className='cardTitle'> title : {movie.title.replace('_',' ')}</p>
                 <img className='cardImg' src={movie.posterUrl} alt={movie.title}/>
                 <p className='cardDirector'>directed by {movie.director.replace('_',' ')}</p>
                 <p className='cardYear'>release in {movie.year}</p>
                 </div>
        )}
        </div>
    )

}


export default MoviesCard