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
      <div className="">
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
            <ul className="sidenav-list">
              <li className="sidenav-list__item">
                <AniLink
                  to="/"
                  className="sidenav-list__link"
                  hidden={!isNavActive}
                >
                  Home
                </AniLink>
              </li>
              <li className="sidenav-list__item">
                <AniLink
                  to="/about"
                  className="sidenav-list__link"
                  hidden={!isNavActive}
                >
                  About
                </AniLink>
              </li>
              <li className="sidenav-list__item">
                <AniLink
                  to="/work"
                  className="sidenav-list__link"
                  hidden={!isNavActive}
                >
                  Work
                </AniLink>
              </li>
              <li className="sidenav-list__item">
                <AniLink
                  to="/cv"
                  className="sidenav-list__link"
                  hidden={!isNavActive}
                >
                  CV
                </AniLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
