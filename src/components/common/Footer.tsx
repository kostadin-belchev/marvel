import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import marvelSingleLetterLogo from '../../assets/android-chrome-icon-194.png'

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
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

const StyledSocialMediaLi = styled.li`
  margin-left: 1em;
`

const StyledLink = styled(Link)`
  color: white;
  font-size: 12px;
  text-decoration: none;
  text-transform: uppercase;
`

const StyledLogoLink = styled(StyledLink)`
  background-image: url(${marvelSingleLetterLogo});
  background-size: 43.5px;
  // object-fit: cover;
  background-repeat: no-repeat;
  display: inline-block;
  height: 43.5px;
  text-indent: -99999999px;
  width: 43.5px;
  margin: 2em;
`
const StyledSpan = styled.span`
  color: white;
  font-size: 12px;
  text-decoration: none;
  text-transform: uppercase;
`
const StyledSocialMediaLink = styled.a`
  color: #777;
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
      <StyledSpan>Follow Marvel</StyledSpan>
      <StyledUl>
        <StyledSocialMediaLi>
          <StyledSocialMediaLink
            href="http://youtube.com/marvel"
            target="_blank"
          >
            <i className="fab fa-youtube fa-2x"></i>
          </StyledSocialMediaLink>
        </StyledSocialMediaLi>
        <StyledSocialMediaLi>
          <StyledSocialMediaLink
            href="http://youtube.com/marvel"
            target="_blank"
          >
            <i className="fab fa-facebook fa-2x"></i>
          </StyledSocialMediaLink>
        </StyledSocialMediaLi>
        <StyledSocialMediaLi>
          <StyledSocialMediaLink
            href="http://youtube.com/marvel"
            target="_blank"
          >
            <i className="fab fa-twitter fa-2x"></i>
          </StyledSocialMediaLink>
        </StyledSocialMediaLi>
        <StyledSocialMediaLi>
          <StyledSocialMediaLink
            href="http://youtube.com/marvel"
            target="_blank"
          >
            <i className="fab fa-instagram fa-2x"></i>
          </StyledSocialMediaLink>
        </StyledSocialMediaLi>
      </StyledUl>
    </StyledFooter>
  )
}
