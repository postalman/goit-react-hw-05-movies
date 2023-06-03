import React, { useEffect, useState  } from 'react';
import { useParams, Outlet, useNavigate, useLocation  } from 'react-router-dom';
import axios from 'axios';
import { StyledLink, StyledContainer, StyledDivMargin, StyledImg, StyledInfo, StyledBtn,  } from '../MovieDetails/MovieDetails.styled'
import PropTypes from 'prop-types';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetails = async () => {
        const apiKey = '4b5f3337782451842d3d2458bd4af72e';
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
      );
      setMovie(response.data);

    };

    fetchMovieDetails();
  }, [movieId]);

  //   const handleGoBack = () => {
  //   navigate(-2);
  // };
  
  const handleGoBack = () => {
    if (location.state && location.state.from) {
      navigate(location.state.from)
    } else {
      navigate('/')
    }
    
    
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  const { poster_path, title, release_date, vote_average, overview, genres } = movie;

  return (
    <div key={movieId}>
        <div>
            <StyledBtn onClick={handleGoBack}>Go Back</StyledBtn>
        </div>
        <StyledContainer>
        <div>
          <StyledImg src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
        </div>
        <StyledDivMargin>
          <h2>{title} ({release_date.substring(0, 4)})</h2>
          <p>User Score: {vote_average} %</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.map(genre => genre.name).join(', ')}</p>
        </StyledDivMargin>
      </StyledContainer>
      <StyledInfo>
        <StyledLink to={`/movies/${movieId}/cast`}>Cast</StyledLink>
        <StyledLink to={`/movies/${movieId}/reviews`}>Reviews</StyledLink>
      </StyledInfo>
      <Outlet />
    </div>
  );
};

export default MovieDetails;

MovieDetails.propTypes = {
  movieId: PropTypes.string.isRequired,
};



