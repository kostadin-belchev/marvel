import React from 'react'
import { Link } from 'react-router-dom'

export const Header = (): JSX.Element => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="logo">
            <Link to="/">Marvel Logo</Link>
          </li>
          <li>
            <Link to="/characters">Characters</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
