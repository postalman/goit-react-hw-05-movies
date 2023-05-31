import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInputChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const apiKey = '4b5f3337782451842d3d2458bd4af72e';
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`
      );
      setSearchResults(response.data.results);
    } catch (error) {
      console.log('Error searching movies:', error);
    }
  };

  return (
    <div>
      <h2>Search Movies</h2>
      <form onSubmit={e => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button type="submit" onClick={handleSearch}>
          Search
        </button>
      </form>
      <ul>
        {searchResults.map(movie => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
