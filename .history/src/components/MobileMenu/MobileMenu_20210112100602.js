import React from "react"
import { useContext } from "react"
import NavigationContext from "../../contexts/NavigationContext"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "./MobileMenu.scss"
import MobileMenuCloseButton from "./../MobileMenuCloseButton"

const MobileMenu = () => {
  const { isNavActive, onNavActiveChange } = useContext(NavigationContext)

  return (
    <div
      className={
        isNavActive ? "sidenav-container nav-active" : "sidenav-container"
      }
      aria-hidden={!isNavActive}
    >
      <div
        role="presentation"
        className="sidenav-backdrop"
        onClick={() => onNavActiveChange()}
      ></div>

      <div className="sidenav-wrapper">
        <MobileMenuCloseButton
          onClick={() => onNavActiveChange()}
          hidden={!isNavActive}
        />

        <div
          role="presentation"
          className="sidenav"
          onClick={() => onNavActiveChange()}
        >
          <div class="sidenav-inner">
            <ul className="sidenav-list">
              <li className="sidenav-list__item">
                <Link
                  to="/"
                  className="sidenav-list__link"
                  hidden={!isNavActive}
                >
                  Home
                </Link>
              </li>
              <li className="sidenav-list__item">
                <Link
                  to="/about"
                  className="sidenav-list__link"
                  hidden={!isNavActive}
                >
                  About
                </Link>
              </li>
              <li className="sidenav-list__item">
                <Link
                  to="/work"
                  className="sidenav-list__link"
                  hidden={!isNavActive}
                >
                  Work
                </Link>
              </li>
              <li className="sidenav-list__item">
                <Link
                  to="/cv"
                  className="sidenav-list__link"
                  hidden={!isNavActive}
                >
                  CV
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
