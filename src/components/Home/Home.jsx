import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  

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
  console.log(location);
  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: location.pathname }}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

Home.propTypes = {
  location: PropTypes.object.isRequired,
};
