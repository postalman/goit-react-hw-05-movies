import React, { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const savedQuery = searchParams.get('query') || '';
    if (savedQuery) {
      setQuery(savedQuery);
      fetchMovies(savedQuery);
    }
  }, [searchParams]);

  const fetchMovies = async (searchQuery) => {
    const apiKey = '4b5f3337782451842d3d2458bd4af72e';
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`
    );
    setMovies(response.data.results);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/movies?query=${query}`);
    fetchMovies(query);
  };

  const handleMovieClick = (movie) => {
    navigate(`/movies/${movie.id}`, { state: { from: location.pathname, query } });
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} onClick={() => handleMovieClick(movie)}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;





