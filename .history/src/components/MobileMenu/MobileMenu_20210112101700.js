import React from "react"
import { useContext } from "react"
import NavigationContext from "../../contexts/NavigationContext"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "./MobileMenu.scss"
import MobileMenuCloseButton from "./../MobileMenuCloseButton"
import OpenContactButton from "./../OpenContactButton"

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
                <AniLi
                  to="/cv"
                  className="sidenav-list__link"
                  hidden={!isNavActive}
                >
                  CV
                </AniLi>
              </li>
              <li></li>
            </ul>
            <OpenContactButton>Contact Me!</OpenContactButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
