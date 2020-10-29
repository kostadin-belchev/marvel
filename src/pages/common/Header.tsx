import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import marvelLogo from '../../assets/Marvel_logo_red.png'

const StyledHeader = styled.header`
  background: #222;
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`

const StyledSignInDiv = styled.div`
  padding: 0.5em;
`

const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style-type: none;
`

const StyledLi = styled.li`
  padding: 1em 2em;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  text-transform: uppercase;
`

const StyledLogoLink = styled(StyledLink)`
  background-image: url(${marvelLogo});
  background-size: 125px;
  background-repeat: no-repeat;
  display: inline-block;
  height: 50px;
  text-indent: -99999999px;
  width: 125px;
`

const StyledButton = styled.a`
  background: #222;
  font-size: 0.7em;
  text-decoration: none;
  border: 0;
  color: white;
  text-transform: uppercase;
  margin: 1em;
  &:hover {
    border-bottom: 0.2em #fff solid;
    cursor: pointer;
    margin-bottom: 0.8em;
  }
`

const StyledSpan = styled.span`
  color: white;
`

export const Header = (): JSX.Element => {
  return (
    <StyledHeader>
      <StyledSignInDiv>
        <StyledButton>Sign In</StyledButton>
        <StyledSpan> | </StyledSpan>
        <StyledButton> Sign Up</StyledButton>
      </StyledSignInDiv>
      <StyledDiv>
        <StyledLogoLink to="/">Marvel Logo</StyledLogoLink>
      </StyledDiv>
      <nav>
        <StyledUl>
          <StyledLi>
            <StyledLink to="/">Home</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/characters">Characters</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/favourites">Favourites</StyledLink>
          </StyledLi>
        </StyledUl>
      </nav>
    </StyledHeader>
  )
}
