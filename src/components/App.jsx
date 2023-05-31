import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';

const Home = lazy(() => import('./Home/Home'));
const Movies = lazy(() => import('./Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));

const App = () => {
  return (
    <Router>
      <>
        <Navigation />
        <Suspense fallback="Loading...">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movie/:movieId/*" element={<MovieDetails />} />
          </Routes>
        </Suspense>
      </>
    </Router>
  );
};

export default App;
