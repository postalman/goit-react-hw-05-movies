import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const apiKey = '4b5f3337782451842d3d2458bd4af72e';
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`
      );
      setMovies(response.data.results);
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
