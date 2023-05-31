import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledNavigation = styled.nav`
    border-radius: 16px;
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
    padding-bottom: 10px;
    padding-top: 10px;
`

export const StyledNavigationUl = styled.ul`

    display: flex;
    list-style: none;
    gap: 40px;
`

export const StyledLink = styled(Link)`
    font-size: 21px;
    font-weight:600;
    &:hover{
        color:red;
    }
`