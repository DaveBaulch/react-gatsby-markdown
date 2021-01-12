import React from "react"
// import { Link } from "gatsby"
import "./HeaderLinks.scss"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import OpenContactButton from "./../OpenContactButton"

const Header = () => (
  <div className="nav-wrapper">
    <ul className="nav">
      <li className="nav__item">
        <AniLink fade to="/" className="nav__link">
          Home
        </AniLink>
      </li>
      <li className="nav__item">
        <AniLink fade to="/about" className="nav__link">
          About
        </AniLink>
      </li>
      <li className="nav__item">
        <AniLink fade to="/work" className="nav__link">
          Work
        </AniLink>
      </li>
      <li className="nav__item">
        <AniLink fade to="/cv" className="nav__link">
          CV
        </AniLink>
      </li>
      <li className="nav__item">
        <OpenContactButton>Contact Me!</OpenContactButton>
      </li>
    </ul>
  </div>
)

export default Header
