import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
    font-size: 21px;
    font-weight:600;
    &:hover{
        color:red;
    }
`

export const StyledContainer = styled.div`
    display:flex;
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
    margin-bottom: 40px;
`

export const StyledDivMargin = styled.div`
    margin-left: 20px;
    padding-left: 10px;
    
`

export const StyledImg = styled.img`
    height: 350px;
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
`

export const StyledInfo = styled.div`
    display:flex;
    gap: 10px;
    padding-bottom: 10px;
    padding-top:10px;
    padding-left:10px;
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
`

export const StyledBtn = styled.button`
    background-color: grey;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        margin-top:10px;
        margin-bottom: 10px;
`

