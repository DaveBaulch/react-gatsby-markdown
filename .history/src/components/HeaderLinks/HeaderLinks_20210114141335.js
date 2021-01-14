import React from "react"
// import { Link } from "gatsby"
import "./HeaderLinks.scss"
import { Link } from "gatsby"
import OpenContactButton from "./../OpenContactButton"

const Header = () => (
  <div className="nav-wrapper">
    <ul className="nav">
      <li className="nav__item">
        <Link to="/" className="nav__link" activeClassName="link-active">
          Home
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/about" className="nav__link" activeClassName="link-active">
          About
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/work" className="nav__link" activeClassName="link-active">
          Work
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/cv" className="nav__link" activeClassName="link-active">
          CV
        </Link>
      </li>
      <li className="nav__item">
        <OpenContactButton test="test"></OpenContactButton>
      </li>
    </ul>
  </div>
)

export default Header
