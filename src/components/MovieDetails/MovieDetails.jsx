import React, { useEffect, useState, lazy } from 'react';
import { useParams, Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { StyledLink } from '../MovieDetails/MovieDetails.styled'

const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const apiKey = '4b5f3337782451842d3d2458bd4af72e';
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
        );
        setMovie(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  useEffect(() => {
    setShowCast(location.pathname.includes('cast'));
    setShowReviews(location.pathname.includes('reviews'));
  }, [location]);

  if (error) {
    return <div>Error fetching movie details: {error}</div>;
  }

  if (!movie) {
    return <div>Loading...</div>;
  }

  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;

  const goBack = () => {
    navigate('/');
  };

  return (
    <div>
      <div>
        <button onClick={goBack}>Go back</button>
      </div>

      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
      <h2>{title}</h2>
      <p>Year: {release_date.substring(0, 4)}</p>
      <p>User Score: {vote_average} %</p>
      <p>Overview: {overview}</p>
      <p>Genres: {genres.map(genre => genre.name).join(', ')}</p>

      <div>
        <p>Additional Information:</p>
        <ul>
          <li>
            <StyledLink to={`/movie/${movieId}/cast`}>Cast</StyledLink>
          </li>
          <li>
            <StyledLink to={`/movie/${movieId}/reviews`}>Reviews</StyledLink>
          </li>
        </ul>
      </div>

      {showCast && !showReviews && (
        <>
          <Cast />
        </>
      )}

      {showReviews && !showCast && (
        <>
          <Reviews />
        </>
      )}

      <Outlet />
    </div>
  );
};

export default MovieDetails;
