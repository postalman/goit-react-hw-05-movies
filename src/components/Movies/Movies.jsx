import React, { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/movies') {
      setQuery('');
    }
  }, [location]);

  useEffect(() => {
    const savedQuery = searchParams.get('query') || '';
    if (savedQuery) {
      setQuery(savedQuery);
      fetchMovies(savedQuery);
    } else {
      setMovies([]);
    }
  }, [searchParams, setSearchParams]);

  const fetchMovies = async searchQuery => {
    const apiKey = '4b5f3337782451842d3d2458bd4af72e';
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`
    );
    setMovies(response.data.results);
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   if (query.trim() !== '') {
  //     const params = new URLSearchParams();
  //     params.set('query', query);
  //     setSearchParams(params);
  //     fetchMovies(query);
  //   }
  // };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() !== '') {
      navigate(`/movies?query=${(query)}`);
      fetchMovies(query);
    }
  };

  console.log(query);
  console.log(location);
  return (
    <div>
      <h1>Search Movies</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;

Movies.propTypes = {
  movieId: PropTypes.string,
};
