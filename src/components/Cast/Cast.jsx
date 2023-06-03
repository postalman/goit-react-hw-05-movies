import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { StyledImg } from './Cast.styled';
import PropTypes from 'prop-types';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieCredits = async () => {
      const apiKey = '4b5f3337782451842d3d2458bd4af72e';
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`
      );
      setCast(response.data.cast);
    };

    fetchMovieCredits();
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
  movieId: PropTypes.string,
};