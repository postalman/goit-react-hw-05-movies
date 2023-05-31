import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { StyledImg } from '../Cast/Cast.styled';
import PropTypes from 'prop-types';

const Cast = ({ movieId }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const apiKey = '4b5f3337782451842d3d2458bd4af72e';
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`
        );
        setCast(response.data.cast);
      } catch (error) {
        console.log('Error fetching movie cast:', error);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  return (
    <div>
      {cast.length > 0 ? (
        <ul>
          {cast.map(actor => (
            <li key={actor.id}>
              {actor.profile_path && (
                <StyledImg
                  src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                  alt={actor.name}
                />
              )}
              <h3>{actor.name}</h3>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No cast information available.</p>
      )}
    </div>
  );
};

export default Cast;

Cast.propTypes = {
  movieId: PropTypes.string.isRequired,
};
