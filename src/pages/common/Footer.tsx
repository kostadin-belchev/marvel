import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import marvelSingleLetterLogo from '../../assets/android-chrome-icon-194.png'

const StyledFooter = styled.footer`
  background: #222;
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
  font-size: 12px;
  text-decoration: none;
  text-transform: uppercase;
  width: 33.5px;
`

const StyledLogoLink = styled(StyledLink)`
  background-image: url(${marvelSingleLetterLogo});
  background-size: 43.5px;
  object-fit: cover;
  background-repeat: no-repeat;
  display: inline-block;
  height: 43.5px;
  text-indent: -99999999px;
  width: 43.5px;
`

export const Footer = (): JSX.Element => {
  return (
    <StyledFooter>
      <StyledLogoLink to="/">Marvel Single letter Logo</StyledLogoLink>
      <nav>
        <StyledUl>
          <StyledLi>
            <StyledLink to="/about">About Marvel</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/help">Help/FAQ</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/careers">Careers</StyledLink>
          </StyledLi>
        </StyledUl>
      </nav>
    </StyledFooter>
  )
}
