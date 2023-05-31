import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNavigation, StyledNavigationUl, StyledLink } from './Navigation.styled'

const Navigation = () => {
  return (
    <StyledNavigation>
      <StyledNavigationUl>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/movies">Movies</StyledLink>
        </li>
      </StyledNavigationUl>
    </StyledNavigation>
  );
};

export default Navigation;
