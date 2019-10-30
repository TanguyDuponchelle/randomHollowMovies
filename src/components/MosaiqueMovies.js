import React, { Component } from "react";
import axios from "axios";
import MoviesCard from "./MoviesCard";

class MosaiqueMovies extends Component {
  state = {
    movies: []
  };

  async getMovies() {
    const res = await axios.get(
      "https://hackathon-wild-hackoween.herokuapp.com/movies"
    );
    this.setState({ movies: res.data.movies });
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
      const {movies} = this.state
    return (
      <div className='containerMosaique'>
          <MoviesCard movies = {movies} />
        
      </div>
    );
  }
}

export default MosaiqueMovies;
